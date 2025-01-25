import { dependencyContainer } from "../../../shared/dependencies/dependencyContainer";
import SlotDto from "../../../shared/dtos/slot.dto";
import SlotsService from "../internals/services/slotsService";
import ISlotFacade from "./ISlot.facade";

export default class SlotFacade implements ISlotFacade {
  private slotsService: SlotsService = dependencyContainer.getDependency("SlotsService");
  getAvailableSlots(): SlotDto[] {
    return this.slotsService.getAvailableSlots();
  }
}
