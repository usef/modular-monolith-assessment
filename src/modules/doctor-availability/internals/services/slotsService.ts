import {dependencyContainer} from "../../../../shared/dependencies/dependencyContainer";
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

    updateSlot(slot: SlotDto) {
        return this.slotRepository.update(slot);
    }

    getAvailableSlots(): SlotDto[] {
        const allSlots = this.slotRepository.getAll();
        return allSlots.filter((slot: SlotDto) => !slot.isReserved);
    }
}

export default SlotsService;
