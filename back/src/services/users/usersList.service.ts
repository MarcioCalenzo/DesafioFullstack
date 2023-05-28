import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { userWithoutPasswordSchema } from "../../schemas/users.schema";
import { IUser } from "../../interfaces/users";

const listUserService = async (isAdmin: boolean, id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  if (isAdmin) {
    try {
      const users = await userRepository.find();

      const modifiedResponseArray: IUser[] = users.map((user) => {
        try {
          const validatedUser = userWithoutPasswordSchema.validateSync(user, {
            stripUnknown: true,
          });

          return {
            id: validatedUser.id,
            email: validatedUser.email,
            name: validatedUser.name,
            phone: validatedUser.phone,
            contacts: validatedUser.contacts,
            isActive: validatedUser.isActive,
            isAdm: validatedUser.isAdm,
            updatedAt: validatedUser.updatedAt,
            createdAt: validatedUser.createdAt,
          };
        } catch (error) {
          throw error;
        }
      });

      return modifiedResponseArray;
    } catch (error) {
      throw error;
    }
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
