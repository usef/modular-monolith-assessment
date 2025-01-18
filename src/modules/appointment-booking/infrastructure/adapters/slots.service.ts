import SlotsServiceInterface from "../../application/interfaces/slots.service.interface";
import SlotsService from "../../../doctor-availability/services/slotsService";
import SlotDTO from "../../../doctor-availability/dtos/slotDTO";

export default class SlotsServiceAdapter implements SlotsServiceInterface {
  listAllSlots(): SlotDTO[] {
    return SlotsService.getAvailableSlots();
  }
}
