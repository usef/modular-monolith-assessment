import SlotsController from "../controllers/slotsController";
import express from "express";
import slotsValidator from "../../../../shared/middlewares/slots.validator";

const router = express.Router();

router
  .route("/")
  .get(SlotsController.listSlots)
  .post(slotsValidator(), SlotsController.addSlot);

export default router;
