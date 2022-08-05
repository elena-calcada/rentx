import { ICreateUserDTO } from "../dtos/ICreatedUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  create({
    name,
    password,
    email,
    driver_license,
  }: ICreateUserDTO): Promise<void>;

  findByEmail(name: string): Promise<User>;

  findById(id: string): Promise<User>;
}

export { IUsersRepository };
