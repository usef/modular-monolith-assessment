import SlotDto from "../../../shared/dtos/slot.dto";

export default interface ISlotGateway {
  getAvailableSlots(): SlotDto[];
}
