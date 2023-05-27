import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const verifyAuthUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }

    token = token.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded: any) => {
      req.user = {
        id: decoded.sub,
        isAdm: decoded.isAdm,
      };

      next();
    });
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
export default verifyAuthUser;
