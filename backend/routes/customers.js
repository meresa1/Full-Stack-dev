import express from "express";
import {
  deleteCustomer,
  //getCountsRequestNotOrderdByCustomerId,
  getCustomerById,
  getCustomers,
  getRequestNotOrderdByCustomersId,
  getRequestOrderdByCustomersId,
  registerCustomer,
  registerCustomerWithAddress,
  updateCustomer,
} from "../controllers/customersController.js";
import { customerValidation } from "../validation/customerValidation.js";

const customerRouter = express.Router();

customerRouter.get("/", getCustomers);
customerRouter.get("/:id", getCustomerById);
customerRouter.get("/orderd/:id", getRequestOrderdByCustomersId);
customerRouter.get("/notOrderd/:id", getRequestNotOrderdByCustomersId);
//customerRouter.get("/count/notOrderd/:id",getCountsRequestNotOrderdByCustomerId)
customerRouter.post("/register", customerValidation, registerCustomer);
customerRouter.post("/register/address", registerCustomerWithAddress);
customerRouter.put("/:id", updateCustomer);
customerRouter.delete("/:id", deleteCustomer);

export default customerRouter;
