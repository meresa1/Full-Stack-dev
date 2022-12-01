import express from "express";
import {
  deleteSubCity,
  getSubCity,
  getSubCityById,
  registerSubCity,
  updateSubCity,
} from "../controllers/subCitiesControllers.js";
import { subCityValidation } from "../validation/subCityValidation.js";

const subCitiesRouter = express.Router();

subCitiesRouter.post("/",subCityValidation, registerSubCity);
subCitiesRouter.get("/", getSubCity);
subCitiesRouter.get("/:id", getSubCityById);
subCitiesRouter.put("/:id", updateSubCity);
subCitiesRouter.delete("/:id", deleteSubCity);

export default subCitiesRouter;
