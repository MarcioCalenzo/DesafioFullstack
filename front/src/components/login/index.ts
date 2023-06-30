import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 0px 1rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;

  h2 {
    color: var(--color-primary);
    margin: 80px 0px 14px 0px;
  }
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--color-grey3);
  padding: 22px 17px 19px 17px;
  border-radius: 10px;

  h2 {
    color: var(--color-grey0);
    text-align: center;
  }
  p {
    color: var(--color-grey1);
    text-align: center;
  }
  button {
    background-color: var(--color-grey1);
    color: var(--color-grey0);
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 5px;
  }
  button:hover,
  button:active {
    background-color: var(--color-grey2);
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  label {
    color: var(--color-grey0);
  }

  input {
    width: 100%;
    height: 38px;
    background-color: var(--color-grey2);
    color: var(--color-grey0);
    border: none;
    padding: 0px 16px 0px 16px;
    border-radius: 10px;
  }
  span {
    color: var(--color-grey1);
  }
  button {
    background-color: var(--color-primary);
    color: var(--color-grey0);
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 5px;
  }
  button:hover,
  button:active {
    background-color: var(--color-primary-focus);
  }
`;

export const ButtonLink = styled(Link)`
  background-color: var(--color-grey1);
  color: var(--color-grey0);
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  padding-top: 0.75rem;

  :hover,
  :active {
    background-color: var(--color-grey2);
  }
`;
