import Modal from "../modal";
import { ModalTechBox } from "./stlye";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { iEditContact } from "../../interfaces/contacts";
import { iModalEditContact } from "../../interfaces";

export default function ModalEditContact({
  setOpenModalEditContact,
}: iModalEditContact) {
  const { editContact } = useContext(AuthContext);

  const ContactCreateSchema = yup.object({
    name: yup.string().notRequired(),
    email: yup.string().notRequired().email("Precisa ser um email valido"),
    phone_number: yup.string().notRequired(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditContact>({
    resolver: yupResolver(ContactCreateSchema),
  });

  const onSubmit = (data: iEditContact) => {
    const { name, email, phone_number } = data;
    if (name || email || phone_number) {
      editContact(data);
    } else {
      return null;
    }
  };

  return (
    <Modal title="Editar Contato" setModalToggle={setOpenModalEditContact}>
      <ModalTechBox>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-box">
            <label>Nome</label>
            <input
              type="text"
              {...register("name")}
              placeholder="Digite o nome"
            />
            <span>{errors.name?.message}</span>
          </div>
          <div className="input-box">
            <label>Email</label>
            <input
              type="text"
              {...register("email")}
              placeholder="Digite o email"
            />
            <span>{errors.email?.message}</span>
          </div>
          <div className="input-box">
            <label>Telefone</label>
            <input
              type="text"
              {...register("phone_number")}
              placeholder="Digite o telefone"
            />
            <span>{errors.phone_number?.message}</span>
          </div>
          <button type="submit">Editar Contato</button>
        </form>
      </ModalTechBox>
    </Modal>
  );
}
