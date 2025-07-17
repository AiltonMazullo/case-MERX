# Marvel Characters - MERX Energia - Case Técnico

Este projeto é um desafio prático para a vaga de TI 2025 na MERX Energia. 

## Tecnologias Utilizadas

- Next.js
- React
- TypeScript
- CSS Modules

## Estrutura do Projeto

- `src/Mock/characters.ts`: Dados mockados dos personagens Marvel.
- `src/services/apiMock.ts`: Serviço que simula requisições à API usando os dados mockados.
- `src/types/models.ts`: Tipos TypeScript para os personagens.
- `src/app/`: Componentes, páginas e estilos.

## Como rodar o projeto localmente

1. Instale as dependências:
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
3. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## Funcionalidades Implementadas

- Listagem de personagens (dados mockados)
- Busca por nome de personagem
- Filtragem de dados a escolha do usuário
- Card com efeito de destaque 
- Modal de detalhes ao clicar no card
- Interface responsiva e focada em UI/UX

## Observações

- O projeto utiliza dados mockados em vez da API real da Marvel, devido a limitações de acesso.
- O serviço mockado pode ser facilmente adaptado para consumir uma API real futuramente.

## Deploy

()

---

Feito por Ailton Mazullo
