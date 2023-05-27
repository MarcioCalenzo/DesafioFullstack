import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { userWithoutPasswordArraySchema } from "../../schemas/users.schema";

const listUserService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const userWithoutPassord = await userWithoutPasswordArraySchema.validate(
    users.map((user) => user),
    {
      stripUnknown: true,
    }
  );

  return userWithoutPassord;
};

export default listUserService;
