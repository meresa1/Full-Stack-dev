import express from "express";
import { getOrder, registerOrder, updateRequestOrder } from "../controllers/ordersController.js";
const orderRouter = express.Router();

orderRouter.post("/", registerOrder);
orderRouter.put("/update/:id",updateRequestOrder);
orderRouter.get('/',getOrder)

export default orderRouter;
