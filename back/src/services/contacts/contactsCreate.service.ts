import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/App.error";
import { IContactRequest, IContact } from "../../interfaces/contacts";
import { IUser } from "../../interfaces/users";
import { userWithoutPasswordSchema } from "../../schemas/users.schema";

const createContactService = async (
  data: IContactRequest,
  id: string
): Promise<IUser> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  const email = data.email;
  const emailExists = await contactRepository.findOneBy({ email });

  const phone_number = data.phone_number;
  const phoneExists = await contactRepository.findOneBy({ phone_number });

  if (emailExists) {
    throw new AppError("email already exists", 409);
  }
  if (phoneExists) {
    throw new AppError("phone already exists", 409);
  }

  const contact = new Contact();
  contact.name = data.name;
  contact.email = data.email;
  contact.phone_number = data.phone_number;
  contact.user = user;

  await contactRepository.save(contact);

  const newUser = await userRepository.findOneBy({ id });

  const userWithoutPassord = await userWithoutPasswordSchema.validate(newUser, {
    stripUnknown: true,
  });

  return userWithoutPassord;
};

export default createContactService;
