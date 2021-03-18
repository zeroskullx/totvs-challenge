## Clientes Inadimplentes

## Requesitos:

- DOCKER
- MongoDB
- NODE.JS
- REACT.JS

## Server

### baixe os arquivos

Configure o .INV:

- Usei as portas
- 3000 : server
- 27017 : Mongo

Instale todas as dependências primeiro: 
* yarn install || npm install
* docker-composer build
* docker-composer up

### Lista Fake:

Dentro da pasta SRC/CLIENTES encontra-se o pack de registros de clientes.
O sistema não tem update, e para adicionar novos resgistros ao banco segue essa trilha:

- 1 - adicione mais registros no arquivo PACK.JSON, segue as regras:
  {nome: string, desde (YYYY-MM-DD): string, valor: number(int)},
- 2 - ciar/recriar o mongoDb no Docker.
- 3 - build o server com o docker-composer
  Quando o server, o mongoDb e a web subir, é só abrir o browser.
  --- simples assim :) ---

## Front-end:

### Iniciar Frontend | Pasta ./web

* yarn install 
* yarn start

Para fazer busca, digite o nome e tecla ENTER

No título da tabela tem um botão, use para reiniciar a tabela.

`Também pode reiniciar a tabela:` limpe o campo procurar e tecle ENTER
