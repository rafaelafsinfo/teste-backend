
# sistema de funcionarios - backend

### para rodar o backend instale as dependendias com

```md
    npm i
```
### depois execute o comando abaixo para rodar a api

```md
    npm start
```

# Perfil Route
================

### POST /Perfil

* Create a new Perfil
* Request Body:
	+ funcionario_id (required)
	+ idade (required)
	+ endereco (required)
	+ telefone (required)
* Response:
	+ status: true/false
	+ msg: success/error message
	+ codigo: 002 (success) or 001 (error)
	+ dados: created Perfil data

### GET /Perfil

* Retrieve all Perfis
* Response:
	+ status: true/false
	+ msg: success/error message
	+ codigo: 003 (success) or 004 (error)
	+ dados: array of Perfil data

### GET /Perfil/:id

* Retrieve a Perfil by ID
* Request Params:
	+ id (required)
* Response:
	+ status: true/false
	+ msg: success/error message
	+ codigo: 003 (success) or 004 (error)
	+ dados: Perfil data

### PUT /Perfil

* Update a Perfil
* Request Body:
	+ id (required)
	+ funcionario_id (required)
	+ idade (required)
	+ endereco (required)
	+ telefone (required)
* Response:
	+ status: true/false
	+ msg: success/error message
	+ codigo: 002 (success) or 010 (error)
	+ dados: updated Perfil data

### DELETE /Perfil/:id

* Delete a Perfil by ID
* Request Params:
	+ id (required)
* Response:
	+ status: true/false
	+ msg: success/error message
	+ codigo: 008 (success) or 009 (error)
	+ dados: deleted Perfil ID

# Funcionario Route
=====================

### POST /Funcionario

* Create a new Funcionario
* Request Body:
	+ nome (required)
	+ cargo (required)
	+ salario (required)
* Response:
	+ status: true/false
	+ msg: success/error message
	+ codigo: 002 (success) or 001 (error)
	+ dados: created Funcionario data

### GET /Funcionario

* Retrieve all Funcionarios
* Response:
	+ status: true/false
	+ msg: success/error message
	+ codigo: 003 (success) or 004 (error)
	+ dados: array of Funcionario data

### GET /Funcionario/:id

* Retrieve a Funcionario by ID
* Request Params:
	+ id (required)
* Response:
	+ status: true/false
	+ msg: success/error message
	+ codigo: 003 (success) or 004 (error)
	+ dados: Funcionario data

### PUT /Funcionario

* Update a Funcionario
* Request Body:
	+ id (required)
	+ nome (required)
	+ cargo (required)
	+ salario (required)
* Response:
	+ status: true/false
	+ msg: success/error message
	+ codigo: 002 (success) or 010 (error)
	+ dados: updated Funcionario data

### DELETE /Funcionario/:id

* Delete a Funcionario by ID
* Request Params:
	+ id (required)
* Response:
	+ status: true/false
	+ msg: success/error message
	+ codigo: 008 (success) or 009 (error)
	+ dados: deleted Funcionario ID