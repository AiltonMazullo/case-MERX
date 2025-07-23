"use client";
import React, { useState, useEffect } from "react";
import "./styles.css";
import CardComponent from "@/components/Card";
import PopUp from "@/components/PopUp";
import SearchBar from "@/components/SearchBar";
import FilterButton from "@/components/Button";
import { HeroesProps } from "@/types";
import { getHeroes } from "@/services/marvel";

export default function Home() {
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [heroSelected, setHeroSelected] = useState<HeroesProps | null>(null);
  const [heroes, setHeroes] = useState<HeroesProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [sortActive, setSortActive] = useState(false);
  const [sortOrder, setSortOrder] = useState<"AZ" | "ZA">("AZ");

  useEffect(() => {
    async function fetchHeroes() {
      try {
        const data = await getHeroes();
        setHeroes(data);
      } catch (err) {
        console.error("Erro ao fazer requisição:", err);
        setHeroes([]);
      }
    }
    fetchHeroes();
  }, []);

  const openPopUp = (hero: HeroesProps) => {
    setHeroSelected(hero);
    setPopUpOpen(true);
  };

  let filteredHeroes = heroes.filter((hero) =>
    hero.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortActive) {
    filteredHeroes = [...filteredHeroes].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return sortOrder === "AZ"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
  }

  return (
    <main className="container">
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Buscar personagem..."
      />

      <FilterButton
        active={sortActive}
        order={sortOrder}
        onClick={(order) => {
          if (sortActive && order === sortOrder) {
            setSortActive(false); // desativa filtro
          } else {
            setSortActive(true);
            setSortOrder(order);
          }
        }}
      />

      {filteredHeroes.length === 0 && <p>Nenhum personagem encontrado.</p>}

      <ul className="container-lista">
        {filteredHeroes.map((hero) => (
          <li key={hero.id}>
            <CardComponent hero={hero} onClick={() => openPopUp(hero)} />
          </li>
        ))}
      </ul>

      {popUpOpen && heroSelected && (
        <PopUp hero={heroSelected} onClose={() => setPopUpOpen(false)} />
      )}
    </main>
  );
}
