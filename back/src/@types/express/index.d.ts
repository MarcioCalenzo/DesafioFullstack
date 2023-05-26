import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      user: {
        isAdm: boolean;
        id: number;
      };
      userUpdate: {
        email: string;
        name: string;
        password: string;
      };
    }
  }
}
