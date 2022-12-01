import { check } from "express-validator";

export const customerValidation = [
  check("company_name")
    .exists()
    .withMessage("Company Name is required")
    .isLength({ min: 3 })
    .withMessage(
      "Company name is required, At least three character"
    )
    .isString()
    .withMessage("please enter only a character"),

  check("first_name")
    .exists()
    .withMessage("First Name is required")
    .isLength({ min: 3 })
    .withMessage("First Name should be more than three character")
    .isString()
    .withMessage("please enter only a character"),

  check("last_name")
    .exists()
    .withMessage("Last Name is required")
    .isLength({ min: 3 })
    .withMessage("Last Name should be more than three character")
    .isString()
    .withMessage("please enter only character"),
  check("password")
    .exists()
    .withMessage("Password is required!")
    .isLength({
      min: 6,
      max: 12,
    })
    .withMessage("Password must be 6 or more characters")
    .matches("[0-9]")
    .withMessage("Password Must Contain a Number")
    .matches("[A-Z]")
    .withMessage("Password Must Contain an Uppercase Letter"),
];
export const customLoginValidation = [
  check("company_name")
    .exists()
    .withMessage("Company Name is required")
    .isLength({ min: 3 })
    .withMessage("Company name is required, At least three character")
    .isString()
    .withMessage("please enter only a character"),
  check("password")
    .exists()
    .withMessage("Password is required!")
    .isLength({
      min: 6,
      max: 12,
    })
    .withMessage("Password must be 6 or more characters")
    .matches("[0-9]")
    .withMessage("Password Must Contain a Number")
    .matches("[A-Z]")
    .withMessage("Password Must Contain an Uppercase Letter"),
];
