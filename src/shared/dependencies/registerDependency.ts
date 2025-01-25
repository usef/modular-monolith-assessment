import {dependencyContainer} from "./dependencyContainer";
import SlotRepository from "../../modules/doctor-availability/internals/repositories/slot.repository";
import SlotsService from "../../modules/doctor-availability/internals/services/slots.service";
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
} from "../../modules/appointment-booking/internals/domain/repositories/appointment-repository.interface";
import {
    AppointmentRepository
} from "../../modules/appointment-booking/internals/domain/repositories/appointment.repository";
import {NotificationSender} from "../notification-sender";
import {INotificationSender} from "../interfaces/notification-sender.interface";
import EventEmitter from "node:events";
import {EventBus} from "../event-bus";
import {AppointmentBookedHandler} from "../../modules/appointment-confirmation/appointment-booked.handler";
import {IEventHandler} from "../interfaces/event-handler.interface";
import {
    GetUpcomingAppointmentsUseCase
} from "../../modules/appointment-booking/internals/application/use-cases/get-upcoming-appointments.usecase";
import {IAppointmentFacade} from "../../modules/appointment-booking/facades/appointment-facade.interface";
import {AppointmentFacade} from "../../modules/appointment-booking/facades/appointment.facade";
import {IAppointmentGateway} from "../../modules/appointment-management/gateways/appointment-gateway.interface";
import {AppointmentGateway} from "../../modules/appointment-management/gateways/appointment.gateway";

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

    dependencyContainer.registerDependency<GetUpcomingAppointmentsUseCase>(
        "GetUpcomingAppointmentsUseCase",
        new GetUpcomingAppointmentsUseCase()
    );

    dependencyContainer.registerDependency<IAppointmentFacade>("AppointmentFacade", new AppointmentFacade());
    dependencyContainer.registerDependency<IAppointmentGateway>("AppointmentGateway", new AppointmentGateway())
    dependencyContainer.registerDependency<EventBus>("EventBus", new EventBus());
}
