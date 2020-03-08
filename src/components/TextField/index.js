import React from "react";
import { Input } from "./styles";

export default function TextField({
  type,
  placeholder,
  value,
  onChange,
  marginRight
}) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      marginRight={marginRight}
      onChange={e => onChange(e.target.value)}
    />
  );
}
