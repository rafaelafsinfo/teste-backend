module.exports = class perfil {
    constructor(banco){
        this._banco = banco;
        this._id = null;
        this._id_funcionario = null;
        this._idade = null;
        this._endereco = null
        this._telefone = null
        

    }

    async create() {
        
        const operacaoAssincrona = new Promise((resolve, reject) => {
            const idFuncionario = this.getIdFuncionario()
            const idade = this.getIdade()
            const endereco = this.getEndereco()
            const telefone = this.getTelefone()
            


            const parametros = [idFuncionario,idade,endereco,telefone];

            let sql = "insert into funcionarios.perfil (`funcionario_id`,`idade`,`endereco`,`telefone`) values (?,?,?,?);";
            this._banco.query(sql, parametros, function (error, result) {
                if (error) {   
                    console.log("reject => perfil.create(): " + JSON.stringify(error))
                    reject(error);
                } else {
                    console.log("resolve => perfil.create(): " + JSON.stringify(result))
                    resolve(result);
                }
            });
        });
        return operacaoAssincrona;
    }
    async read() {
        
        const operacaoAssincrona = new Promise((resolve, reject) => {
            
            const id = this.getId();
            let params = [id]
            let SQL = "";

            
            if (id == null) {
                SQL = "SELECT f.id as id_funcionario, f.nome, f.cargo,f.salario,p.id, p.idade,p.endereco,p.telefone FROM funcionarios f INNER JOIN perfil p ON f.id = p.funcionario_id ORDER BY p.id";
            } if (id != null){
                SQL = "SELECT f.id as funcionario_id, f.nome, f.cargo,f.salario,p.id, p.idade,p.endereco,p.telefone FROM funcionarios f INNER JOIN perfil p ON f.id = p.funcionario_id where f.id=? ORDER BY p.id;";
            }

            this._banco.query(SQL, params, function (error, result) {
                if (error) {
                    console.log("reject => perfil.Read(): " + JSON.stringify(error))
                    reject(error);
                } else {
                    console.log("resolve => perfil.Read(): " + JSON.stringify(result))
                    resolve(result);
                }
            });
        });

        return operacaoAssincrona;
    }

    async update() {
        const operacaoAssincrona = new Promise((resolve, reject) => {
            const id = this.getId() 
            const idFuncionario = this.getIdFuncionario()
            const idade = this.getIdade()
            const endereco = this.getEndereco()
            const telefone = this.getTelefone()


            const parametros = [idFuncionario,idade,endereco,telefone,id];

            const sql = "update perfil set funcionario_id=?,idade=?,endereco=?,telefone=? where id = ?";

            this._banco.query(sql, parametros, function (error, result) {
                if (error) {
                    console.log("reject => perfil.update(): " + JSON.stringify(error))
                    reject(error);
                } else {
                    console.log("resolve => perfil.update(): " + JSON.stringify(result))
                    resolve(result);
                }
            });
        });

        return operacaoAssincrona;
    }

    async delete() {
        //cria uma promise que retornará dados referentes a execução de 
        //uma instrução sql no banco.
        const operacaoAssincrona = new Promise((resolve, reject) => {

            const id = this.getId();
            let parametros = [id];
            let sql = "delete from perfil where id = ?"; 
            this._banco.query(sql, parametros, function (error, result) {
                if (error) {
                    console.log("reject => perfil.delete(): " + JSON.stringify(error));
                    reject(error);
                } else {
                    console.log("resolve => perfil.delete(): " + JSON.stringify(result))
                    resolve(result);
                }
            });
        });
        return operacaoAssincrona;
    }

    setId(id) {
        this._id = id
    }
    getId() {
        return this._id
    }
    setIdFuncionario(idFuncionario){
        this._id_funcionario = idFuncionario
    }
    getIdFuncionario(){
        return this._id_funcionario
    }
    setIdade(idade){
        this._idade = idade
    }
    getIdade(){
        return this._idade
    }
    setEndereco(endereco){
        this._endereco = endereco
    }
    getEndereco(){
        return this._endereco
    }
    setTelefone(telefone){
        this._telefone = telefone
    }
    getTelefone(){
        return this._telefone
    }
    

}