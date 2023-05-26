import { Request, Response, NextFunction } from "express"

const verifyUpdateAuthAdm = async (req: Request, res: Response, next: NextFunction) => {

    const isAdm = req.user.isAdm
    const body = req.body.isAdm

  if(body || body === false ) {
      
      return res.status(401).json({
          message: "User is not admin!"
      })
  }
  if (!isAdm) {
    
    return res.status(401).json({
        message: "User is not admin!"
    })
}
return next()
}
export default verifyUpdateAuthAdm