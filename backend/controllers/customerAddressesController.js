import prisma from "../helper/prisma.js";

export const registerCustomerAddress = async (req, res) => {
  const { phoneNo, phoneNo2, email, subCityId, cityId, customer_id } = req.body;

  const result = await prisma.customerAddress.create({
    data: {
      phoneNo:Number(phoneNo),
      phoneNo2:Number(phoneNo2),
      email,
      city: { connect: { id: Number(cityId) } },
      subCity: { connect: { id: subCityId } },
      customer: { connect: { id: customer_id } },
    },
  });
  res.json(result);
};

export const getCustomerAddresss = async (req, res) => {
  const customerAddresss = await prisma.customerAddress.findMany({});
  res.json(customerAddresss);
};

export const getCustomerAddressById = async (req, res) => {
  const { id } = req.params;

  const customerAddress = await prisma.customerAddress.findUnique({
    where: {
      id: Number(id),
    },
  });

  res.json(customerAddress);
};

export const updateCustomerAddress = async (req, res) => {
  const { id } = req.params;

  await prisma.customerAddress.update({
    where: {
      id: Number(id),
    },
    data: {
      phoneNo: req.body.phoneNo,
      phoneNo2: req.body.phoneNo2,
      email: req.body.email,
    },
  });
  res.json({
    success: true,
    message: "user successfully updated",
  });
};

export const deleteCustomerAddress = async (req, res) => {
  const { id } = req.params;

  await prisma.CustomerAddress.delete({
    where: {
      id: Number(id),
    },
  });
  res.json({
    success: true,
    message: "CustomerAddress successfully deleted",
  });
};
