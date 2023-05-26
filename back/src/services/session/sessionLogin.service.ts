import { IUserLogin } from "./../../interfaces/users";
import AppDataSource from "../../data-source";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/App.error";
import { User } from "../../entities/user.entity";

const loginUserService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const dataUser = await userRepository.findOneBy({ email });

  if (!dataUser) {
    throw new AppError("Wrong email/password", 403);
  }
  if (!bcrypt.compareSync(password, dataUser.password)) {
    throw new AppError("Wrong email/password", 403);
  }
  if (!dataUser.isActive) {
    throw new AppError("User don't exist", 400);
  }

  const token = jwt.sign({ isAdm: dataUser.isAdm }, process.env.SECRET_KEY, {
    expiresIn: "24h",
    subject: String(dataUser.id),
  });

  return token;
};
export default loginUserService;
