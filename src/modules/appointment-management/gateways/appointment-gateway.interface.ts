import Appointment from "../../appointment-booking/internals/domain/models/appointment.model";

export interface IAppointmentGateway {
    getUpcomingAppointments(): Appointment[]

    cancelAppointment(id: string): void;

    completeAppointment(id: string): void;
}