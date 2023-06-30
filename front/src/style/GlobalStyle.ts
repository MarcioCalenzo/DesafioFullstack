import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

:root {
  --color-primary: #5A6BD2;
  --color-primary-focus: #2C3AAE;
  --color-primary-negative: #4E4E72;

  --color-grey0: #f8f9fa;
  --color-grey1: #868e96;
  --color-grey2: #343b41;
  --color-grey3: #212529;
  --color-grey4: #121214;

  --color-sucess: #3fe864;
  --color-error: #e83f5b;
}
.App{
  background-color: var(--color-grey4);
  width: 100%;
  // height: 140vh;
  min-height:100vh;
}
`;
