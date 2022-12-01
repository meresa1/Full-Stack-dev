import prisma from "../helper/prisma.js";

export const registerRequest = async (req, res) => {
  const {
    tariff,
    no_of_cars,
    starting_date,
    end_date,
    starting_place,
    destination,
    remark,
    customer_id,
    itemId,
    pending,
  } = req.body;

  const result = await prisma.request.create({
    data: {
      tariff,
      noOfCars: Number(no_of_cars),
      startingDate: new Date(starting_date).toJSON(),
      endDate: new Date(end_date).toJSON(),
      startingPlace: starting_place,
      destination,
      pending,
      itemId: Number(itemId),
      remark,
      customerId: customer_id,
    },
    /*  include: {
      itemId,
      customer_id,
    }, */
  });
  res.json(result);
};

export const getRequests = async (req, res) => {
  const requests = await prisma.request.findMany({
    include: {
      customer: true,
      item: true,
    },
  });
  res.json(requests);
};

export const getRequestById = async (req, res) => {
  const { id } = req.params;

  const request = await prisma.request.findUnique({
    where: {
      id: Number(id),
    },
  });

  res.json(request);
};

export const getRequestByConmpanyId = async (req, res) => {
  const { id } = req.params;

  const request = await prisma.request.findMany({
    where: {
      customerId: Number(id),
      pending: true,
    },
    include: { item: { select: { name: true, type: true } } },
  });

  res.json(request);
};

export const getRequestByYourCustomerId = async (req, res) => {
  const { id } = req.params;

  const request = await prisma.request.count({
    where: {
      customerId: Number(id),
      pending: true,
    },
  });

  res.json(request);
};

export const getRequestOrderdByCompanyId = async (req, res) => {
  const { id } = req.params;

  const request = await prisma.request.findMany({
    where: {
      customerId: Number(id),
      pending: false,
    },
    //include: { item: { select: { name: true, type: true } } },
  });

  res.json(request);
};

export const updateRequest = async (req, res) => {
  const { id } = req.params;

  await prisma.request.update({
    where: {
      id: Number(id),
    },
    data: {
      tariff,
      noOfCars: Number(no_of_cars),
      startingDate: new Date(starting_date).toJSON(),
      endDate: new Date(end_date).toJSON(),
      startingPlace: starting_place,
      destination,
      pending,
      itemId: Number(itemId),
      remark,
      customerId: customer_id,
    },
  });
  res.json({
    success: true,
    message: "user successfully updated",
  });
};

export const deleteRequest = async (req, res) => {
  const { id } = req.params;

  await prisma.request.delete({
    where: {
      id: Number(id),
    },
  });
  res.json({
    success: true,
    message: "request successfully deleted",
  });
};

export const getOrderdrequest = async (req, res) => {
  const { id } = req.params;
  const pend = await prisma.request.findFirst({
    where: {
      pending: false,
      id: Number(id),
    },
    include: {
      customer: {
        select: {
          companyName: true,
          orders: true,
          id: true,
        },
      },
    },
  });
  res.json(pend);
};

export const getOrderdByCustomerId = async (req, res) => {
  const { id } = req.params;
  const pend = await prisma.customer.findUnique({
    where: {
      pending: false,
      id: Number(id),
    },
  });
  res.json(pend);
};

export const getPending = async (req, res) => {
  const pending = await prisma.request.findMany({
    where: {
      pending: true,
    },
  });
  res.json(pending);
};

export const getInfo = async (req, res) => {
  const { id } = req.params;
  const requestInfo = await prisma.request.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      customer: {
        select: {
          id: true,
          companyName: true,
          firstName: true,
          lastName: true,
        },
      },
      item: {
        select: {
          id: true,
          name: true,
          quantity: true,
          type: true,
        },
      },
    },
  });

  res.json(requestInfo);
};
