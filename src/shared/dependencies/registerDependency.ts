import { dependencyContainer } from "./dependencyContainer";
import SlotRepository from "../../modules/doctor-availability/internals/repositories/slotRepository";
import SlotsService from "../../modules/doctor-availability/internals/services/slotsService";
import SlotFacade from "../../modules/doctor-availability/facade/slot.facade";
import SlotGateway from "../../modules/appointment-booking/gateway/slot.gateway";

export default function instantiateDependency() {
  dependencyContainer.registerDependency<SlotRepository>(
    "SlotRepository",
    new SlotRepository()
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
}
