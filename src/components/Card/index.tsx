'use client';
import React from "react";
import './styles.css'
import { Personagem } from "@/types";

interface CardProps {
  personagem: Personagem;
  onClick?: () => void;
}

export default function CardComponent({ personagem, onClick }: CardProps) {
  return (
    <div className="card-container" onClick={onClick}>
      <img src={personagem.foto} alt={personagem.nome} />
      <h3>{personagem.nome}</h3>
    </div>
  );
}
