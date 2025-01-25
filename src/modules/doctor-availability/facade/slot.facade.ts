import {dependencyContainer} from "../../../shared/dependencies/dependencyContainer";
import SlotDto from "../../../shared/dtos/slot.dto";
import SlotsService from "../internals/services/slots.service";
import ISlotFacade from "./ISlot.facade";

export default class SlotFacade implements ISlotFacade {
    private slotsService: SlotsService = dependencyContainer.getDependency("SlotsService");

    getAvailableSlots(): SlotDto[] {
        return this.slotsService.getAvailableSlots();
    }

    updateSlot(slot: SlotDto): void {
        return this.slotsService.updateSlot(slot);
    }

    getUpcomingSlots(): SlotDto[] {
        return this.slotsService.getUpcomingSlots();
    }
}
