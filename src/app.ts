import express from "express";
import instantiateDependency from "./shared/dependencies/registerDependency";
instantiateDependency();
import slotsRouter from "./modules/doctor-availability/internals/routes/index";
const app = express();
app.use(express.json());

app.use(slotsRouter);

export default app;
