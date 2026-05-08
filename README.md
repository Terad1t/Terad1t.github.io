# Terad1t Portfolio

Portfólio em React/Vite com estética inspirada em Hollow Knight.

## Como rodar

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy no GitHub Pages

O GitHub Pages deve publicar o conteúdo gerado em `dist/`. Se ele servir o `index.html` da raiz direto, o navegador tenta carregar `src/main.jsx` e bloqueia o módulo JSX por MIME.

O fluxo automático já está configurado para rodar em `main`.

## Estrutura

- `index.html`: entrada do Vite
- `src/App.jsx`: layout e conteúdo do portfólio
- `src/styles.css`: identidade visual e responsividade
