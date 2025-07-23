import React from "react";
import "./styles.css";
import { FilterButtonProps } from "@/types";

export default function FilterButton({ active, order, onClick }: FilterButtonProps) {
  return (
    <div className="filter-toggle">
      <button
        className={`filter-btn ${active && order === "AZ" ? "active" : ""}`}
        onClick={() => onClick("AZ")}
      >
        A → Z
      </button>

      <button
        className={`filter-btn ${active && order === "ZA" ? "active" : ""}`}
        onClick={() => onClick("ZA")}
      >
        Z → A
      </button>
    </div>
  );
}