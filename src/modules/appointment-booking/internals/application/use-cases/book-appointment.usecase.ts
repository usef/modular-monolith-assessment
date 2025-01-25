import {dependencyContainer} from "../../../../../shared/dependencies/dependencyContainer";
import SlotDto from "../../../../../shared/dtos/slot.dto";
import ISlotGateway from "../../../gateway/ISlot.gateway";
import CreateAppointmentDTO from "../dtos/create-appointment.dto";
import {IAppointmentRepository} from "../../domain/repositories/IAppointmentRepository.interface";
import EventEmitter from "node:events";

export class BookAppointmentUseCase {
    private slotGateway: ISlotGateway =
        dependencyContainer.getDependency("SlotGateway");
    private appointmentRepository: IAppointmentRepository =
        dependencyContainer.getDependency("AppointmentRepository");
    private eventEmitter: EventEmitter = dependencyContainer.getDependency("EventEmitter");

    execute(createAppointmentDto: CreateAppointmentDTO) {
        const availableSlots: SlotDto[] = this.slotGateway.getAvailableSlots();
        let foundSlot = availableSlots.find(slot => slot.id == createAppointmentDto.slotId);
        if (!foundSlot) {
            throw new Error("Unavailable slot");
        }

        foundSlot.isReserved = true;
        this.slotGateway.updateSlot(foundSlot);

        const appointment = this.appointmentRepository.add(createAppointmentDto);
        this.eventEmitter.emit("AppointmentConfirmed", appointment);
        return appointment;
    }
}
