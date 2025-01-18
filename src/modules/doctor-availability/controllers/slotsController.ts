import { Request, Response } from "express";
import SlotsService from "../services/slotsService";
import createSlotDTO from "../dtos/createSlotDTO";
import { validationResult } from "express-validator";

async function listSlots(req: Request, res: Response) {
  const slots = SlotsService.listAllSlots();
  res.json({ message: "success", slots });
}

async function addSlot(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    res.json({ message: "failure" });
  }
  const slot: createSlotDTO = req.body;
  const createdSlot = SlotsService.createSlot(slot);

  res.json({ message: "success", slot: createdSlot });
}

export default { listSlots, addSlot };
