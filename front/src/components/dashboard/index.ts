import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px;

  hr {
    width: 100%;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;

  h2 {
    color: var(--color-primary);
    margin: 0px 0px 20px 0px;
    text-align: center;
  }
  button {
    cursor: pointer;
    background-color: var(--color-grey3);
    color: var(--color-grey0);
    width: 5rem;
    height: 35px;
    border: none;
    border-radius: 5px;
    margin-bottom: 16px;
  }
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;
  margin-top: 45px;
  margin-bottom: 45px;
  div {
    display: flex;
    gap: 1rem;
    margin-right: 2rem;
  }
  div > button {
    background: none;
    border: none;
    color: var(--color-grey0);
    margin-right: 1rem;
    cursor: pointer;
  }

  h2 {
    color: var(--color-grey0);
  }
  h4 {
    color: var(--color-grey1);
  }

  @media (max-width: 968px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;
  gap: 40px;
  margin-top: 40px;

  h2 {
    color: var(--color-grey0);
  }
  h3 {
    color: var(--color-grey1);
  }
  .headerTech {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1000px;
  }
  .headerTech > button {
    cursor: pointer;
    background-color: var(--color-grey3);
    color: var(--color-grey0);
    font-size: 20px;
    width: 3rem;
    height: 35px;
    border: none;
    border-radius: 5px;
    margin-bottom: 16px;
  }
  .techsList {
    width: 100%;
    background-color: var(--color-grey3);
    padding: 20px 19px 0px 19px;
    list-style: none;
  }
  .techsList > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12.18px;
    background-color: var(--color-grey4);
    margin-bottom: 20px;
  }
  .techsList > li:hover {
    background-color: var(--color-grey2);
  }
  .techsList > li > h3 {
    width: 80%;
    text-overflow: ellipsis;
    overflow: hidden;
    color: var(--color-grey0);
  }
  .techsList > li > div {
    display: flex;
    gap: 1rem;
    margin-right: 2rem;
  }
  .techsList > li > button {
    background: none;
    border: none;
    color: var(--color-grey0);
    margin-right: 1rem;
    cursor: pointer;
  }
  .techsList > li > div > p {
    color: var(--color-grey1);
  }
  .listEmpty > h2 {
    margin-bottom: 30px;
  }
`;
export const ModalBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 0, 0, 0.85);
  position: fixed;
  z-index: 1;
`;
