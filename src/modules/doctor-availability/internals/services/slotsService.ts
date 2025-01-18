import { dependencyContainer } from "../../../../shared/dependencies/dependencyContainer";
import SlotDTO from "../../../../shared/dtos/slotDTO";
import createSlotDTO from "../dtos/createSlotDTO";
import SlotRepository from "../repositories/slotRepository";

class SlotsService {
  private slotRepository: SlotRepository =
    dependencyContainer.getDependency("SlotRepository");

  listAllSlots(): SlotDTO[] {
    return this.slotRepository.getAll();
  }
  createSlot(slot: createSlotDTO): SlotDTO {
    return this.slotRepository.add(slot);
  }

  getAvailableSlots(): SlotDTO[] {
    const allSlots = this.slotRepository.getAll();
    const availableSlots = allSlots.filter((slot: SlotDTO) => !slot.isReserved);

    return availableSlots;
  }
}

export default SlotsService;
