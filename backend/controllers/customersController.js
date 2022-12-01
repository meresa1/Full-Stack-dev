import prisma from "../helper/prisma.js";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";

export const registerCustomer = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array()[0] });
  const { company_name, first_name, last_name, password } = req.body;

  // CREATE CUSTOMER ADDRESS
  // const addressData = address
  //     ? address.map((address) => {
  //         return { title: address.phone_no, content: address.email || undefined };
  //     })
  //     : [];

  //HASH THE PASSWORD
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const companyname = await prisma.customer.findFirst({
    where: { companyName: company_name },
  });
  //console.log(companyname)
  if (companyname) {
    res.status(409).json("Company Name is already taken!");
  } else {
    const result = await prisma.customer.create({
      data: {
        companyName: company_name,
        firstName: first_name,
        lastName: last_name,
        password: hashedPassword,
        // customerAddress: {
        //     create: addressData,
        // },
      },
      select: {
        id: true,
        companyName: true,
        firstName: true,
        lastName: true,
      },
    });
    res.json(result);
  }
};
export const registerCustomerWithAddress = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array()[0] });
  const { company_name, first_name, last_name, password } = req.body;

  // CREATE CUSTOMER ADDRESS
  // const addressData = address
  //     ? address.map((address) => {
  //         return { title: address.phone_no, content: address.email || undefined };
  //     })
  //     : [];

  //HASH THE PASSWORD
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const companyname = await prisma.customer.findFirst({
    where: { companyName: company_name },
  });
  //console.log(companyname)
  if (companyname) {
    res.status(409).json("Company Name is already taken!");
  } else {
    const result = await prisma.customer.create({
      data: {
        companyName: company_name,
        firstName: first_name,
        lastName: last_name,
        password: hashedPassword,
        // customerAddress: {
        //     create: addressData,
        // },
      },
      select: {
        id: true,
        companyName: true,
        firstName: true,
        lastName: true,
        
      },
    });
    
    if (result) {
      const { phoneNo, phoneNo2, email } = req.body;
      const address = await prisma.customerAddress.create({
        data: {
          customerId: Number(result.id),
          phoneNo: Number(phoneNo),
          phoneNo2: Number(phoneNo2),
          email,
        },
      });
    }
    res.json(result);
  }
};

export const getCustomers = async (req, res) => {
  const customers = await prisma.customer.findMany({
    select: {
      id: true,
      companyName: true,
      firstName: true,
      lastName: true,
    },
  });
  res.json(customers);
};

export const getRequestOrderdByCustomersId = async (req, res) => {
  const { id } = req.params;
  const customers = await prisma.customer.findMany({
    where: {
      id: Number(id),
    },
    select: {
      id: true,
      companyName: true,
      firstName: true,
      lastName: true,
      request: {
        where: {
          pending: false,
        },
        include: { item: true },
      },
    },
  });
  res.json(customers);
};

export const getRequestNotOrderdByCustomersId = async (req, res) => {
  const { id } = req.params;
  const customers = await prisma.customer.findMany({
    where: {
      id: Number(id),
    },

    select: {
      id: true,
      companyName: true,
      firstName: true,
      lastName: true,
      request: {
        where: {
          pending: true,
        },
        include: { item: true },
      },
    },
  });
  res.json(customers);
};

export const getCustomerById = async (req, res) => {
  const { id } = req.params;
  /*    if (id==!NaN(Number())) {
    res.status.json(`Custimer Id of ${id} is Not an Integer`)
  } */
  const custom = await prisma.customer.findFirst({ where: { id: Number(id) } });
  if (!custom) {
    res.status(404).json({ msg: `Customer id of ${id} is not Found` });
  } else {
    const customer = await prisma.customer.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        companyName: true,
        firstName: true,
        lastName: true,
      },
    });

    res.json(customer);
  }
};

export const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array()[0] });
  const custom = await prisma.customer.findFirst({ where: { id: Number(id) } });
  if (!custom) {
    res.status(404).json({ msg: `Customer id of ${id} is not Found` });
  } else {
    await prisma.customer.update({
      where: {
        id: Number(id),
      },
      data: {
        companyName: req.body.company_name,
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        password: req.body.password,
      },
    });
    res.json({
      success: true,
      message: "user successfully updated",
    });
  }
};

export const deleteCustomer = async (req, res) => {
  const { id } = req.params;

  await prisma.customer.delete({
    where: {
      id: Number(id),
    },
  });
  res.json({
    success: true,
    message: "customer successfully deleted",
  });
};

/* export const getCountsRequestNotOrderdByCustomerId = async (req, res) => {
  let stats = {
    pending: 0,
    requests: 0,
  };
  const { id } = req.params;
  const pendingRequestCount = await prisma.customer.count({
    where: {
      orders: { every: true },
      id: Number(id),
    },
  });

  stats.pending = pendingRequestCount;
  res.json(stats);
};
 */
