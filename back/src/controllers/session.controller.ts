import { Request, Response } from "express";
import { AppError } from "../errors/App.error";
import handleError from "../errors/handleError";
import loginUserService from "../services/session/sessionLogin.service";

const loginUserController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const token = await loginUserService({ email, password });

    return res.status(200).send({ token });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, req, res);
    }
  }
};
export default loginUserController;
