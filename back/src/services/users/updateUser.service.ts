import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/App.error";
import { IUser, IUserUpdate } from "../../interfaces/users";
import { hash } from "bcryptjs";
import { userWithoutPasswordSchema } from "../../schemas/users.schema";

const updateUSerService = async (
  { name, email, password, phone }: IUserUpdate,
  id: string
): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.findOneBy({ id });

  if (!users) {
    throw new AppError("User not found", 404);
  }

  await userRepository.update(id, {
    name: name ? name : users.name,
    email: email ? email : users.email,
    phone: phone ? phone : users.phone,
    password: password ? await hash(password, 10) : users.password,
  });

  const updatedUser = await userRepository.findOneBy({ id });

  const userWithoutPassord = await userWithoutPasswordSchema.validate(
    updatedUser,
    {
      stripUnknown: true,
    }
  );

  const modifiedResponse: IUser = {
    id: userWithoutPassord.id,
    email: userWithoutPassord.email,
    name: userWithoutPassord.name,
    phone: userWithoutPassord.phone,
    contacts: userWithoutPassord.contacts,
    isActive: userWithoutPassord.isActive,
    isAdm: userWithoutPassord.isAdm,
    updatedAt: userWithoutPassord.updatedAt,
    createdAt: userWithoutPassord.createdAt,
  };

  return modifiedResponse;
};

export default updateUSerService;
