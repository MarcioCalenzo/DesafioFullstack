export interface iAddContact {
  name: string;
  email: string;
  phone_number: string;
}
export interface iEditContact {
  name?: string;
  email?: string;
  phone_number?: string;
}
export interface iContact {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  isActive: boolean;
  created_at: Date;
  updated_at: Date;
}
export interface iSetModalToogle {
  setnewContactModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
