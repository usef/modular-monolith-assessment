import SlotDTO from "../../../doctor-availability/dtos/slotDTO";

export default interface SlotsServiceInterface {
  listAllSlots(): SlotDTO[];
}
