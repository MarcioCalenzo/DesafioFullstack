import { IContactUpdate } from "../interfaces/contacts";
import { Request, Response, NextFunction } from "express";
import { SchemaOf } from "yup";

const verifyUpdateContact =
  (schema: SchemaOf<IContactUpdate>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;

    const validatedData = await schema.validate(data, {
      stripUnknown: true,
    });

    req.contactUpdate = validatedData;

    next();
  };

export default verifyUpdateContact;
