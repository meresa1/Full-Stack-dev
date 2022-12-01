import express from "express";
import {
  deletecar,
  getActiveCars,
  getcarById,
  getcars,
  registerCar,
  updatecar,
} from "../controllers/carsController.js";
import { carValidation } from "../validation/carValidation.js";

const carRouter = express.Router();

carRouter.post("/", carValidation, registerCar);

carRouter.get("/active/", getActiveCars);
carRouter.get("/", getcars);
carRouter.get("/:id", getcarById);
carRouter.delete("/:id", deletecar);
carRouter.put("/:id", updatecar);

export default carRouter;
