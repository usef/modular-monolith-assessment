import { body } from "express-validator";

export default () => {
  return [
    body("time")
      .notEmpty()
      .withMessage("time is required!")
      .isDate(),
    body("cost")
      .notEmpty()
      .withMessage("cost is required!")
      .isNumeric()
      .withMessage("cost has to be a valid decimal"),
  ];
};
