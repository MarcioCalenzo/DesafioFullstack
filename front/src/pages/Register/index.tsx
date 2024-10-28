import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "react-toastify/dist/ReactToastify.css";

import {
  Container,
  Header,
  DivForm,
  Form,
  DivTittle,
  ButtonLink,
} from "../../components/register";
import { iRegisterForm } from "../../interfaces/user";

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup
    .string()
    .email("Tem que ser um email válido")
    .required("Email é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha precisa de no minimo 6 digitos")
    .required("Senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Ambas as senhas tem que ser iguais"),
  phone: yup.string().required("Telefone é obrigatório"),
  isAdm: yup.bool().default(false),
});

export default function Register() {
  const { registerUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterForm>({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <Header>
        <h2>Contacts Hub</h2>
        <ButtonLink to={"/"}>Voltar</ButtonLink>
      </Header>
      <DivForm>
        <DivTittle>
          <h2>Crie sua conta</h2>
          <p>Rapido e grátis, vamos nessa</p>
        </DivTittle>

        <Form onSubmit={handleSubmit(registerUser)}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          <span>{errors.name?.message}</span>

          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>

          <label htmlFor="phone">Telefone</label>
          <input
            type="text"
            placeholder="Digite seu telefone"
            {...register("phone")}
          />
          <span>{errors.phone?.message}</span>

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>

          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            type="password"
            placeholder="Digite novamente sua senha"
            {...register("confirmPassword")}
          />
          <span>{errors.confirmPassword?.message}</span>

          <button type="submit">Cadastrar</button>
        </Form>
      </DivForm>
    </Container>
  );
}
