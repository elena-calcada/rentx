import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();

const listSpecificatiosUseCase = new ListSpecificationsUseCase(
  specificationsRepository
);

const listSpecificationsController = new ListSpecificationsController(
  listSpecificatiosUseCase
);

export { listSpecificationsController };
