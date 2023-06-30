import Modal from "../modal";
import { ModalTechBox } from "./stlye";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { iAddContact, iSetModalToogle } from "../../interfaces/contacts";

export default function ModalAddTech({
  setnewContactModalToggle,
}: iSetModalToogle) {
  const { addContact } = useContext(AuthContext);

  const ContactCreateSchema = yup.object({
    name: yup.string().required("Titulo é obrigatório"),
    email: yup.string().email().required("Email é obrigatório"),
    phone_number: yup.string().required("Telefone é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iAddContact>({
    resolver: yupResolver(ContactCreateSchema),
  });
  return (
    <Modal title="Cadastrar Contato" setModalToggle={setnewContactModalToggle}>
      <ModalTechBox>
        <form onSubmit={handleSubmit(addContact)}>
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
          <button type="submit">Cadastrar Contato</button>
        </form>
      </ModalTechBox>
    </Modal>
  );
}
