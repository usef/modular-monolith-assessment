import express from "express";
import instantiateDependency from "./shared/dependencies/registerDependency";

instantiateDependency();
import slotsRouter from "./modules/doctor-availability/internals/routes";
import appointmentRouter from "./modules/appointment-booking/internals/presentation/routes"

const app = express();
app.use(express.json());

app.use(slotsRouter);
app.use(appointmentRouter);

export default app;
