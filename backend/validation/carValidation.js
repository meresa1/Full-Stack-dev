import { check, param } from "express-validator";

export const carValidation = [
  check("brand")
    .exists()
    .withMessage("The brand of the car is require")
    .isString()
    .withMessage({ msg: "brand should be character" })
    .isLength()
    .withMessage({ msg: "brnd should be more than three character" }),
  check("truckPlateNo")
    .exists()
    .withMessage("Body of the plate is required")
    .isNumeric()
    .withMessage({ message: "body plate should a number" }),
  check("trailerPlateNo")
    .exists()
    .withMessage("Body of the plate is require")
    .isNumeric()
    .withMessage({ message: "body plate should a number" }),
  //param("id").isNumeric().withMessage("ID should be a number!"),
];
