import React from "react";
import { Btn } from "./styles";

export default function Button({ children, variant, size, ...rest }) {
  return (
    <Btn size={size} type="button" {...rest} variant={variant}>
      {children}
    </Btn>
  );
}
