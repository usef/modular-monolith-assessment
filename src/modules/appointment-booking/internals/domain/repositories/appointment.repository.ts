import {IAppointmentRepository} from "./appointment-repository.interface";
import Appointment from "../models/appointment.model";
import {v4 as uuid4} from "uuid";
import CreateAppointmentDTO from "../../application/dtos/create-appointment.dto";

export class AppointmentRepository implements IAppointmentRepository {
    private appointments: Appointment[] = [];

    getAll(): Appointment[] {
        return this.appointments;
    }

    add(appointmentDto: CreateAppointmentDTO): Appointment {
        const appointment = new Appointment(
            uuid4(),
            appointmentDto.slotId,
            appointmentDto.patientId,
            appointmentDto.patientName,
            new Date(Date.now()),
            'pending'
        );

        this.appointments.push(appointment);
        return appointment;
    }

    update(id: string, updatedData: Partial<Appointment>): void {
        let appointmentFound = this.appointments.filter(a => a.id == id);
        if (!appointmentFound) {
            throw new Error("Appointment not found");
        }
        this.appointments = this.appointments.map(a => a.id == id ? {...a, ...updatedData} as Appointment : a);
    }
}