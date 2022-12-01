import { check } from "express-validator";

export const itemValidation = [
  check("name")
    .exists()
    .withMessage("Item Name is Required!")
    .isLength()
    .withMessage("Item name is required, At least three character"),
  check("type").exists().withMessage("Item Type is Required!"),
  check("quantity").exists().withMessage("Item Quatity is Required!"),
];
