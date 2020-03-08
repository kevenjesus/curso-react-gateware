import React from "react";
import { Input } from "./styles";

export default function TextField({ type, placeholder, value, onChange }) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}
