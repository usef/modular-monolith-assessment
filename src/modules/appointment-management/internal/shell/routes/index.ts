import express from "express";
import {AppointmentController} from "../controllers/appointment.controller";

const router = express.Router();

router
    .route("/api/appointments/upcoming")
    .get(AppointmentController.getUpcomingAppointments);

router.route("/api/appointments/:id/cancel").put(AppointmentController.cancelAppointment);
router.route("/api/appointments/:id/complete").put(AppointmentController.completeAppointment);

export default router;
