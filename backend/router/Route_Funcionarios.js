module.exports = function(app,banco){
    const Funcionario = require('../model/Funcionario')

    app.post('/Funcionario',(request,response) =>{
        console.log("rota => POST: /Funcionario");
        const nome = request.body.nome
        const cargo = request.body.cargo
        const salario = request.body.salario

        if(nome == ""){
            const resposta={
                status: true,
                msg: 'o primeiro nome não pode ser vazio',
                codigo: '001',
                dados: "{}"
            }
            response.status(200).send(resposta);
        }else if(cargo == ""){
            const resposta={
                status: true,
                msg: 'o nome de usuario não pode ser vazio',
                codigo: '001',
                dados: "{}"
            }
            response.status(200).send(resposta);
        }else if(salario == null){
            const resposta={
                status: true,
                msg: 'o email não pode ser vazio',
                codigo: '001',
                dados: "{}"
            }
            response.status(200).send(resposta);
        }else{
            const funcionario = new Funcionario(banco)
            funcionario.setNome(nome)
            funcionario.setCargo(cargo)
            funcionario.setSalario(salario)
            

            funcionario.create().then((resultadosBanco) => {
                const resposta = {
                    status: true,
                    msg: 'Executado com sucesso',
                    codigo: '002',
                    dados: {
                        nome: funcionario.getNome(),
                        cargo: funcionario.getCargo(),
                        salario: funcionario.getSalario(),
                        
                    }
                }
                console.log(resultadosBanco)
                response.status(200).send(resposta)
            }).catch((erro) => {
                console.error('Error retrieving users: ',erro)
            })
        }

    })

    app.get('/Funcionario',(request,response) => {
        const funcionario = new Funcionario(banco)
        funcionario.read().then((resultadosBanco) => {
            const resposta = {
                status: true,
                msg: 'Executado com sucesso',
                dados: resultadosBanco,
                codigo: '003'
            }
            response.status(200).send(resposta)
        }).catch((erro) => {
            const resposta = {
                status: false,
                codigo: '004',
                msg: 'erro ao executar',
                dados: erro
              }
              console.error(erro)
              response.status(200).send(resposta)
        })
    })
    app.get('/Funcionario/:id',(request,response) => {
        const funcionario = new Funcionario(banco)
        const id = request.params.id
        funcionario.setId(id)
        funcionario.read(id).then((resultadosBanco) => {
            const resposta = {
                status: true,
                msg: 'Executado com sucesso',
                dados: resultadosBanco,
                codigo: '003'
            }
            response.status(200).send(resposta)
        }).catch((erro) => {
            const resposta = {
                status: false,
                codigo: '004',
                msg: 'erro ao executar',
                dados: erro
              }
              console.error(erro)
              response.status(200).send(resposta)
        })
    })
    
    app.put('/Funcionario',(request,response) => {
        const id = request.body.id
        const nome = request.body.nome
        const cargo = request.body.cargo
        const salario = request.body.salario

        if(nome == ""){
            const resposta={
                status: true,
                msg: 'o primeiro nome não pode ser vazio',
                codigo: '001',
                dados: "{}"
            }
            response.status(200).send(resposta);
        }else if(cargo == ""){
            const resposta={
                status: true,
                msg: 'o nome de usuario não pode ser vazio',
                codigo: '001',
                dados: "{}"
            }
            response.status(200).send(resposta);
        }else if(salario == null){
            const resposta={
                status: true,
                msg: 'o email não pode ser vazio',
                codigo: '001',
                dados: "{}"
            }
            response.status(200).send(resposta);
        }else if(id == null){
            const resposta={
                status: true,
                msg: 'o email não pode ser vazio',
                codigo: '001',
                dados: "{}"
            }
            response.status(200).send(resposta);
        }else{
            const funcionario = new Funcionario(banco)
            funcionario.setId(id)
            funcionario.setNome(nome)
            funcionario.setCargo(cargo)
            funcionario.setSalario(salario)

            funcionario.update().then((resultadosBanco) =>{
                const resposta = {
                    status: true,
                    msg: 'Executado com sucesso',
                    codigo: '002',
                    dados: {
                        id: resultadosBanco.id,
                        p_nome: funcionario.getNome(),
                        sobrenome: funcionario.getCargo(),
                        username: funcionario.getSalario()
                    },
                }
                response.status(200).send(resposta)
            }).catch((erro) =>{
                const resposta = {
                    status: false,
                    msg: 'erro ao executar',
                    codigo: '010',
                    dados: erro,
                  }
                  console.error(erro)
                  response.status(200).send(resposta);
            })
        }
    })

    app.delete('/Funcionario/:id', (request,response) => {
        const id = request.params.id
        const funcionario = new Funcionario(banco)
        funcionario.setId(id)
        funcionario.delete().then((resultadosBanco) =>{
            const resposta = {
                status: true,
                msg: 'Excluido com sucesso',
                codigo: '008',
                dados: {
                  id: funcionario.getId(),
                },
              }
              response.status(200).send(resposta)
        }).catch((erro) => {
            const resposta = {
                status: false,
                msg: 'erro ao executar',
                codigo: '009',
                dados: erro,
               }
            console.error(erro)
            response.status(200).send(resposta)
        })
    })
}