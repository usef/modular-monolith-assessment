import {IAppointmentRepository} from "./IAppointmentRepository.interface";
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
}