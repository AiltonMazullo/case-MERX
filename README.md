# Marvel Heroes - MERX Energia - Case Técnico

Este projeto é um desafio prático para a vaga de TI 2025 na MERX Energia.

## Tecnologias Utilizadas

- Next.js
- React
- TypeScript
- CSS Modules

## Estrutura do Projeto

- `src/Mock/heroes.ts`: Aqui ficam os dados mockados dos personagens Marvel.
- `src/hooks/useApi.ts`: Serviço que simula requisições à API e realiza o tratamento de erros.
- `src/types/index.ts`: Tipos TypeScript para garantir segurança e clareza nos dados.
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

## Funcionalidades Entregues ✅

- [x] Listagem de personagens com layout responsivo
- [x] Busca por nome
- [x] PopUp com detalhes do personagem
- [x] Simulação de chamadas à API com tratamento de erros
- [x] Tipagem com TypeScript
- [x] Organização de pastas e código limpo


## Decisões Técnicas

- Optei por usar dados mockados pois a API oficial da Marvel apresentou erros de autenticação no período do desenvolvimento.
- Simulei atraso (`setTimeout`) para refletir melhor chamadas reais de API.
- Separei os serviços (`useApi.ts`) para facilitar futura integração com API real, sem precisar refatorar os componentes.

## Deploy

(Em breve)

---

Desenvolvido por **Ailton Mazullo**  
[LinkedIn](https://www.linkedin.com/in/ailton-mazullo-33b5b0276) 
[GitHub](https://github.com/AiltonMazullo)
