# livros-angular — Trabalho Prático DGT2809

Aplicação Angular 17 (arquitetura com `NgModule`) com o catálogo de livros, cadastro e exclusão, serviços injetáveis, formulário com validação nativa HTML5 e navegação interna. O Bootstrap é carregado pelo CDN no `src/index.html`.

## Requisitos

- Node.js 18.13 ou superior e npm.
- Acesso à internet para instalar as dependências e carregar o CSS do Bootstrap.

## Executar

```bash
npm install
npm start
```

Abra `http://localhost:4200/`. Para gerar a versão de produção: `npm run build`.

## Estrutura

- `src/app/editora.ts`, `src/app/livro.ts`: entidades.
- `src/app/controle-editora.service.ts`, `src/app/controle-livros.service.ts`: serviços (dados em memória).
- `src/app/livro-lista`: catálogo e exclusão (rota `/lista`).
- `src/app/livro-dados`: formulário de inclusão (rota `/dados`).

Os dados ficam em memória; ao recarregar a página o catálogo volta aos dados iniciais.
