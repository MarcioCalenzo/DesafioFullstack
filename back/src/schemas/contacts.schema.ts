import * as yup from "yup";
import { SchemaOf } from "yup";
import { IContactRequest, IContactUpdate } from "../interfaces/contacts";

const contactSchema: SchemaOf<IContactRequest> = yup.object().shape({
  id: yup.string().required(),
  email: yup.string().email().required(),
  name: yup.string().required(),
  phone_number: yup.string().required(),
});

const contactUpdateSchema: SchemaOf<IContactUpdate> = yup.object().shape({
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  phone_number: yup.string().notRequired(),
});

export { contactSchema, contactUpdateSchema };
