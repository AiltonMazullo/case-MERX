import { heroes } from "@/Mock/heroes";
import { HeroesProps } from "@/types";

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

export async function getHeroesById(id: number): Promise<HeroesProps | null> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const searchHeroesById = heroes.find((hero) => hero.id === id);
            resolve(searchHeroesById || null);
        }, 500);
    });
}
