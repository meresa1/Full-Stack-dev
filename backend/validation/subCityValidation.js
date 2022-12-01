import { check } from "express-validator";

export const subCityValidation = [
  check("name")
    .exists()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Name should be more than three character")
    .isString()
    .withMessage("please enter only character"),
];
