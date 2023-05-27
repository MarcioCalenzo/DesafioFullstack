import { Router } from "express";
import {
  contactCreateController,
  contactListController,
  deleteContactController,
  updateContactController,
} from "../controllers/contacts.controller";
import verifyActiveUser from "../middlewares/verifyActiveUser.middleware";
import verifyAuthAdm from "../middlewares/verifyAuthAdm.middleware";
import verifyAuthUser from "../middlewares/verifyAuthUser.middleware";
import verifyIdUpdateAuthAdm from "../middlewares/verifyIdUpdateUser.middleware";
import verifyUpdateAuthAdm from "../middlewares/verifyUpdateAuthAdm.middleware";
import verifyUpdateContact from "../middlewares/verifyUpdateContact.middlewares";
import { contactUpdateSchema } from "../schemas/contacts.schema";

const contactRoutes = Router();

contactRoutes.post("", verifyAuthUser, contactCreateController);
contactRoutes.get("", verifyAuthUser, contactListController);
contactRoutes.delete(
  "/:id",
  verifyAuthUser,
  verifyAuthAdm,
  deleteContactController
);
contactRoutes.patch(
  "/:id",
  verifyUpdateContact(contactUpdateSchema),
  verifyAuthUser,
  verifyUpdateAuthAdm,
  verifyActiveUser,
  verifyIdUpdateAuthAdm,
  updateContactController
);

export default contactRoutes;
