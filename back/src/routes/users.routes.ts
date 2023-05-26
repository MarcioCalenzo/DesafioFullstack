import { Router } from "express";
import {
  deleteUserController,
  updateUserController,
  userCreateController,
  userListController,
} from "../controllers/users.controller";
import verifyActiveUser from "../middlewares/verifyActiveUser.middleware";
import verifyAuthAdm from "../middlewares/verifyAuthAdm.middleware";
import verifyAuthUser from "../middlewares/verifyAuthUser.middleware";
import verifyIdUpdateAuthAdm from "../middlewares/verifyIdUpdateUser.middleware";
import verifyUpdateAuthAdm from "../middlewares/verifyUpdateAuthAdm.middleware";
import verifyUpdateUser from "../middlewares/verifyUpdateUser.middlewares";
import { userUpdateSchema } from "../schemas/users.schema";

const userRoutes = Router();

userRoutes.post("", userCreateController);
userRoutes.get("", verifyAuthUser, verifyAuthAdm, userListController);
userRoutes.delete("/:id", verifyAuthUser, verifyAuthAdm, deleteUserController);
userRoutes.patch(
  "/:id",
  verifyUpdateUser(userUpdateSchema),
  verifyAuthUser,
  verifyUpdateAuthAdm,
  verifyActiveUser,
  verifyIdUpdateAuthAdm,
  updateUserController
);

export default userRoutes;
