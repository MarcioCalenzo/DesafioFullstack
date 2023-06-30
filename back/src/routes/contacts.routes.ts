import { Router } from "express";
import {
  contactCreateController,
  contactListController,
  deleteContactController,
  updateContactController,
} from "../controllers/contacts.controller";
import verifyActiveUser from "../middlewares/verifyActiveUser.middleware";
import verifyAuthUser from "../middlewares/verifyAuthUser.middleware";
import verifyIdUpdateAuthAdm from "../middlewares/verifyIdUpdateUser.middleware";
import verifyUpdateAuthAdm from "../middlewares/verifyUpdateAuthAdm.middleware";
import verifyUpdateContact from "../middlewares/verifyUpdateContact.middlewares";
import { contactUpdateSchema } from "../schemas/contacts.schema";
import verifyUserIdOrAdminContact from "../middlewares/verifyUserIdOrAdminContact.middlewares";
import verifyContactUserIdOrAdmin from "../middlewares/verifyContactUserIdOrAdmin.middlewares";

const contactRoutes = Router();

contactRoutes.post("", verifyAuthUser, contactCreateController);
contactRoutes.get("", verifyAuthUser, contactListController);
contactRoutes.delete(
  "/:id",
  verifyAuthUser,
  verifyContactUserIdOrAdmin,
  deleteContactController
);
contactRoutes.patch(
  "/:id",
  verifyUpdateContact(contactUpdateSchema),
  verifyAuthUser,
  verifyActiveUser,
  verifyIdUpdateAuthAdm,
  verifyUserIdOrAdminContact,
  updateContactController
);

export default contactRoutes;
