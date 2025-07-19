# Marvel Heroes - MERX Energia - Case Técnico

Este projeto é um desafio prático para a vaga de TI 2025 na MERX Energia.

## 🧪 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS Modules

---

## 📁 Estrutura do Projeto

- `src/mock/heroes.ts`: Arquivo com os dados mockados dos personagens.
- `src/services/marvel.ts`: Serviço que simula uma API e lógica da busca dos personagens pelo nome.
- `src/types/index.ts`: Tipos TypeScript para garantir segurança e clareza nos dados.
- `src/components/`: Componentes reutilizáveis como Card, PopUp, SearchBar e FilterButton.
- `src/app/`: Página e lógica da aplicação consumo dos dados.

---

## 🛠 Como rodar o projeto localmente

1. Clone o repositório:

```bash
git clone https://github.com/AiltonMazullo/case-MERX.git
cd case-merx
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

2. Rode o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

4. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## ✅ Funcionalidades Entregues

- [x] Listagem de personagens com layout responsivo
- [x] Busca por nome
- [x] filtro de ordem alfabética
- [x] Exibição de detalhes em modal
- [x] Simulação de chamadas à API (com mock + filtro + erro tratado)
- [x] Código limpo, modular e tipado com TypeScript

---

## 💡 Decisões Técnicas

Devido à instabilidade da **API oficial da Marvel** (erros de autenticação e restrições de CORS), optei por simular uma API e **utilizar dados mockados, mas antes criei uma API local para mostrar a lógica utilizada**.

---

## 🧩 Exemplos de Código

```ts
// backend/db.json
[
  {
    heroes: [
      {
        id: 1,
        name: "Homem de Ferro",
        age: 48,
        biography:
          "Gênio, bilionário, playboy, filantropo. Tony Stark criou a armadura do Homem de Ferro para salvar sua vida e depois usou sua tecnologia para proteger o mundo.",
        image: "/Iron-Man.svg",
      },
      {
        id: 2,
        name: "Capitão América",
        age: 105,
        biography:
          "Steve Rogers foi transformado no supersoldado Capitão América durante a Segunda Guerra Mundial. É símbolo de coragem, justiça e liderança.",
        image: "/CapitainAmerica.svg",
      },
      {
        id: 3,
        name: "Viúva Negra",
        age: 35,
        biography:
          "Natasha Romanoff é uma das espiãs mais habilidosas do mundo, com passado misterioso e grande lealdade aos Vingadores.",
        image: "/BlackWidow.svg",
      },
      {
        id: 4,
        name: "Thor",
        age: 1500,
        biography:
          "Deus do Trovão, filho de Odin, Thor é um dos mais poderosos defensores da Terra e de Asgard, empunhando o martelo Mjolnir.",
        image: "/Thor.svg",
      },
      {
        id: 5,
        name: "Hulk",
        age: 49,
        biography:
          "Após ser exposto à radiação gama, Bruce Banner se transforma no incrível Hulk, uma força imparável movida pela raiva.",
        image: "/Hulk.svg",
      },
      {
        id: 6,
        name: "Homem-Aranha",
        age: 21,
        biography:
          "Peter Parker ganhou poderes aracnídeos após ser picado por uma aranha radioativa. Usa suas habilages para proteger Nova York.",
        image: "/Spider-Man.svg",
      },
      {
        id: 7,
        name: "Pantera Negra",
        age: 35,
        biography:
          "T'Challa é o rei de Wakanda e o Pantera Negra, combinando habilages de combate, inteligência e tecnologia avançada.",
        image: "/BlackPanther.svg",
      },
      {
        id: 8,
        name: "Doutor Estranho",
        age: 42,
        biography:
          "Stephen Strange era um cirurgião brilhante que, após um acidente, se tornou o Mago Supremo e protetor da Terra contra ameaças místicas.",
        image: "/DoctorStrange.svg",
      },
    ],
  },
];

// src/services/api.ts

import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001",
});

// src/services/marvel.ts

import { api } from "./api";
import { HeroesProps } from "@/types";

export async function getHeroes(): Promise<HeroesProps[]> {
  try {
    const res = await api.get("/heroes");
    return res.data;
  } catch (err) {
    console.error("Erro ao buscar heróis:", err);
    return [];
  }
}
```

---

## 🚀 Deploy

🔗 [case-merx.vercel.app](https://case-merx.vercel.app)
🔗 [case-merx-ailtons-projects-e953598b.vercel.app](https://case-merx-ailtons-projects-e953598b.vercel.app)

---

## 👨‍💻 Desenvolvido por

**Ailton Mazullo**

- [LinkedIn](https://www.linkedin.com/in/ailton-mazullo-33b5b0276)
- [GitHub](https://github.com/AiltonMazullo)

---

> **Observação**: O projeto está pronto para facilmente integrar com a Marvel API oficial no futuro.
