import { characters } from "@/Mock/characters";
import { Personagem } from "@/types";

export async function getCharacters(): Promise<Personagem[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(characters);
    }, 500);
  });
}

export async function searchCharacters(nome: string): Promise<Personagem[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const busca = characters.filter((personagem) =>
        personagem.nome.toLowerCase().includes(nome.toLowerCase())
      );
      resolve(busca);
    }, 500);
  });
}

export async function getCharacterById(id: number): Promise<Personagem | null> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const buscaById = characters.find((personagem) => personagem.id === id);
            resolve(buscaById || null);
        }, 500);
    });
}
