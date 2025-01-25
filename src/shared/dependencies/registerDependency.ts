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
import {NotificationSender} from "../notification-sender";
import {INotificationSender} from "../interfaces/notification-sender.interface";
import EventEmitter from "node:events";
import {EventBus} from "../event-bus";
import {AppointmentBookedHandler} from "../../modules/appointment-confirmation/appointment-booked.handler";
import {IEventHandler} from "../interfaces/event-handler.interface";

export default function instantiateDependency() {
    dependencyContainer.registerDependency<INotificationSender>(
        "NotificationSender",
        new NotificationSender()
    );

    dependencyContainer.registerDependency<EventEmitter>("EventEmitter", new EventEmitter());


    dependencyContainer.registerDependency<IEventHandler>("AppointmentBookedHandler", new AppointmentBookedHandler());

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

    dependencyContainer.registerDependency<EventBus>("EventBus", new EventBus());
}
