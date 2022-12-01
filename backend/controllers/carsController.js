import prisma from '../helper/prisma.js'
import { validationResult } from 'express-validator'

export const registerCar = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array()[0] })
  const {
    truckPlateNo,
    trailerPlateNo,
    status,
    brand,

    capacity,
    drivePerLiter,
  } = req.body
  const car = await prisma.car.create({
    data: {
      brand,
      capacity,
      drivePerLiter,
      status,
      trailerPlateNo,
      truckPlateNo,
    },
  })
  res.status(200).json(car)
}
/* export const getcars = async (req, res) => {
  const cars = await prisma.car
    .findMany({})
    .then((doc) => {
      if (!doc) {
        res.status(400).json({ msg: 'List of Car is not found!' })
      } else {
        res.status(200).json({
          car: doc,
        })
      }
    })
    .catch((error) => {
      res.status(500).json(error.message)
    })
  res.json(cars)
} */

export const getcars = async (req, res) => {
  try {
    const car = await prisma.car.findMany({})
    res.json(car)
  } catch (error) {
    console.log(error)
  }
}
export const getcarById = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array()[0] })
  const { id } = req.params
  await prisma.car
    .findUnique({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        cabinPlateNo: true,
        bodyPlateNo: true,
        brand: true,
        status: true,
        drivePerLiter: true,
      },
    })
    .then((doc) => {
      if (!doc) {
        res.status(400).json({ msg: `Car of id ${id} is not found!` })
      } else {
        res.status(200).json({
          car: doc,
        })
      }
    })
    .catch((error) => {
      res.status(500).json(error.message)
    })
  // res.json(result);
}

export const updatecar = async (req, res) => {
  const { id } = req.params

  await prisma.car.update({
    where: {
      id: Number(id),
    },
    data: {
      brand: req.body.brand,
      drivePerLiter: req.body.drivePerLiter,
      cabinPlateNo: req.body.cabinPlateNo,
      capacity: req.body.capacity,
    },
  })
  res.json({
    success: true,
    message: 'car successfully updated',
  })
}

export const deletecar = async (req, res) => {
  const { id } = req.params

  await prisma.car.delete({
    where: {
      id: Number(id),
    },
  })
  res.json({
    success: true,
    message: 'car successfully deleted',
  })
}

export const getActiveCars = async (req, res) => {
  const cars = await prisma.car.findMany({
    where: {
      status: 'active',
    },
  })
  res.json(cars)
}
