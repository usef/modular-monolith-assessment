import {IAppointmentGateway} from "./appointment-gateway.interface";
import Appointment from "../../appointment-booking/internals/domain/models/appointment.model";
import {dependencyContainer} from "../../../shared/dependencies/dependencyContainer";
import {IAppointmentFacade} from "../../appointment-booking/facades/appointment-facade.interface";

export class AppointmentGateway implements IAppointmentGateway {
    private appointmentFacade: IAppointmentFacade = dependencyContainer.getDependency("AppointmentFacade");

    getUpcomingAppointments(): Appointment[] {
        return this.appointmentFacade.getUpcomingAppointments();
    }
}