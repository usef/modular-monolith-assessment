import Appointment from "../internals/domain/models/appointment.model";

export interface IAppointmentFacade {
    getUpcomingAppointments(): Appointment[]

    completeAppointment(id: string): void;

    cancelAppointment(id: string): void;
}