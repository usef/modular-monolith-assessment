import SlotDTO from "../../../shared/dtos/slotDTO";

export default interface ISlotFacade {
  getAvailableSlots(): SlotDTO[];
}
