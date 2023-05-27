import { Request, Response, NextFunction } from "express";

const verifyIdUpdateAuthAdm = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.body.id;

  if (id || id === false) {
    return res.status(401).json({
      message: "User is not admin!",
    });
  }

  return next();
};
export default verifyIdUpdateAuthAdm;
