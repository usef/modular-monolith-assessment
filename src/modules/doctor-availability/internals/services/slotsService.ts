import { dependencyContainer } from "../../../../shared/dependencies/dependencyContainer";
import SlotDto from "../../../../shared/dtos/slot.dto";
import createSlotDTO from "../dtos/createSlotDTO";
import SlotRepository from "../repositories/slotRepository";

class SlotsService {
  private slotRepository: SlotRepository =
    dependencyContainer.getDependency("SlotRepository");

  listAllSlots(): SlotDto[] {
    return this.slotRepository.getAll();
  }
  createSlot(slot: createSlotDTO): SlotDto {
    return this.slotRepository.add(slot);
  }

  getAvailableSlots(): SlotDto[] {
    const allSlots = this.slotRepository.getAll();
    const availableSlots = allSlots.filter((slot: SlotDto) => !slot.isReserved);

    return availableSlots;
  }
}

export default SlotsService;
