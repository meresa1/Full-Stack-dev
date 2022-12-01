import express from 'express'
import authRouter from './auth.js'
import carRouter from './cars.js'
import cityRouter from './cities.js'
import customerAddressRouter from './customerAddresses.js'
import customerRouter from './customers.js'
import driverRouter from './drivers.js'
import itemRouter from './item.js'
import orderRouter from './orders.js'
import requestsRouter from './requests.js'
import statRouter from './stats.js'
import subCitiesRouter from './subCities.js'
import userAddressRouter from './userAddresses.js'
import userRouter from './users.js'
const api = express
  .Router()
  .use('/auth', authRouter)
  .use('/users', userRouter)
  .use('/car', carRouter)
  .use('/city', cityRouter)
  .use('/customerAddress', customerAddressRouter)
  .use('/customers', customerRouter)
  .use('/driver', driverRouter)
  .use('/requests', requestsRouter)
  .use('/orders', orderRouter)
  .use('/item', itemRouter)
  .use('/subCity', subCitiesRouter)
  .use('/userAddress', userAddressRouter)
  .use('/stats', statRouter)
export default express.Router().use('/api', api)
