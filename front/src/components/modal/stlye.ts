import styled from "styled-components";

export const ModalBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 0, 0, 0.85);
  position: fixed;
  z-index: 1;
`;
export const ModalMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  padding-top: 200px;
  margin: 0 auto;

  .modalTexto {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: var(--color-grey2);
    padding: 12px 20px 12px 20px;
    gap: 10px;
  }
  .modalTexto > h1 {
    color: var(--color-grey0);
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
  }
  .modalTexto > span {
    color: var(--color-grey1);
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    cursor: pointer;
  }
  .content {
    background-color: var(--color-grey3);
    width: 100%;
  }
`;
