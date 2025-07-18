import { heroes } from "../mock/heroes"
import { HeroesProps } from "../types";

export async function getHeroes(): Promise<HeroesProps[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(heroes);
    }, 500);
  });
}

export async function searchHeroesByName(name: string): Promise<HeroesProps[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredHeroes = heroes.filter((hero) =>
        hero.name.toLowerCase().includes(name.toLowerCase())
      );
      resolve(filteredHeroes);
    }, 500);
  });
}
