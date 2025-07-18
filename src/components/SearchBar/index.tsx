import React from "react";
import './styles.css';
import { SearchBarProps } from "../../types";

export default function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={event => onChange(event.target.value)}
      placeholder={placeholder || "Pesquisar..."}
      className="input-busca"
    />
  );
}