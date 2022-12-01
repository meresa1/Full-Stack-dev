import express from "express";
import {
    getCounts
} from "../controllers/statsController.js";

const statRouter = express.Router();

statRouter.get("/counts", getCounts);

export default statRouter;
