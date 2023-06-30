import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { IUser } from "../../interfaces/users";

const listOnlyUser = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  const modifiedResponse: IUser = {
    id: user.id,
    email: user.email,
    name: user.name,
    phone: user.phone,
    contacts: user.contacts,
    isActive: user.isActive,
    isAdm: user.isAdm,
    updatedAt: user.updatedAt,
    createdAt: user.createdAt,
  };

  return modifiedResponse;
};

export default listOnlyUser;
