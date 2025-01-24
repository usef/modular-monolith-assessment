import { dependencyContainer } from "../../../shared/dependencies/dependencyContainer";
import SlotDTO from "../../../shared/dtos/slotDTO";
import SlotFacade from "../../doctor-availability/facade/slot.facade";
import ISlotGateway from "./ISlot.gateway";

export default class SlotGateway implements ISlotGateway {
  private slotFacade: SlotFacade =
    dependencyContainer.getDependency("SlotFacade");
  getAvailableSlots(): SlotDTO[] {
    return this.slotFacade.getAvailableSlots();
  }
}
