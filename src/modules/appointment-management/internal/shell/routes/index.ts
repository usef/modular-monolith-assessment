import express from "express";
import {AppointmentController} from "../controllers/appointment.controller";

const router = express.Router();

router
    .route("/api/appointments/upcoming")
    .get(AppointmentController.getUpcomingAppointments);

export default router;
