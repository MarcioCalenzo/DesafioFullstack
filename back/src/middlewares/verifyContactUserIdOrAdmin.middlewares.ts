import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

const verifyContactUserIdOrAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isAdm = req.user.isAdm;
  const idParam = req.params.id;
  const userId = req.user.id;

  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const hasContact = user.contacts.some((contact) => contact.id === idParam);

  if (isAdm || hasContact) {
    next();
  } else {
    return res.status(403).json({ message: "Unauthorized" });
  }
};

export default verifyContactUserIdOrAdmin;
