# Rick-and-Morty-API

Oque vc vai precisar pra rodar essa aplicação:


- Node.js

- Git


### Instale as dependencia com:
> npm install

### Na pasta raiz do projeto use: 
> node index.js


### Acesse localmente pelo insomnia com:
> http://localhost:3000/


# Requisições de personagens

| Rotas  |  Ações  | parametros |
| ------------------- | ------------------- |------------------- |
|  /characters |  Lista todos os personagens | page |
|  /characters-origin |  Lista os personagens por sua origem | page, origin |
|  /characters-status |  Lista os personagens por seu status | page, status |
|  /characters-specie|  Lista os personagens por sua especie | page, species |
|  /characters-gender |  Lista os personagens por seu genero | page, gender |
|  /character-by-id |  Buscar um personagem pelo seu ID | id |
|  /character-by-name |  Buscar um personagem pelo seu nome | page, name |
|  /character-save-by-id |  Buscar um personagem pelo seu ID e salva na pasta tmp na raiz do projeto | id |



# Requisições de episodios

| Rota  |  Ações | Parametros  |
| ------------------- | ------------------- |------------------- |
|  /episodes |  Lista os episodios |  page |
|  /episode-by-name |  busca o episodio pelo seu nome |  name |
|  /episode-by-tag |  busca o episodio pela tag |  tag (ex: S01E01) |

# Requisições de location

| Rota  |  Ações | Parametros  |
| ------------------- | ------------------- |------------------- |
|  /locations | Lista os locais |  page |
|  /location-by-name |  Busca o local pelo seu nome |  name |
|  /locations-by-type |  Lista os locais por tipo |  type, page |
|  /locations-by-dimension |  Lista os locais por dimensão |  dimension, page |


