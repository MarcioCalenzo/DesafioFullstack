import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/App.error";

const deleteContactService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOneBy({ id });

  if (contact) {
    if (contact.isActive === false) {
      throw new AppError("Bad request", 400);
    }

    await contactRepository.update({ id }, { isActive: false });

    return null;
  } else {
    throw new AppError("Contact not found", 404);
  }
};
export default deleteContactService;
