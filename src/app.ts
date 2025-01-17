import express from "express";
import mountRoutes from "./modules/doctor-availability/index";
const app = express();
app.use(express.json());
mountRoutes(app);

export default app;
