import { Request, Response } from "express";
import { AppError } from "../errors/App.error";
import handleError from "../errors/handleError";
import { IUserRequest, IUserUpdate } from "../interfaces/users";
import createUserService from "../services/users/usersCreate.service";
import listUserService from "../services/users/usersList.service";
import deleteUserService from "../services/users/usersDelete.service";
import updateUSerService from "../services/users/updateUser.service";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const userData: IUserRequest = req.body;

    const newUser = await createUserService(userData);

    return res.status(201).json(newUser);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, req, res);
    }
  }
};

const userListController = async (req: Request, res: Response) => {
  try {
    const { isAdm, id } = req.user;
    const users = await listUserService(isAdm, id);

    return res.json(users);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, req, res);
    }
  }
};

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await deleteUserService(id, res);

    return res.status(204).json();
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, req, res);
    }
  }
};

const updateUserController = async (req: Request, res: Response) => {
  try {
    const user: IUserUpdate = req.body;

    const id: string = req.params.id;

    const updatedUser = await updateUSerService(user, id);

    return res.status(200).json(updatedUser);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, req, res);
    }
  }
};

export {
  userCreateController,
  userListController,
  deleteUserController,
  updateUserController,
};
