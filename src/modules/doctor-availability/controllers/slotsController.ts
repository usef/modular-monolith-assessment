import { Request, Response } from "express";
import SlotsService from "../services/slotsService";
import slotDTO from "../dtos/slotDTO";
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
  const slot: slotDTO = req.body;
  const createdSlot = SlotsService.createSlot(slot);

  res.json({ message: "sucess", slot: createdSlot });
}

export default { listSlots, addSlot };
