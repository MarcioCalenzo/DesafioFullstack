import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/App.error";
import { IContactUpdate } from "../../interfaces/contacts";

const updateContactService = async (
  { name, email, phone_number }: IContactUpdate,
  id: string
): Promise<Contact> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOneBy({ id });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  await contactRepository.update(id, {
    name: name ? name : contact.name,
    email: email ? email : contact.email,
    phone_number: phone_number ? phone_number : contact.phone_number,
  });

  const updatedContact = await contactRepository.findOneBy({ id });

  return updatedContact;
};

export default updateContactService;
