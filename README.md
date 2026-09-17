# ChapHub — Landing

Landing page do Ecossistema de Inovação ChapHub. React 18 + Vite 5.

## Requisitos

- Node 18+
- npm

## Instalar

```bash
npm install
```

## Rodar em dev

```bash
npm run dev
```

Abre em `http://localhost:3000`.

## Build de produção

```bash
npm run build
```

Saída em `dist/`.

## Preview do build

```bash
npm run preview
```

## Estrutura

```
src/
  components/   seções da landing (Nav, Hero, Sobre, ...)
  hooks/        comportamento (fade-in, count-up, partículas, typed)
  data/         conteúdo (grupos de trabalho, governança, palavras do typed)
  styles/       CSS global
public/
  chaphub/      logos do ecossistema
```

## Tipografia

A fonte de títulos da marca é a **Organetto** (manual, p.5), mas só existem
versões DEMO da Fontspring no material do cliente — inválidas em produção.
Até a licença ser comprada, os títulos usam **Saira** (Google Fonts), que tem
largura e desenho geométrico próximos. O texto corrido usa **Lato**, que é
fonte da própria marca.
