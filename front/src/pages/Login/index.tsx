import { useForm } from "react-hook-form";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  ButtonLink,
  Container,
  DivForm,
  Form,
  Header,
} from "../../components/login";
import { Navigate } from "react-router-dom";
import { iLoginForm } from "../../interfaces/user";

const schema = yup.object({
  email: yup
    .string()
    .email("Tem que ser um email válido")
    .required("Email é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha precisa de no minimo 6 digitos")
    .required("Senha é obrigatória"),
});

export default function Login() {
  const { logUser, user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginForm>({
    resolver: yupResolver(schema),
  });

  return (
    <>
      {user ? (
        <Navigate to={"/dashboard"} replace />
      ) : (
        <Container>
          <Header>
            <h2>Contacts Hub</h2>
          </Header>
          <DivForm>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit(logUser)}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Digite aqui seu email"
                {...register("email")}
              />
              <span>{errors.email?.message}</span>

              <label htmlFor="password">Senha</label>
              <input
                type="password"
                placeholder="Digite aqui sua senha"
                {...register("password")}
              />
              <span>{errors.password?.message}</span>

              <button type="submit">Entrar</button>
            </Form>
            <p>Ainda não possui uma conta?</p>

            <ButtonLink to={"/register"}>Cadastrar-se</ButtonLink>
          </DivForm>
        </Container>
      )}
    </>
  );
}
