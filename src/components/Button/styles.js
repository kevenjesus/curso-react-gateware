import styled, { css } from "styled-components";

export const Btn = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 12px;
  outline: none;
  ${({ variant }) => {
    return variant === "primary"
      ? css`
          background: #4f3961;
          color: #fff;
        `
      : css`
          background: #fff;
          border-color: #ccc;
          color: #333;
        `;
  }}
`;
