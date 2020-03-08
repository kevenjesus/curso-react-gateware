import React from "react";
import { Btn } from "./styles";

export default function Button({ children, variant, ...rest }) {
  return (
    <Btn type="button" {...rest} variant={variant}>
      {children}
    </Btn>
  );
}
