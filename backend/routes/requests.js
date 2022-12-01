import express from 'express'
import {
  deleteRequest,
  getInfo,
  getOrderdByCustomerId,
  getOrderdrequest,
  getPending,
  getRequestById,
  getRequests,
  registerRequest,
  updateRequest,
  getRequestByConmpanyId,
  getRequestOrderdByCompanyId,
  getRequestByYourCustomerId,
} from '../controllers/requestsController.js'

const requestsRouter = express.Router()

requestsRouter.get('/pending', getPending)
requestsRouter.get('/orderd/:id', getOrderdrequest)
requestsRouter.get('/customer/:id', getRequestByConmpanyId)
requestsRouter.get('/customer/orderd/:id', getRequestOrderdByCompanyId)
requestsRouter.get('/request/count/:id', getRequestByYourCustomerId)
requestsRouter.get('/info/:id', getInfo)
requestsRouter.post('/', registerRequest)
requestsRouter.get('/:id', getRequestById)
requestsRouter.put('/:id', updateRequest)
requestsRouter.delete('/:id', deleteRequest)
requestsRouter.get('/', getRequests)

export default requestsRouter
