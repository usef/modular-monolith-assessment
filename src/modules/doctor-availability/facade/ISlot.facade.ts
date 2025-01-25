import SlotDto from "../../../shared/dtos/slot.dto";

export default interface ISlotFacade {
  getAvailableSlots(): SlotDto[];
}
