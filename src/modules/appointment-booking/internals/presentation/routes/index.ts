import SlotController from "../controllers/slot.controller";
import express from "express";
import AppointmentController from "../controllers/appointment.controller";

const router = express.Router();

router
    .route("/api/slots/available")
    .get(SlotController.getAvailableSlots);

router
    .route("/api/appointments")
    .post(AppointmentController.bookAppointment);

export default router;
