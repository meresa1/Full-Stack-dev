import prisma from "../helper/prisma.js";

export const getUsers = async (req, res) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
    },
  });
  res.json(users);
};

export const getUserById = async (req, res) => {
  const { id } = req.params;

  const result = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
    },
  });

  res.json(result);
};

export const updateUser = async (req, res) => {
  const { id } = req.params;

  await prisma.user.update({
    where: {
      id: Number(id),
    },
    data: {
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      password: req.body.password,
    },
  });
  res.json({
    success: true,
    message: "user successfully updated",
  });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });
  res.json({
    success: true,
    message: "user successfully deleted",
  });
};

