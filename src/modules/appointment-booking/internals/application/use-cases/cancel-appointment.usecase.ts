import {IAppointmentRepository} from "../../domain/repositories/appointment-repository.interface";
import {dependencyContainer} from "../../../../../shared/dependencies/dependencyContainer";

export class CancelAppointmentUseCase {
    private appointmentRepository: IAppointmentRepository =
        dependencyContainer.getDependency("AppointmentRepository");

    execute(id: string): void {
        return this.appointmentRepository.update(id, {status: "canceled"});
    }
}