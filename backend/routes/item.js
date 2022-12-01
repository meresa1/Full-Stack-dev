import express from "express";
import {
  getItem,
  getItemById,
  registerItem,
} from "../controllers/itemController.js";
import { auth } from "../middleware/auth.js";
import { itemValidation } from "../validation/ItemValidation.js";

const itemRouter = express.Router();

itemRouter.post("/", itemValidation, registerItem);
itemRouter.get("/", getItem);
itemRouter.get("/:id", getItemById);

export default itemRouter;
