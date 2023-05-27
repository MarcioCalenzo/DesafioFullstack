import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { userWithoutPasswordArraySchema } from "../../schemas/users.schema";
import { IUser } from "../../interfaces/users";

const listUserService = async (isAdmin: boolean, id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  if (isAdmin) {
    const users = await userRepository.find();

    const userWithoutPassord = await userWithoutPasswordArraySchema.validate(
      users.map((user) => user),
      {
        stripUnknown: true,
      }
    );

    return userWithoutPassord;
  } else {
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
  }
};

export default listUserService;
