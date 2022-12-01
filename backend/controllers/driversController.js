import { validationResult } from "express-validator";
import prisma from "../helper/prisma.js";

export const registerDriver = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()[0] });
  }
  const {
    firstName,
    lastName,
    email,
    phone,
    age,
    gender,
    licenceGrade,
    licenseNo,
    salary,
  } = req.body;
  const driver = await prisma.driver.create({
    data: {
      email,
      firstName,
      lastName,
      licenseNo,
      licenceGrade,
      phone: Number(phone),
      gender,
      salary: Number(salary),
      age: Number(age),
    },
  });
  res.json(driver);
  /*   const {
    email,
    firstName,
    lastName,
    licenseNo,
    licenceGrade,
    phone,
    gender,
    salary,
    age,
    
  } = req.body;
  const driverEmail = await prisma.driver.findFirst({
    where: {
      email,
    },
  });
  if (driverEmail) {
    res.status(409).json({ msg: "Email is Already taken!" });
  } else {
    const result = await prisma.driver.create({
      data: {
        email,
        firstName,
        lastName,
        phone,
        licenceGrade,
        licenseNo,
        gender,
        salary,
        age
      },
    });
    res.json(result);
  } */
};

export const getDrivers = async (req, res) => {
  const Drivers = await prisma.driver.findMany({});
  res.json(Drivers);
};

export const getDriverById = async (req, res) => {
  const { id } = req.params;

  const Driver = await prisma.Driver.findUnique({
    where: {
      id: Number(id),
    },
  });

  res.json(Driver);
};

export const updateDriver = async (req, res) => {
  const { id } = req.params;

  await prisma.driver.update({
    where: {
      id: Number(id),
    },
    data: {
      firstName: req.body.firstName,
      email: req.body.email,
      lastName: req.body.lastName,
    },
  });
  res.json({
    success: true,
    message: "user successfully updated",
  });
};

export const deleteDriver = async (req, res) => {
  const { id } = req.params;

  await prisma.driver.delete({
    where: {
      id: Number(id),
    },
  });
  res.json({
    success: true,
    message: "Driver successfully deleted",
  });
};
