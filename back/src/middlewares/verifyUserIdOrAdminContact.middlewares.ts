import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Contact } from "../entities/contact.entity";
import { User } from "../entities/user.entity";
import { IUser } from "../interfaces/users";

const verifyUserIdOrAdminContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isAdm = req.user.isAdm;
  const id = req.user.id;
  const idParam = req.params.id;
  const contactRepository = AppDataSource.getRepository(User);
  const user = await contactRepository.findOneBy({ id });

  const contactExist = user.contacts.some((contact) => contact.id === idParam);
  console.log(user.contacts);
  console.log(idParam);

  if (isAdm || contactExist) {
    next();
  } else {
    console.log("error");
    return res.status(403).json({ message: "unauthorized" });
  }
};
export default verifyUserIdOrAdminContact;
