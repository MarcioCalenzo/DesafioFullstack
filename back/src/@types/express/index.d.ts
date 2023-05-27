import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      user: {
        isAdm: boolean;
        id: string;
      };
      userUpdate: {
        email: string;
        name: string;
        password: string;
        phone: string;
      };
      contactUpdate: {
        email: string;
        name: string;
        phone_number: string;
      };
    }
  }
}
