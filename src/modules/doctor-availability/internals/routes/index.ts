import router from "./slotsRoutes";
import express, { Express } from "express";

const slotsRouter = express.Router();

slotsRouter.use("/api/v1/slots", router);

export default slotsRouter;
