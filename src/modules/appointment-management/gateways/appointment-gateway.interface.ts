import Appointment from "../../appointment-booking/internals/domain/models/appointment.model";

export interface IAppointmentGateway {
    getUpcomingAppointments(): Appointment[]
}