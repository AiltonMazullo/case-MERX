"use client";
import { characters } from "@/Mock/characters";
import "./styles.css";
import CardComponent from "@/components/Card";

export default function Home() {
  const personagens = characters;

  return (
    <main className="container">
      <ul className="container-lista">
        {personagens.map((personagem) => (
          <li key={personagem.id}>
            <CardComponent personagem={personagem} onClick={() => {}} />
          </li>
        ))}
      </ul>
    </main>
  );
}
