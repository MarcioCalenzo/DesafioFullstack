import { iAddContact, iContact } from "./contacts";
import { iLoginForm, iRegisterForm, iUser } from "./user";

export interface iModal {
  setModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children: React.ReactNode;
}
export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iUserContext {
  user: iUser | null;
  loading: boolean;
  userContacts: iContact[];
  newContactModalToggle: boolean;
  setnewContactModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
  openModalEditContact: boolean;
  setOpenModalEditContact: React.Dispatch<React.SetStateAction<boolean>>;
  setEditUserModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
  logUser: (obj: iLoginForm) => void;
  registerUser: (obj: iRegisterForm) => void;
  editUser: (obj: object) => void;
  deleteUser: () => void;
  logoutDash: () => void;
  addContact: (obj: iAddContact) => void;
  editContact: (obj: object) => void;
  removeContact: (id: string) => void;
  setContactEdit: React.Dispatch<React.SetStateAction<string>>;
  editUserModalToggle: boolean;
  contactEdit: string;
}

export interface iAxiosErr {
  error: string;
  message: string;
}
export interface iModalEditContact {
  setOpenModalEditContact: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface iModalEditUser {
  setEditUserModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
