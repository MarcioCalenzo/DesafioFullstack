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
import verifyUpdateUser from "../middlewares/verifyUpdateUser.middlewares";
import { userUpdateSchema } from "../schemas/users.schema";

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
  verifyUpdateUser(userUpdateSchema),
  verifyAuthUser,
  verifyUpdateAuthAdm,
  verifyActiveUser,
  verifyIdUpdateAuthAdm,
  updateContactController
);

export default contactRoutes;
