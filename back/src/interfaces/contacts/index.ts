export interface IContactRequest {
  name: string;
  email: string;
  phone_number: string;
}

export interface IContact {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IContactUpdate {
  name?: string;
  email?: string;
  phone_number?: string;
}
