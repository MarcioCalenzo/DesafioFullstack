import Modal from "../modal";
import { ModalTechBox } from "./stlye";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { iModalEditUser } from "../../interfaces";
import { iEditUserForm } from "../../interfaces/user";

export default function ModalEditUser({
  setEditUserModalToggle,
}: iModalEditUser) {
  const { editUser } = useContext(AuthContext);

  const ContactCreateSchema = yup.object({
    name: yup.string().notRequired(),
    email: yup.string().notRequired().email("Precisa ser um email valido"),
    phone: yup.string().notRequired(),
    password: yup.string().notRequired(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditUserForm>({
    resolver: yupResolver(ContactCreateSchema),
  });

  const onSubmit = (data: iEditUserForm) => {
    const { name, email, phone, password } = data;
    if (name || email || phone || password) {
      editUser(data);
    } else {
      return null;
    }
  };

  return (
    <Modal title="Editar Usuario" setModalToggle={setEditUserModalToggle}>
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
              {...register("phone")}
              placeholder="Digite o telefone"
            />
            <span>{errors.phone?.message}</span>
          </div>
          <div className="input-box">
            <label>Senha</label>
            <input
              type="password"
              {...register("password")}
              placeholder="Digite a senha"
            />
            <span>{errors.password?.message}</span>
          </div>
          <button type="submit">Editar Usuario</button>
        </form>
      </ModalTechBox>
    </Modal>
  );
}
