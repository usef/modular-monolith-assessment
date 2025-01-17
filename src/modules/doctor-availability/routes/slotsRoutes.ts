import availabilityController from "../controllers/slotsController";
import express from "express";
import slotsValidator from "../../../middlewares/slotsValidator";

const router = express.Router();

router
  .route("/")
  .get(availabilityController.listSlots)
  .post(slotsValidator(), availabilityController.addSlot);

export default router;
