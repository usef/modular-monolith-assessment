import Appointment from "../models/appointment.model";
import CreateAppointmentDTO from "../../application/dtos/create-appointment.dto";

export interface IAppointmentRepository {
    getAll(): Appointment[];

    add(appointment: CreateAppointmentDTO): Appointment;

    update(id: string, updatedData: Partial<Appointment>): void;
}