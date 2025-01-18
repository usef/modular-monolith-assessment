import slotRepository from "../repositories/slotRepository";
import SlotDTO from "../dtos/slotDTO";
import createSlotDTO from "../dtos/createSlotDTO";

class SlotsService {
  listAllSlots(): SlotDTO[] {
    return slotRepository.getAll();
  }
  createSlot(slot: createSlotDTO): SlotDTO {
    return slotRepository.add(slot);
  }

  getAvailableSlots(): SlotDTO[] {
    const allSlots = slotRepository.getAll();
    const availableSlots = allSlots.filter((slot: SlotDTO) => !slot.isReserved);

    return availableSlots;
  }
}

export default new SlotsService();
