import prisma from "../helper/prisma.js";

export const registerUserAddress = async (req, res) => {
  const { phoneNo, phoneNo2, email, cityId, subCityId, userId } = req.body;
  const userAddress = await prisma.userAddress.create({
    data: {
      phoneNo: Number(phoneNo),
      email,
      phoneNo2: Number(phoneNo2),
      city: { connect: { id: Number(cityId) } },
      subCity: { connect: { id: Number(subCityId) } },
      user: { connect: { id: Number(userId) } },
    },
  });
  res.json(userAddress);
};


export const getUserAddresss = async (req, res) => {
  const userAddresss = await prisma.userAddress.findMany({});
  res.json(userAddresss);
};

export const getUserAddressById = async (req, res) => {
  const { id } = req.params;

  const userAddress = await prisma.userAddress.findUnique({
    where: {
      id: Number(id),
    },
  });

  res.json(userAddress);
};

export const updateUserAddress = async (req, res) => {
  const { id } = req.params;

  await prisma.userAddress.update({
    where: {
      id: Number(id),
    },
    data: {
      phoneNo: req.body.phoneNo,
      email: req.body.email,
      phoneNo2: req.body.phoneNo2,
    },
  });
  res.json({
    success: true,
    message: "user successfully updated",
  });
};

export const deleteUserAddress = async (req, res) => {
  const { id } = req.params;

  await prisma.userAddress.delete({
    where: {
      id: Number(id),
    },
  });
  res.json({
    success: true,
    message: "UserAddress successfully deleted",
  });
};
