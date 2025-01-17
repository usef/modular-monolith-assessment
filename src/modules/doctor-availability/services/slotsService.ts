import slotRepository from "../repositories/slotRepository";
import Slot from "../models/slotMode";
import { v4 as uuid4 } from "uuid";
import constants from "../../../constants/constants";
import slotDTO from "../dtos/slotDTO";

function listAllSlots(): Slot[] {
  return slotRepository.getAll();
}

function createSlot(slot: slotDTO) {
  const newSlot = new Slot(
    uuid4(),
    slot.time,
    constants.doctorId,
    constants.doctorName,
    false,
    slot.cost
  );
  slotRepository.add(newSlot);
  return newSlot;
}

export default { listAllSlots, createSlot };
