import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequest, IUser, IUserUpdate } from "../interfaces/users";

const userSchema: SchemaOf<IUserRequest> = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  password: yup.string().required(),
  phone: yup.string().required(),
  isAdm: yup.boolean().required(),
});

const userUpdateSchema: SchemaOf<IUserUpdate> = yup.object().shape({
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  phone: yup.string().notRequired(),
  password: yup.string().notRequired(),
});

const userWithoutPasswordSchema: SchemaOf<IUser> = yup.object().shape({
  id: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  phone: yup.string().notRequired(),
  isAdm: yup.boolean().notRequired(),
  isActive: yup.boolean().notRequired(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
});

const userWithoutPasswordArraySchema: SchemaOf<IUser[]> = yup.array(
  userWithoutPasswordSchema
);

export {
  userSchema,
  userWithoutPasswordSchema,
  userUpdateSchema,
  userWithoutPasswordArraySchema,
};
