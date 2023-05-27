import { Request, Response, NextFunction } from "express";

const verifyUserIdOrAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isAdm = req.user.isAdm;
  const idParam = req.params.id;
  const idUser = req.user.id;

  if (isAdm || idParam == idUser) {
    next();
  } else {
    return res.status(403).json({ message: "unauthorized" });
  }
};
export default verifyUserIdOrAdmin;
