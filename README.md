# Libro - API de Livros

## Descrição

API de Livros é um projeto que tem como objetivo disponibilizar uma API para cadastro, consulta, atualização e remoção de livros.

Tem um caráter educacional e social para que as pessoas possam ter acesso a livros de forma mais fácil e rápida.

## Tecnologias

- Node.js
- Express
- SQLite
- Prisma

## Instalação

antes de tudo, é necessário ter o **PNPM** instalado, para isso, execute o comando:

```bash
npm install -g pnpm
```

Após isso, execute o comando:

```bash
pnpm install
```

## Execução

Para executar o projeto, execute o comando:

```bash
pnpm dev
```

## Modelagem

Para criar a modelagem do banco de dados, vá até o arquivo `prisma/schema.prisma` e adicione as tabelas e campos necessários.

## Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e adicione as variáveis que estão no arquivo `.env.example`.

## Lint e formatação

Este projeto utiliza o ESLint e o Prettier para padronização de código.

## Endpoints

Acesse o arquivo `client.http` para visualizar os endpoints disponíveis e testá-los.
