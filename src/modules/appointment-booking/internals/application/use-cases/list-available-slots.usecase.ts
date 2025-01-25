import ISlotGateway from "../../../gateway/ISlot.gateway";
import {dependencyContainer} from "../../../../../shared/dependencies/dependencyContainer";
import SlotDto from "../../../../../shared/dtos/slot.dto";

export class ListAvailableSlotsUseCase {
    private slotGateway: ISlotGateway =
        dependencyContainer.getDependency("SlotGateway");

    execute(): SlotDto[] {
        return this.slotGateway.getAvailableSlots();
    }
}