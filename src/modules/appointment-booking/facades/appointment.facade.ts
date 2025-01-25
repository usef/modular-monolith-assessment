import {IAppointmentFacade} from "./appointment-facade.interface";
import Appointment from "../internals/domain/models/appointment.model";
import {dependencyContainer} from "../../../shared/dependencies/dependencyContainer";
import {GetUpcomingAppointmentsUseCase} from "../internals/application/use-cases/get-upcoming-appointments.usecase";

export class AppointmentFacade implements IAppointmentFacade {
    private getUpcomingAppointmentsUseCase: GetUpcomingAppointmentsUseCase = dependencyContainer.getDependency("GetUpcomingAppointmentsUseCase");

    getUpcomingAppointments(): Appointment[] {
        return this.getUpcomingAppointmentsUseCase.execute();
    }
}