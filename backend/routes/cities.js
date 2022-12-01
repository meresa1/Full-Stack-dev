import express from "express";
import {
  deleteCity,
  getCity,
  getCityById,
  registerCity,
  updateCity,
} from "../controllers/citiesController.js";
import { cityValidation } from "../validation/cityValidation.js";

const cityRouter = express.Router();

cityRouter.post("/", cityValidation, registerCity);
cityRouter.get("/", getCity);
cityRouter.get("/:id", getCityById);
cityRouter.put("/:id", updateCity);
cityRouter.delete("/:id", deleteCity);

export default cityRouter;
