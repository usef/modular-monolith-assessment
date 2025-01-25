import {IAppointmentFacade} from "./appointment-facade.interface";
import Appointment from "../internals/domain/models/appointment.model";
import {dependencyContainer} from "../../../shared/dependencies/dependencyContainer";
import {GetUpcomingAppointmentsUseCase} from "../internals/application/use-cases/get-upcoming-appointments.usecase";
import {CompleteAppointmentUseCase} from "../internals/application/use-cases/complete-appointment.usecase";
import {CancelAppointmentUseCase} from "../internals/application/use-cases/cancel-appointment.usecase";

export class AppointmentFacade implements IAppointmentFacade {
    private getUpcomingAppointmentsUseCase: GetUpcomingAppointmentsUseCase = dependencyContainer.getDependency("GetUpcomingAppointmentsUseCase");
    private cancelAppointmentUseCase: CancelAppointmentUseCase = dependencyContainer.getDependency("CancelAppointmentUseCase");
    private completeAppointmentUseCase: CompleteAppointmentUseCase = dependencyContainer.getDependency("CompleteAppointmentUseCase");

    getUpcomingAppointments(): Appointment[] {
        return this.getUpcomingAppointmentsUseCase.execute();
    }

    cancelAppointment(id: string): void {
        return this.cancelAppointmentUseCase.execute(id);
    }

    completeAppointment(id: string): void {
        return this.completeAppointmentUseCase.execute(id);
    }
}