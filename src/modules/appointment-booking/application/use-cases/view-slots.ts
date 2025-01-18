import SlotsServiceInterface from "../interfaces/slots.service.interface";

export default class ViewSlotsUseCase {
  constructor(private slotsService: SlotsServiceInterface) {}

  execute() {
    return this.slotsService.listAllSlots();
  }
}
