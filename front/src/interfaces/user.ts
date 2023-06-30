import { iContact } from "./contacts";

export interface iLoginForm {
  email: string;
  password: string;
}

export interface iRegisterForm {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}
export interface iEditUserForm {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  contacts: iContact[];
  isActive: boolean;
  isAdm: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface iPostUser {
  token: string;
  user: iUser;
}
