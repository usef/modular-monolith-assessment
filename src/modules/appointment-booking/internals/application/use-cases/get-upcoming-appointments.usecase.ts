import {IAppointmentRepository} from "../../domain/repositories/appointment-repository.interface";
import {dependencyContainer} from "../../../../../shared/dependencies/dependencyContainer";
import Appointment from "../../domain/models/appointment.model";
import ISlotGateway from "../../../gateway/ISlot.gateway";

export class GetUpcomingAppointmentsUseCase {
    private slotGateway: ISlotGateway =
        dependencyContainer.getDependency("SlotGateway");
    private appointmentRepository: IAppointmentRepository =
        dependencyContainer.getDependency("AppointmentRepository");

    execute(): Appointment[] {
        const appointments = this.appointmentRepository.getAll();
        const upcomingSlots = this.slotGateway.getUpcomingSlots().map(s => s.id);

        return appointments.filter(a => upcomingSlots.includes(a.slotId));
    }
}