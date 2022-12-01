import { check } from "express-validator";
import prisma from "../helper/prisma.js";

export const cityValidation = [
  check("name")
    .exists()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Name should be more than three character")
    .isString()
    .withMessage("please enter only character")
  /*   .custom(async (name) => {
     return await prisma.city
        .findFirst({
        where:{
          name
        }
        })
        .then(() => {
          return Promise.reject("Name already taken");
        });
    }) */,
];
