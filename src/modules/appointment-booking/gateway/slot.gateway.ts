import {dependencyContainer} from "../../../shared/dependencies/dependencyContainer";
import SlotDto from "../../../shared/dtos/slot.dto";
import ISlotGateway from "./ISlot.gateway";
import ISlotFacade from "../../doctor-availability/facade/ISlot.facade";

export default class SlotGateway implements ISlotGateway {
    private slotFacade: ISlotFacade =
        dependencyContainer.getDependency("SlotFacade");

    getAvailableSlots(): SlotDto[] {
        return this.slotFacade.getAvailableSlots();
    }

    updateSlot(slot: SlotDto): void {
        return this.slotFacade.updateSlot(slot);
    }
}
