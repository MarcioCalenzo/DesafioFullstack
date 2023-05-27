import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";

const listContactService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  const contactsUser = user.contacts;

  return contactsUser;
};

export default listContactService;
