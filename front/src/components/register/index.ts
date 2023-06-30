import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 0px 1rem;
  padding-bottom: 100px;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: var(--color-primary);
    margin: 50px 0px 50px 0px;
  }
  button {
    background-color: var(--color-grey3);
    color: var(--color-grey0);
    width: 18%;
    height: 40px;
    border: none;
    border-radius: 5px;
  }
`;
export const DivTittle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  h2 {
    color: var(--color-grey0);
  }
  p {
    color: var(--color-grey1);
  }
`;
export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--color-grey3);
  padding: 22px 17px 19px 17px;
  border-radius: 10px;
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

  select {
    width: 100%;
    height: 38px;
    background-color: var(--color-grey2);
    color: var(--color-grey0);
    border: none;
    padding: 0px 16px 0px 16px;
    border-radius: 10px;
  }
  button {
    background-color: var(--color-primary-negative);
    color: var(--color-grey0);
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 5px;
  }
  button:hover,
  button:active {
    background-color: var(--color-primary);
  }
`;
export const ButtonLink = styled(Link)`
  background-color: var(--color-grey3);
  color: var(--color-grey0);
  width: 18%;
  height: 40px;
  border: none;
  border-radius: 5px;
  padding: 8px 0px 0px 10px;
  text-decoration: none;
`;
