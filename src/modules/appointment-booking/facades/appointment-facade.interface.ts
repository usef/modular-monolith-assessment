import Appointment from "../internals/domain/models/appointment.model";

export interface IAppointmentFacade {
    getUpcomingAppointments(): Appointment[]
}