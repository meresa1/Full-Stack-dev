import express from 'express'

import {
  register,
  login,
  customerLogin,
} from '../controllers/authController.js'
import { authValidation } from '../validation/authValidation.js'
import { customLoginValidation } from '../validation/customerValidation.js'

const authRouter = express.Router()

authRouter.post('/register',authValidation, register)
authRouter.post('/login', login)
authRouter.post('/customers/login', customLoginValidation, customerLogin)
authRouter.post('/')

export default authRouter
