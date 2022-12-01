import express from 'express'
import {
  deleteDriver,
  getDriverById,
  getDrivers,
  registerDriver,
  updateDriver,
} from '../controllers/driversController.js'
import { driverValidation } from '../validation/driverValidation.js'

const driverRouter = express.Router()

driverRouter.post('/',driverValidation, registerDriver)
driverRouter.get('/', getDrivers)
driverRouter.get('/:id', getDriverById)
driverRouter.put('/:id', updateDriver)
driverRouter.delete('/:id', deleteDriver)

export default driverRouter
