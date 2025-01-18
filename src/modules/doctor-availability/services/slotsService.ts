import slotRepository from "../repositories/slotRepository";
import Slot from "../models/slotModel";
import createSlotDTO from "../dtos/createSlotDTO";

function listAllSlots(): Slot[] {
  return slotRepository.getAll();
}

function createSlot(slot: createSlotDTO) {
  return slotRepository.add(slot);
}

export default { listAllSlots, createSlot };
