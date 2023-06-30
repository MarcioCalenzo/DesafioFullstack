import styled from "styled-components";

export const ModalTechBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px 22px 32px 22px;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 22px;
  }

  .input-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .input-box > label {
    color: var(--color-grey0);
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
  }

  .input-box > input {
    width: 100%;
    height: 38px;
    background-color: var(--color-grey2);
    color: var(--color-grey0);
    border: none;
    padding: 0px 16px 0px 16px;
    border-radius: 10px;
  }
  .input-box > span {
    color: var(--color-grey0);
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
