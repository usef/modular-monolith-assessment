import SlotDTO from "../../../shared/dtos/slotDTO";

export default interface ISlotGateway {
  getAvailableSlots(): SlotDTO[];
}
