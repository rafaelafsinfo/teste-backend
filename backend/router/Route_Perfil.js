module.exports = function(app,banco){
    const Perfil = require('../model/Perfil');

    app.post('/Perfil',(request,response) =>{
        console.log("rota => POST: /Perfil");
        const funcionario_id = request.body.funcionario_id
        const idade = request.body.idade
        const endereco = request.body.endereco
        const telefone = request.body.telefone

        if(funcionario_id == ""){
            const resposta={
                status: true,
                msg: 'o id do usuario nome não pode ser vazio',
                codigo: '001',
                dados: "{}"
            }
            response.status(200).send(resposta);
        }else if(idade == ""){
            const resposta={
                status: true,
                msg: 'o nome de usuario não pode ser vazio',
                codigo: '001',
                dados: "{}"
            }
            response.status(200).send(resposta);
        }else if(endereco == ""){
            const resposta={
                status: true,
                msg: 'o produto não pode ser vazio',
                codigo: '001',
                dados: "{}"
            }
            response.status(200).send(resposta);
        }else if(telefone == ""){
            const resposta={
                status: true,
                msg: 'a data não pode ser vazio',
                codigo: '001',
                dados: "{}"
            }
            response.status(200).send(resposta);
        }else{
            const perfil = new Perfil(banco)
            
            perfil.setIdFuncionario(funcionario_id)
            perfil.setIdade(idade)
            perfil.setEndereco(endereco)
            perfil.setTelefone(telefone)
            

            perfil.create().then((resultadosBanco) => {
                const resposta = {
                    status: true,
                    msg: 'Executado com sucesso',
                    codigo: '002',
                    dados: {
                        funcionario_id: perfil.getIdFuncionario(),
                        idade: perfil.getIdade(),
                        endereco: perfil.getEndereco(),
                        telefone: perfil.getTelefone()
                    }
                }
                console.log(resultadosBanco)
                response.status(200).send(resposta)
            }).catch((erro) => {
                console.error('Error retrieving users: ',erro)
            })
        }

    })

    app.get('/Perfil',(request,response) => {
        const perfil = new Perfil(banco)
        perfil.read().then((resultadosBanco) => {
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
    app.get('/Perfil/:id',(request,response) => {
        const perfil = new Perfil(banco)
        const id = request.params.id
        perfil.setId(id)
        perfil.read(id).then((resultadosBanco) => {
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
    app.put('/Perfil',(request,response) => {
        const id = request.body.id
        const funcionario_id = request.body.funcionario_id
        const idade = request.body.idade
        const endereco = request.body.endereco
        const telefone = request.body.telefone

        if(funcionario_id == ""){
            const resposta={
                status: true,
                msg: 'o id do usuario nome não pode ser vazio',
                codigo: '001',
                dados: "{}"
            }
            response.status(200).send(resposta);
        }else if(idade == ""){
            const resposta={
                status: true,
                msg: 'o nome de usuario não pode ser vazio',
                codigo: '001',
                dados: "{}"
            }
            response.status(200).send(resposta);
        }else if(endereco == ""){
            const resposta={
                status: true,
                msg: 'o produto não pode ser vazio',
                codigo: '001',
                dados: "{}"
            }
            response.status(200).send(resposta);
        }else if(telefone == ""){
            const resposta={
                status: true,
                msg: 'a data não pode ser vazio',
                codigo: '001',
                dados: "{}"
            }
            response.status(200).send(resposta);
        }else{
            const perfil = new Perfil(banco)
            
            perfil.setId(id)
            perfil.setIdFuncionario(funcionario_id)
            perfil.setIdade(idade)
            perfil.setEndereco(endereco)
            perfil.setTelefone(telefone)

            perfil.update().then((resultadosBanco) =>{
                const resposta = {
                    status: true,
                    msg: 'Executado com sucesso',
                    codigo: '002',
                    dados: {
                        id: resultadosBanco.id,
                        id_funcionario: perfil.getIdFuncionario(),
                        idade: perfil.getIdade(),
                        endereco: perfil.getEndereco(),
                        telefone: perfil.getTelefone()
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

    app.delete('/Perfil/:id', (request,response) => {
        const id = request.params.id
        const perfil = new Perfil(banco)
        perfil.setId(id)
        perfil.delete().then((resultadosBanco) =>{
            const resposta = {
                status: true,
                msg: 'Excluido com sucesso',
                codigo: '008',
                dados: {
                  id: perfil.getId(),
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