import express from 'express'
import {
  deleteCustomerAddress,
  getCustomerAddressById,
  getCustomerAddresss,
  registerCustomerAddress,
  updateCustomerAddress,
} from '../controllers/customerAddressesController.js'

const customerAddressRouter = express.Router()

customerAddressRouter.post('/', registerCustomerAddress)
customerAddressRouter.get('/', getCustomerAddresss)
customerAddressRouter.get('/:id', getCustomerAddressById)
customerAddressRouter.put('/:id', updateCustomerAddress)
customerAddressRouter.delete('/:id', deleteCustomerAddress)

export default customerAddressRouter
