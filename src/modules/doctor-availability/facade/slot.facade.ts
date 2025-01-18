import { dependencyContainer } from "../../../shared/dependencies/dependencyContainer";
import SlotDTO from "../../../shared/dtos/slotDTO";
import SlotsService from "../internals/services/slotsService";
import ISlotFacade from "./ISlot.facade";

const slotsService: SlotsService =
  dependencyContainer.getDependency("SlotsService");

export default class SlotFacade implements ISlotFacade {
  getAvailableSlots(): SlotDTO[] {
    return slotsService.getAvailableSlots();
  }
}
