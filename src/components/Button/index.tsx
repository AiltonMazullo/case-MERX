import React from "react";
import "./styles.css";
import { FilterButtonProps } from "../../types";

export default function FilterButton({ active, onClick }: FilterButtonProps) {
  return (
    <button className="filter-btn" onClick={onClick}>
    {active ? "Remover ordem alfabética" : "Filtrar por ordem alfabética"}
  </button>
  );
}
