import { check } from "express-validator";

export const driverValidation = [
  check("firstName")
    .exists()
    .withMessage("First Name is required")
    .isLength({ min: 3 })
    .withMessage("First Name should be more than three character")
    .isString()
    .withMessage("please enter only a character"),
  check("lastName")
    .exists()
    .withMessage("Last Name is required")
    .isString()
    .withMessage("please enter only character"), //.trim() .escape(),
  check("email")
    .exists()
    .withMessage("Email is required")
    .isEmail()
    .withMessage({ message: "please enter valid email", status: 4000 })
    .normalizeEmail(),
];
