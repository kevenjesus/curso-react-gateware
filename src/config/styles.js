import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *,
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  
  body {
    background: #4f3961;
  }
`;

export const Alert = styled.div`
  width: 100%;
  padding: 12px;
  background: ${({ type }) => (type === "success" ? "#5b8c5a" : "#84142d")};
  color: #fff;
  border-radius: 5px;
  margin: 10px 0;
  display: ${({ show }) => (show !== null ? "block" : "none")};
`;
