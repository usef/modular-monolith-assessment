import {dependencyContainer} from "../../../../../shared/dependencies/dependencyContainer";
import SlotDto from "../../../../../shared/dtos/slot.dto";
import ISlotGateway from "../../../gateway/ISlot.gateway";
import CreateAppointmentDTO from "../dtos/create-appointment.dto";
import {IAppointmentRepository} from "../../domain/repositories/IAppointmentRepository.interface";

export class BookAppointmentUseCase {
    private slotGateway: ISlotGateway =
        dependencyContainer.getDependency("SlotGateway");
    private appointmentRepository: IAppointmentRepository =
        dependencyContainer.getDependency("AppointmentRepository");

    execute(createAppointmentDto: CreateAppointmentDTO) {
        const availableSlots: SlotDto[] = this.slotGateway.getAvailableSlots();
        if (!availableSlots.find(slot => slot.id == createAppointmentDto.slotId)) {
            throw new Error("Unavailable slot");
        }
        return this.appointmentRepository.add(createAppointmentDto);
    }
}
