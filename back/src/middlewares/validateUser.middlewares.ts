import { Request, Response, NextFunction } from "express";
import { userSchema } from "../schemas/users.schema";

const validateUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    userSchema.validateSync(req.body);

    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default validateUserMiddleware;
