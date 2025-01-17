import slotsRouter from "./routes/slotsRoutes";
import { Express } from "express";

const mountRoutes = (app: Express) => {
  app.use("/api/v1/slots", slotsRouter);
};

export default mountRoutes;
