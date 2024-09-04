<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Prerequisites
[Node](https://nodejs.org/en) na versão LTS.

## Execução da CLI
Para executar os testes na CLI, use os comandos a seguir:
```bash
$ cd cli
$ npm install
$ bun run cli.ts analyze --deph 3 "Eu gosto de Tigres e Gorilas"
```
## Execução do Back end:
Para executar os testes no back end, use os comandos a seguir:
```bash
$ cd cli
$ npm install
# npm run dev
```
Foram criados 3 end-points referentes para integrações ao client, são elas:
  1. **criar arquivo de hierarquia no back end.**
    - path: http://localhost:3000/entrypoints/create-archive
    - metodo: POST
    - body: { "title": "Empresa", "hierarchy": { "Empresa": {"setores": ["tecnologia", "RH"]} } }
    - descrição: A rota cria um arquivo json que contem a hierarquia de palavras que o front end utilizaria. Como a cli usa um arquivo estático no back end, evitei usar banco de dados.
  2.**verificar arquivos de hierarquia criados no back end**
    - path: http://localhost:3000/entrypoints/get-archives
    - metodo: GET
    - descrição: Essa rota serve para pegar os nomes dos arquivos que foram criados através da rota de criação anterior
  3.**executar cli através de requisição http**
    - path: http://localhost:3000/entrypoints/get-archives
    - metodo: POST
    - body: { "message": "Eu gosto de Tigres e Gorilas", "deph": 1, "verbose": true }
    - descrição: executa a funcionalidade da cli através de requisição http, ele retorna uma mensagem igual à execução da cli com o comando bun run cli.ts

## Notas sobre a execução do front end:
Infelizmente não tive tempo de completar a execução do front end integrado ao back end, então só pude fazer uma entrega parcial de ambos. Peço que considerem mais o código e forma que organizo meus componentes doque a funcionalidade em si. Para testar o front end, execute os seguintes comandos:
```bash
$ cd client
$ npm install
$ npm run start:dev
``` 

## License

Nest is [MIT licensed](LICENSE).
