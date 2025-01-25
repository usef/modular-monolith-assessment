import {dependencyContainer} from "./dependencyContainer";
import SlotRepository from "../../modules/doctor-availability/internals/repositories/slotRepository";
import SlotsService from "../../modules/doctor-availability/internals/services/slotsService";
import SlotFacade from "../../modules/doctor-availability/facade/slot.facade";
import SlotGateway from "../../modules/appointment-booking/gateway/slot.gateway";
import {
    BookAppointmentUseCase
} from "../../modules/appointment-booking/internals/application/use-cases/book-appointment.usecase";
import {
    ListAvailableSlotsUseCase
} from "../../modules/appointment-booking/internals/application/use-cases/list-available-slots.usecase";
import {
    IAppointmentRepository
} from "../../modules/appointment-booking/internals/domain/repositories/IAppointmentRepository.interface";
import {
    AppointmentRepository
} from "../../modules/appointment-booking/internals/domain/repositories/appointment.repository";

export default function instantiateDependency() {
    dependencyContainer.registerDependency<SlotRepository>(
        "SlotRepository",
        new SlotRepository()
    );

    dependencyContainer.registerDependency<IAppointmentRepository>(
        "AppointmentRepository",
        new AppointmentRepository()
    );
    
    dependencyContainer.registerDependency<SlotsService>(
        "SlotsService",
        new SlotsService()
    );
    dependencyContainer.registerDependency<SlotFacade>(
        "SlotFacade",
        new SlotFacade()
    );
    dependencyContainer.registerDependency<SlotGateway>(
        "SlotGateway",
        new SlotGateway()
    );

    dependencyContainer.registerDependency<ListAvailableSlotsUseCase>("ListAvailableSlotsUseCase", new ListAvailableSlotsUseCase());

    dependencyContainer.registerDependency<BookAppointmentUseCase>(
        "BookAppointmentUseCase",
        new BookAppointmentUseCase()
    );
}
