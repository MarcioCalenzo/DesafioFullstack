# DesafioFullstack

Este projeto em Node.js requer algumas configurações antes de ser executado corretamente. Siga as etapas abaixo para configurar o ambiente:

### Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [https://nodejs.org/en/download](https://nodejs.org/en/download).
Certifique-se de ter o PostgreeSQL instalado em sua máquina. Você pode baixá-lo em [https://www.postgresql.org/download/](https://www.postgresql.org/download/).

### Passo 1: Configuração do ambiente

1. No terminal, navegue até a pasta onde deseja clonar o projeto.

2. Clone este repositório. Você pode fazer isso através do comando `git clone` ou baixando o repositório como um arquivo ZIP e descompactando-o. Certifique-se de estar dentro da pasta "node" para rodar o projeto.

3. Abra duas janelas de terminal separadas: uma para o frontend e outra para o backend.

4. Em ambas as janelas de terminal, execute o comando para instalar as dependências do projeto. Se estiver usando npm, execute o comando `npm install`. Se estiver usando o yarn, execute o comando `yarn`.

6. Neste projeto, é necessário criar um arquivo `.env`seguindo o exemplo do `.env.example` , para isso voce precisara ja ter criado um banco de dados com o PostgreeSQL.

Observaçao : Se estiver com duvida nesta etapa nao hesite em entrar em contato comigo!

5. Após a instalação das dependências, execute o comando para iniciar a aplicação em ambas as janelas de terminal. Se estiver usando npm, execute o comando `npm run dev`. Se estiver usando o yarn, execute o comando `yarn dev`.

Agora você está pronto para executar o projeto Desafio Backend Jr em seu ambiente local! Abra o navegador e acesse a URL [http://localhost:5173/](http://localhost:5173/).

# Documetaçao da API 

## Rotas

A API oferece as seguintes rotas:

- `/users/`

  - `POST` - Cadastrar um usuario.
  - `GET` - Listar o seu usuario e se for admin listar todos os usuarios.

- `/users/profile/`

  - `GET` - Listar o seu usuario.

- `/users/id`

  - `PATCH` - Atualizar os dados do seu user ou se for admin atualizar os dados de qualquer user.
  - `DELETE` - Excluir o seu user ou se for admin excluir um user especifico.

- `/login/`

  - `POST` - Fazer o login.

- `/contacts/`

  - `POST` - Cadastrar um contato.
  - `GET` - Pegar os contatos cadastrados.

- `/contacts/id`

  - `PATCH` - Atualizar os dados do seu contato ou se for admin atualizar os dados de qualquer contato.
  - `DELETE` - Excluir o seu contato ou se for admin excluir um contato especifico.


## Exemplos de Uso

### Cadastrar um usuario.

```json
{
	"email": "teste@mail.com",
	"name": "teste",
	"phone": "11111",
	"isAdm": false,
	"password": "teste123"
}
```
### A resposta terá o seguinte formato:


```json
{
	"id": "42a05f20-745a-4a02-a958-e2e4990d68e8",
	"email": "teste@mail.com",
	"name": "teste",
	"phone": "11111",
	"isActive": true,
	"isAdm": false,
	"updatedAt": "2023-06-30T02:02:52.582Z",
	"createdAt": "2023-06-30T02:02:52.582Z"
}
```
### Login.

```json
{
	"email": "teste@mail.com",
	"password": "teste123"
}
```
### A resposta terá o seguinte formato:


```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbSI6ZmFsc2UsImlhdCI6MTY4ODA5MjQ0NSwiZXhwIjoxNjg4MTc4ODQ1LCJzdWIiOiIzYTU1MjhhOS1iMzg1LTRmOGYtYjkzMS0zMTNkM2IwNTBjNTMifQ.Mf0X2sauERkwbCiJzUuTXie0aQXZhJh6gt8TX5T7a2A",
	"user": {
		"updatedAt": "2023-06-30T02:34:03.271Z",
		"createdAt": "2023-06-30T02:34:03.271Z",
		"contacts": [],
		"isActive": true,
		"isAdm": false,
		"phone": "11111",
		"name": "teste",
		"email": "teste@mail.com",
		"id": "3a5528a9-b385-4f8f-b931-313d3b050c53"
	}
}
```

### Listar usuario.

```json
{}
header : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbSI6ZmFsc2UsImlhdCI6MTY4NTc1MzMyOCwiZXhwIjoxNjg1ODM5NzI4LCJzdWIiOiJjYjU2MmMyZi0xMmQwLTQ0MzMtOTA0MC1lYWIxN2Q4M2MxNGQifQ.eWqtmoeejk2vG0lwJrtBL2mwxArx2CbT5Tv6eOy_REI
```
### A resposta terá o seguinte formato:


```json
{
	"id": "3a5528a9-b385-4f8f-b931-313d3b050c53",
	"email": "teste@mail.com",
	"name": "teste",
	"phone": "11111",
	"contacts": [],
	"isActive": true,
	"isAdm": false,
	"updatedAt": "2023-06-30T02:34:03.271Z",
	"createdAt": "2023-06-30T02:34:03.271Z"
}
```

### Atualizar usuario (ID do usuario na url) .

```json
{
	"name": "teste1"

}
```
### A resposta terá o seguinte formato:


```json
{
	"id": "cb562c2f-12d0-4433-9040-eab17d83c14d",
	"email": "teste@mail.com",
	"name": "teste1",
	"phone": "11111",
	"isActive": true,
	"isAdm": false,
	"updatedAt": "2023-06-03T00:53:03.000Z",
	"createdAt": "2023-06-03T00:47:52.000Z"
}
```


### Deletar usuario (ID do usuario na url) .

```json
{}
```
### Não terá resposta 

## Todas as rotasa abaixo precisam de um Bearer Toekn
### Cadastrar um Contato.

```json
{
	"email": "teste1@mail.com",
	"name": "teste4",
	"phone_number": "11112"
}
```
### A resposta terá o seguinte formato:


```json
{
	"updatedAt": "2023-06-30T02:02:52.582Z",
	"createdAt": "2023-06-30T02:02:52.582Z",
	"contacts": [
		{
			"phone_number": "11112",
			"name": "teste4",
			"email": "teste1@mail.com",
			"id": "a0971316-426b-43af-bc16-d12b2d093b73"
		}
	],
	"isActive": true,
	"isAdm": false,
	"phone": "11111",
	"name": "teste",
	"email": "teste@mail.com",
	"id": "42a05f20-745a-4a02-a958-e2e4990d68e8"
}
```

### Listar seus contatos.

```json
{}
header : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbSI6ZmFsc2UsImlhdCI6MTY4NTc1MzMyOCwiZXhwIjoxNjg1ODM5NzI4LCJzdWIiOiJjYjU2MmMyZi0xMmQwLTQ0MzMtOTA0MC1lYWIxN2Q4M2MxNGQifQ.eWqtmoeejk2vG0lwJrtBL2mwxArx2CbT5Tv6eOy_REI
```
### A resposta terá o seguinte formato:


```json
[
	{
		"id": "6f398d5c-46fd-4aff-9add-00980bfe3ac8",
		"name": "teste2",
		"email": "teste2@mail.com",
		"phone_number": "11112",
		"isActive": true,
		"createdAt": "2023-06-29T22:29:16.670Z",
		"updatedAt": "2023-06-29T22:29:16.670Z"
	},
	{
		"id": "433816d4-acd6-47cc-9514-9b02830fc3b4",
		"name": "teste4",
		"email": "teste4@mail.com",
		"phone_number": "11114",
		"isActive": true,
		"createdAt": "2023-06-29T22:40:02.227Z",
		"updatedAt": "2023-06-29T22:40:02.227Z"
	},
	{
		"id": "4b3bc768-1ab9-4ac3-a125-bc5c8ecc498e",
		"name": "teste3",
		"email": "teste3@mail.com",
		"phone_number": "11113",
		"isActive": true,
		"createdAt": "2023-06-29T22:24:46.568Z",
		"updatedAt": "2023-06-30T00:52:50.395Z"
	}
]
```

### Atualizar usuario (ID do usuario na url) .

```json
{

	"phone_number": "2"

}
```
### A resposta terá o seguinte formato:


```json
{
	"id": "ef1959bd-ede6-4499-a0c1-f8c0b0f0d56e",
	"name": "teste2",
	"email": "teste2@mail.com",
	"phone_number": "2",
	"isActive": true,
	"createdAt": "2023-06-29T19:39:25.809Z",
	"updatedAt": "2023-06-29T20:01:02.508Z"
}
```


### Deletar usuario (ID do usuario na url) .

```json
{}
```
### Não terá resposta 


Caso tenha qualquer duvida sobre a aplicaçao não hesite em me procurar 
email: marciogabrieloficial@hotmail.com
linkedin: https://www.linkedin.com/in/marciocalenzo/

