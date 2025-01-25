import {Request, Response} from "express";
import {dependencyContainer} from "../../../../../shared/dependencies/dependencyContainer";
import {BookAppointmentUseCase} from "../../application/use-cases/book-appointment.usecase";
import CreateAppointmentDTO from "../../application/dtos/create-appointment.dto";
import {VoisResponse} from "../../../../../shared/middlewares/response";

const bookAppointmentUseCase: BookAppointmentUseCase = dependencyContainer.getDependency("BookAppointmentUseCase");
export default class AppointmentController {
    public static bookAppointment(req: Request, res: Response) {
        try {
            const appointmentDTO: CreateAppointmentDTO = req.body;
            const appointment = bookAppointmentUseCase.execute(appointmentDTO);
            res.json(new VoisResponse("success", appointment));
        } catch (error: any) {
            res.status(400).json(new VoisResponse("error", error.message));
        }
    }
}