import { dependencyContainer } from "../../../shared/dependencies/dependencyContainer";
import SlotDTO from "../../../shared/dtos/slotDTO";
import SlotsService from "../internals/services/slotsService";
import ISlotFacade from "./ISlot.facade";

export default class SlotFacade implements ISlotFacade {
  private slotsService: SlotsService = dependencyContainer.getDependency("SlotsService");
  getAvailableSlots(): SlotDTO[] {
    return this.slotsService.getAvailableSlots();
  }
}
