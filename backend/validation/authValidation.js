import { check } from "express-validator";

export const authValidation = [
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

    //.isString().isLowercase()
    .isString()
    .withMessage("please enter only character"),

  check("password", "Password must be 6 or more characters")
    .isLength({
      min: 6,
      max: 12,
    })
    .matches("[0-9]")
    .withMessage("Password Must Contain a Number")
    .matches("[A-Z]")
    .withMessage("Password Must Contain an Uppercase Letter"),
  /* .matches(/\d/)
    .withMessage("must contain a number") */
];
