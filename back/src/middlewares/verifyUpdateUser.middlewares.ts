import { IUserUpdate } from "./../interfaces/users/index"
import { Request, Response, NextFunction } from "express"
import { SchemaOf } from "yup"

const verifyUpdateUser = (schema: SchemaOf<IUserUpdate>) => async (req: Request, res: Response, next: NextFunction) => {

  const data = req.body

        const validatedData = await schema.validate(data, {
          stripUnknown: true
        })

        req.userUpdate = validatedData

        next()
  }

  export default verifyUpdateUser