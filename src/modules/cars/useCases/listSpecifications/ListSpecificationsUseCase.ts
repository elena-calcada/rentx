import { Specification } from "../../entities/Specification";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

class ListSpecificationsUseCase {
  private specificationsRepository: SpecificationsRepository;

  constructor(specificationsRepository: SpecificationsRepository) {
    this.specificationsRepository = specificationsRepository;
  }

  execute(): Specification[] {
    const specifications = this.specificationsRepository.list();

    return specifications;
  }
}

export { ListSpecificationsUseCase };
