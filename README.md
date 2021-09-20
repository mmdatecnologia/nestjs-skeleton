# 📌 Índice de conteúdos

- [📌 Índice de conteúdos](#-índice-de-conteúdos)
- [💬 Sobre o Projeto](#-sobre-o-projeto)
- [🌐 Tecnologias Usadas](#-tecnologias-usadas)
- [🧰 Ajustes e melhorias](#-ajustes-e-melhorias)
- [💻 Pré-requisitos](#-pré-requisitos)
- [⚙️ Configurando](#️-configurando)
- [🚀 Instalando](#-instalando)
- [☕ Usando](#-usando)
- [🧪 Testes](#-testes)
- [📋 Gerando arquivo de change log](#-gerando-arquivo-de-change-log)
- [🏗️ Build](#️-build)
- [Development](#development)

# 💬 Sobre o Projeto

Este projeto tem o objetivo de fornecer um codebase de inicio para projetos utilizando o NestJS

# 🌐 Tecnologias Usadas

🔥 Nest.js

📘 TypeScript

✅ Lints — ESlint/Prettier/EditorConfig
# 🧰 Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Tarefa

# 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Você instalou a versão mais recente de `<linguagem / dependência / requeridos>`
* Você tem uma máquina `<Windows / Linux / Mac>`. Indique qual sistema operacional é compatível / não compatível.
* Você leu `<guia / link / documentação_relacionada_ao_projeto>`.
* (certifique-se de ter instalado na sua máquina o [Node](https://nodejs.org/en/) e o [Yarn](https://yarnpkg.com/))

# ⚙️ Configurando
Arquivos de configuração

```
.env.development
.env.homolog
.env.production
package.json
```

# 🚀 Instalando
1. Abra o terminal na pasta desejada para clonar o repositório e execute o comando:

```bash
git clone git@github.com:mmdatecnologia/nestjs-skeleton.git
```

2. Para instalar o <nome_do_projeto>, siga estas etapas:

``` bash
$ yarn install
```

# ☕ Usando

Para usar, siga estas etapas:

```bash
# development
$ yarn start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# 🧪 Testes

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
# 📋 Gerando arquivo de change log

```bash
$ auto-changelog --template changelog-template.hbs -p -u --commit-limit false 
```
ou 

```bash
$ yarn run changelog 
```

 - auto-changelog — comando node module 
 - --template changelog-template.hbs — parâmetro para configurar um arquivo de padrão para suas mensagens de changelog
 - -p — use a versão SEMVER do package.json como a versão mais recente
 - -u — inclui mudanças não lançadas no changelog
 - --commit-limit false — remova o limite sobre o número de commits por lançamento no changelog (padrão: 3)

fonte: https://medium.com/@tiagoboeing/automating-changelog-in-your-nodejs-project-c54bdbb56e57
# 🏗️ Build
Build:

```bash
npm run build
```
# Development

🧑🏼‍💻 [Mateus Macedo Dos Anjos](mailto:macedodosanjosmateus@gmail.com)