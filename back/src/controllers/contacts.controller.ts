import { Request, Response } from "express";
import { AppError } from "../errors/App.error";
import handleError from "../errors/handleError";
import { IContactRequest, IContactUpdate } from "../interfaces/contacts";
import createContactService from "../services/contacts/contactsCreate.service";
import listContactService from "../services/contacts/contactsList.service";
import deleteContactService from "../services/contacts/contactsDelete.service";
import updateContactService from "../services/contacts/updateContacts.service";

const contactCreateController = async (req: Request, res: Response) => {
  try {
    const contactData: IContactRequest = req.body;

    const userId: string = req.user.id;

    const newUser = await createContactService(contactData, userId);

    return res.status(201).json(newUser);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, req, res);
    }
  }
};

const contactListController = async (req: Request, res: Response) => {
  try {
    const userId: string = req.user.id;

    const contacts = await listContactService(userId);

    return res.status(200).json(contacts);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, req, res);
    }
  }
};

const deleteContactController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await deleteContactService(id);

    return res.status(204).json();
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, req, res);
    }
  }
};

const updateContactController = async (req: Request, res: Response) => {
  try {
    const contact: IContactUpdate = req.body;

    const id: string = req.params.id;

    const updatedContact = await updateContactService(contact, id);

    return res.status(200).json(updatedContact);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, req, res);
    }
  }
};

export {
  contactCreateController,
  contactListController,
  deleteContactController,
  updateContactController,
};
