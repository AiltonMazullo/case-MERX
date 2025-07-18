'use client';
import React from "react";
import './styles.css'
import { CardProps } from "../../types";

export default function CardComponent({ hero, onClick }: CardProps) {
  return (
    <div className="card-container" onClick={onClick}>
      <img src={hero.image} alt={hero.name} />
      <h3>{hero.name}</h3>
    </div>
  );
}
