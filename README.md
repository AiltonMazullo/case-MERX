# Marvel Heroes - MERX Energia - Case Técnico

Este projeto é um desafio prático para a vaga de TI 2025 na MERX Energia.

## 🔒 Segurança das Chaves de API

As chaves da Marvel (public e private key) **NÃO estão no código-fonte**. Elas ficam protegidas no arquivo `.env.local`, que não é versionado (está no `.gitignore`).

Isso garante que nenhuma credencial sensível seja exposta no repositório, seguindo as melhores práticas de segurança para projetos Node.js/Next.js.

Para rodar com a Marvel API oficial, basta criar um arquivo `.env.local` na raiz do projeto com:

```
MARVEL_PUBLIC_KEY=sua_public_key
MARVEL_PRIVATE_KEY=sua_private_key
```

---

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
- [x] filtro de ordem alfabética ( A - Z || Z - A)
- [x] Exibição de detalhes em modal
- [x] Simulação de chamadas à API (com mock + filtro + erro tratado)
- [x] Código limpo, modular e tipado com TypeScript

---

## 💡 Decisões Técnicas

Devido à instabilidade da **API oficial da Marvel** (erros de autenticação e restrições de CORS), optei por **utilizar dados mockados, mas irei deixar a lógica utilizada abaixo (está no arquivo - 'api.ts'):**.

---

## 🧩 Exemplos de Código

```ts
// src/services/api.ts

import { NextResponse } from "next/server";
import md5 from "md5";

const url = "https://gateway.marvel.com/v1/public/characters";
const publicKey = process.env.MARVEL_PUBLIC_KEY!;
const privateKey = process.env.MARVEL_PRIVATE_KEY!;
const ts = Date.now().toString();
const hash = md5(ts + privateKey + publicKey);

export async function GET() {
  console.log("TimeStamp:", ts);
  console.log("HASH:", hash);

  try {
    const res = `${url}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    const response = await fetch(res);
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data.data.results[0]);
  } catch (err) {
    return NextResponse.json(
      { error: "Erro ao buscar dados da Marvel.", err },
      { status: 500 }
    );
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
