import React from "react";
import { createContext, useEffect, useState } from "react";
import Api from "../services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import {
  iEditUserForm,
  iLoginForm,
  iPostUser,
  iRegisterForm,
  iUser,
} from "../interfaces/user";
import { iAddContact, iContact } from "../interfaces/contacts";
import { iAxiosErr, iUserContext, iUserProviderProps } from "../interfaces";

export const AuthContext = createContext({} as iUserContext);

export default function AuthProvider({ children }: iUserProviderProps) {
  const [user, setUser] = useState<iUser | null>(null);
  const [userContacts, setUserContacts] = useState([] as iContact[]);
  const [contactEdit, setContactEdit] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [newContactModalToggle, setnewContactModalToggle] = useState(false);
  const [openModalEditContact, setOpenModalEditContact] = useState(false);
  const [editUserModalToggle, setEditUserModalToggle] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@contactsHub:TOKEN");

      if (token) {
        try {
          Api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await Api.get<iUser>("/users/profile");

          setUser(data);

          setUserContacts(data.contacts);
        } catch (error) {
          const requestError = error as AxiosError<iAxiosErr>;

          console.error(requestError);
        }

        setLoading(false);
      }
    }

    loadUser();
  }, [loading]);

  function logoutDash() {
    localStorage.removeItem("@contactsHub:TOKEN");
    localStorage.removeItem("@contactsHub:USERID");

    setUser(null);
    navigate("/");
  }

  async function logUser(obj: iLoginForm) {
    try {
      const { data } = await Api.post<iPostUser>("/login", obj);

      localStorage.setItem("@contactsHub:TOKEN", data.token);
      localStorage.setItem("@contactsHub:USERID", data.user.id);
      setUser(data.user);
      setUserContacts(data.user.contacts);

      toast.success(
        "Seu login foi realizado com sucesso , estaremos te encaminhando para o nosso Hub !",
        {
          theme: "dark",
          autoClose: 3000,
        }
      );

      setLoading(false);
    } catch (error) {
      toast.error("Erro ao realizar o login do usuario. Tente novamente", {
        theme: "dark",
      });
    }
  }

  async function registerUser(obj: iRegisterForm) {
    try {
      await Api.post<iPostUser>("/users", obj);

      toast.success(
        "Usuario criado com sucesso , voce esta sendo redirecionado para a pagina de login !",
        {
          theme: "dark",
          autoClose: 3000,
        }
      );
      setTimeout(() => {
        navigate("/");
      }, 4000);
    } catch (error) {
      console.error(error);
      const requestError = error as AxiosError<iAxiosErr>;
      if (requestError.response?.data.message) {
        toast.error(requestError.response?.data.message, {
          theme: "dark",
        });
      } else {
        toast.error(
          "Infelizmentes estamos com problemas , tente novamente mais tarde",
          {
            theme: "dark",
          }
        );
      }
    }
  }
  async function editUser(data: iEditUserForm) {
    try {
      const id = user?.id;
      await Api.patch(`/users/${id}`, data);

      getUser();
      setEditUserModalToggle(false);
      toast.success("Usuario editado com sucesso", {
        theme: "dark",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error(
        "Infelizmentes estamos com problemas , tente novamente mais tarde",
        {
          theme: "dark",
          autoClose: 5000,
        }
      );
    }
  }
  async function deleteUser() {
    try {
      const id = user?.id;
      await Api.delete(`/users/${id}`);
      toast.success("Usuario deletado com sucesso", {
        theme: "dark",
        autoClose: 3000,
      });
      logoutDash();
    } catch (error) {
      console.error(error);
      toast.error(
        "Infelizmentes estamos com problemas , tente novamente mais tarde",
        {
          theme: "dark",
          autoClose: 5000,
        }
      );
    }
  }
  async function addContact(obj: iAddContact) {
    try {
      await Api.post<iPostUser>("/contacts", obj);

      getUser();
      setnewContactModalToggle(false);

      toast.success("Tecnologia adicionada com sucesso", {
        theme: "dark",
        autoClose: 3000,
      });
    } catch (error) {
      console.error(error);
      const requestError = error as AxiosError<iAxiosErr>;
      if (
        requestError.response?.data.message ===
        "User Already have this Contactnology created you can only update it"
      ) {
        toast.error("Ja existe uma contato com o mesmo nome !", {
          theme: "dark",
          autoClose: 5000,
        });
      } else {
        toast.error(
          "Infelizmentes estamos com problemas , tente novamente mais tarde",
          {
            theme: "dark",
            autoClose: 5000,
          }
        );
      }
    }
  }
  async function editContact(obj: object) {
    try {
      const id = contactEdit;
      await Api.patch(`/contacts/${id}`, obj);

      getUser();
      setOpenModalEditContact(false);
      setContactEdit("");
      toast.success("Tecnologia removida com sucesso", {
        theme: "dark",
        autoClose: 3000,
      });
    } catch (error) {
      console.error(error);
      toast.error(
        "Infelizmentes estamos com problemas , tente novamente mais tarde",
        {
          theme: "dark",
          autoClose: 5000,
        }
      );
    }
  }
  async function removeContact(id: string) {
    try {
      await Api.delete(`/contacts/${id}`);

      getUser();

      toast.success("Tecnologia removida com sucesso", {
        theme: "dark",
        autoClose: 3000,
      });
    } catch (error) {
      console.error(error);
      toast.error(
        "Infelizmentes estamos com problemas , tente novamente mais tarde",
        {
          theme: "dark",
          autoClose: 5000,
        }
      );
    }
  }
  async function getUser() {
    try {
      const { data } = await Api.get<iUser>("/users/profile");

      setUser(data);
      setUserContacts(data.contacts);
    } catch (error) {
      toast.error(
        "Infelizmentes estamos com problemas , tente novamente mais tarde",
        {
          theme: "dark",
          autoClose: 5000,
        }
      );
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        userContacts,
        newContactModalToggle,
        setnewContactModalToggle,
        openModalEditContact,
        setOpenModalEditContact,
        logUser,
        registerUser,
        logoutDash,
        addContact,
        removeContact,
        editContact,
        editUser,
        deleteUser,
        contactEdit,
        setContactEdit,
        editUserModalToggle,
        setEditUserModalToggle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
