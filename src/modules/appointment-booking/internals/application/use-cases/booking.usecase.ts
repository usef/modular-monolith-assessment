import { dependencyContainer } from "../../../../../shared/dependencies/dependencyContainer";
import SlotDTO from "../../../../../shared/dtos/slotDTO";
import ISlotGateway from "../../../gateway/ISlot.gateway";
import CreateAppointmentDTO from "../dtos/create-appointment.dto";

class BookingUseCase {
  private slotGateway: ISlotGateway =
    dependencyContainer.getDependency("SlotGateway");

  bookAppointment(appointment: CreateAppointmentDTO) {
    const availableSlots: SlotDTO[] = this.slotGateway.getAvailableSlots();
  }
}
