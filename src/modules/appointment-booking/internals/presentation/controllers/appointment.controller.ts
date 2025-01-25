import {Request, Response} from "express";
import {dependencyContainer} from "../../../../../shared/dependencies/dependencyContainer";
import {BookAppointmentUseCase} from "../../application/use-cases/book-appointment.usecase";
import CreateAppointmentDTO from "../../application/dtos/create-appointment.dto";

const bookAppointmentUseCase: BookAppointmentUseCase = dependencyContainer.getDependency("BookAppointmentUseCase");
export default class AppointmentController {
    public static bookAppointment(req: Request, res: Response) {
        try {
            const appointmentDTO: CreateAppointmentDTO = req.body;
            const appointment = bookAppointmentUseCase.execute(appointmentDTO);
            // TODO: unify response message structure
            res.json({message: "success", data: {appointment}});
        } catch (error: any) {
            res.status(400).json({message: "error", error: error.message});
        }
    }
}