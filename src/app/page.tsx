"use client";
import React, { useState } from "react";
import "./styles.css";
import { heroes } from "@/Mock/heroes";
import CardComponent from "@/components/Card";
import PopUp from "@/components/PopUp";
import FilterButton from "@/components/Button";
import SearchBar from "@/components/SearchBar";
import { HeroesProps } from "@/types";
import { searchHeroesByName } from "@/services/api";

export default function Home() {
  
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [heroSelected, setHeroSelected] = useState<HeroesProps | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const openPopUp = (hero: HeroesProps) => {
    setHeroSelected(hero);
    setPopUpOpen(true);
  };

  const handleFilterClick = () => {
    searchHeroesByName(searchTerm);
  };

  return (
    <main className="container">
      <div className="search-bar">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Buscar herói..."
        />
        <FilterButton onClick={handleFilterClick} />
      </div>
        <ul className="container-lista">
          {heroes.map((hero) => (
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
