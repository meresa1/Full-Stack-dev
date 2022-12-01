import express from "express";
import { deleteUserAddress, getUserAddressById, getUserAddresss, registerUserAddress, updateUserAddress } from "../controllers/userAddressesController.js";


const userAddressRouter = express.Router();

userAddressRouter.post("/user",registerUserAddress);
userAddressRouter.get("/",getUserAddresss);
userAddressRouter.get("/:id",getUserAddressById);
userAddressRouter.put("/:id",updateUserAddress);
userAddressRouter.delete("/:id",deleteUserAddress)

export default userAddressRouter;
