import { Request, Response, NextFunction } from "express";

const verifyActiveUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const active = req.body.isActive;

  if (active || active === false) {
    return res.status(401).json({ message: "Bad request" });
  }

  next();
};

export default verifyActiveUser;
