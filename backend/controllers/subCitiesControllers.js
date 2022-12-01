import { validationResult } from "express-validator";
import prisma from "../helper/prisma.js";

export const registerSubCity = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() });
  }
  const { name } = req.body;
  const SubCity = await prisma.subCity.create({
    data: {
      name,
    },
  });
  res.json({ SubCity });
};
export const getSubCity = async (req, res) => {
  const subCity = await prisma.subCity.findMany({});
  res.json(subCity);
};

export const getSubCityById = async (req, res) => {
  const { id } = req.params;

  const result = await prisma.subCity.findUnique({
    where: {
      id: Number(id),
    },
  });

  res.json(result);
};

export const updateSubCity = async (req, res) => {
  const { id } = req.params;

  await prisma.subCity.update({
    where: {
      id: Number(id),
    },
    data: {
      name: req.body.name,
    },
  });
  res.json({
    success: true,
    message: "SubCity successfully updated",
  });
};

export const deleteSubCity = async (req, res) => {
  const { id } = req.params;

  await prisma.subCity.delete({
    where: {
      id: Number(id),
    },
  });
  res.json({
    success: true,
    message: "SubCity successfully deleted",
  });
};
