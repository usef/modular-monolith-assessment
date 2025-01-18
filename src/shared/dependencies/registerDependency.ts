import { dependencyContainer } from "./dependencyContainer";
import SlotRepository from "../../modules/doctor-availability/internals/repositories/slotRepository";
import SlotsService from "../../modules/doctor-availability/internals/services/slotsService";

export default function instantiateDependency() {
  dependencyContainer.registerDependency<SlotRepository>(
    "SlotRepository",
    new SlotRepository()
  );
  dependencyContainer.registerDependency<SlotsService>(
    "SlotsService",
    new SlotsService()
  );
}
