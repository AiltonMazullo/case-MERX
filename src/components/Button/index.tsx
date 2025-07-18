import React from "react";
import "./styles.css";
import { ButtonProps } from "@/types";


export default function FilterButton({ onClick }: ButtonProps) {
  return (
    <button className="btn-filter" onClick={onClick}>
      <img src="/filtro.png" alt="Botão de filtrar personagens" className="btn-filter-icon" />
      <span>Filtrar personagens</span>
    </button>
  );
}
