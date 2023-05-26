import { Request, Response, NextFunction } from "express"

const verifyAuthAdm = async (req: Request, res: Response, next: NextFunction) => {

  const isAdm = req.user.isAdm

  if (!isAdm) {
    return res.status(403).json({ message: "unauthorized" })
  }
  next()
}
export default verifyAuthAdm