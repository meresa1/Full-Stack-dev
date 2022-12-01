//import { validationResult } from "express-validator";
import { validationResult } from "express-validator";
import prisma from "../helper/prisma.js";

export const registerItem = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()[0] });
  }
  const { name, type, quantity } = req.body;
  const result = await prisma.item.create({
    data: {
      name,
      type,
      quantity: Number(quantity),
    },
  });
  res.json(result);
};

export const getItem = async (req, res) => {
  const item = await prisma.item.findMany({});
  res.json(item);
};
export const getItemById = async (req, res) => {
  const { id } = req.params;
  const item = await prisma.item.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.status(200).json([item]);
};
