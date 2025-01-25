import {dependencyContainer} from "../../../../../shared/dependencies/dependencyContainer";
import SlotDto from "../../../../../shared/dtos/slot.dto";
import ISlotGateway from "../../../gateway/ISlot.gateway";
import CreateAppointmentDTO from "../dtos/create-appointment.dto";
import {IAppointmentRepository} from "../../domain/repositories/IAppointmentRepository.interface";
import EventEmitter from "node:events";
import {AppointmentConfirmedEvent} from "../events/appointment-confirmed.event";
import Appointment from "../../domain/models/appointment.model";

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

        const appointment: Appointment = this.appointmentRepository.add(createAppointmentDto);
        const appointmentConfirmedEvent = new AppointmentConfirmedEvent(
            appointment.id,
            createAppointmentDto.slotId,
            createAppointmentDto.patientId,
            createAppointmentDto.patientName,
            foundSlot.doctorId,
            foundSlot.doctorName,
            createAppointmentDto.reservedAt
        );
        
        this.eventEmitter.emit("AppointmentConfirmed", appointmentConfirmedEvent);
        return appointment;
    }
}
