import { characters } from "@/Mock/characters";


export function getCharacters(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(characters);
        }, 500);
    });
}

export function searchCharacters(nome: string) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const busca = characters.filter((personagem) =>
            personagem.nome.toLowerCase().includes(nome.toLowerCase())
        );
        resolve(busca);
        }, 500);
    });
}