import { validationResult } from "express-validator";
import prisma from "../helper/prisma.js";

export const registerCity = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() });
  }
  const { name } = req.body;
  const city = await prisma.City.create({
    data: {
      name,
    },
  });
  res.json({ city });
};
export const getCity = async (req, res) => {
  const city = await prisma.City.findMany({})
    .then((doc) => {
      if (!doc) {
        res.status(400).json({ msg: `Car of id ${id} is not found!` });
      } else {
        res.status(200).json({
          total_city:doc.length,
          city: doc,
        });
      }
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
  res.json(city);
};

export const getCityById = async (req, res) => {
  const { id } = req.params;

  const result = await prisma.City.findUnique({
    where: {
      id: Number(id),
    },
  })  .then((doc) => {
    if (!doc) {
      res.status(400).json({ msg: `City of id ${id} is not found!` });
    } else {
      res.status(200).json({
        City: doc,
      });
    }
  })
  .catch((error) => {
    res.status(500).json(error.message);
  });

  res.json(result);
};

export const updateCity = async (req, res) => {
  const { id } = req.params;

  await prisma.City.update({
    where: {
      id: Number(id),
    },
    data: {
      name: req.body.name,
    },
  });
  res.json({
    success: true,
    message: "City successfully updated",
  });
};

export const deleteCity = async (req, res) => {
  const { id } = req.params;

  await prisma.City.delete({
    where: {
      id: Number(id),
    },
  });
  res.json({
    success: true,
    message: "City successfully deleted",
  });
};
