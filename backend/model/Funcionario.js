module.exports = class funcionario {
    constructor(banco){
        this._banco = banco;
        this._id = null;
        this._nome = null;
        this._cargo = null;
        this._salario = null;

    }

    async create() {
        
        const operacaoAssincrona = new Promise((resolve, reject) => {
            const nome = this.getNome();
            const cargo = this.getCargo()
            const salario = this.getSalario()


            const parametros = [nome,cargo,salario];

            let sql = "insert into funcionarios.funcionarios (`nome`, `cargo`, `salario`) VALUES (?,?,?);";
            this._banco.query(sql, parametros, function (error, result) {
                if (error) {   
                    console.log("reject => funcionario.create(): " + JSON.stringify(error))
                    reject(error);
                } else {
                    console.log("resolve => funcionario.create(): " + JSON.stringify(result))
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
                SQL = "SELECT id,nome,cargo,salario FROM funcionarios ORDER BY id";
            } if (id != null){
                SQL = "SELECT id,nome,cargo,salario FROM funcionarios where id=? ORDER BY id;";
            }

            this._banco.query(SQL, params, function (error, result) {
                if (error) {
                    console.log("reject => funcionario.create(): " + JSON.stringify(error))
                    reject(error);
                } else {
                    console.log("resolve => funcionario.create(): " + JSON.stringify(result))
                    resolve(result);
                }
            });
        });

        return operacaoAssincrona;
    }

    async update() {
        const operacaoAssincrona = new Promise((resolve, reject) => {
            const id = this.getId() 
            const nome = this.getNome();
            const cargo = this.getCargo()
            const salario = this.getSalario()


            const parametros = [nome,cargo,salario,id];

            const sql = "update funcionarios set nome=?,cargo=?,salario=? where id = ?";

            this._banco.query(sql, parametros, function (error, result) {
                if (error) {
                    console.log("reject => funcionario.update(): " + JSON.stringify(error))
                    reject(error);
                } else {
                    console.log("resolve => funcionario.update(): " + JSON.stringify(result))
                    resolve(result);
                }
            });
        });

        return operacaoAssincrona;
    }

    async delete() {
        const operacaoAssincrona = new Promise((resolve, reject) => {

            const id = this.getId();
            let parametros = [id];
            let sql = "delete from funcionarios where id = ?";
            this._banco.query(sql, parametros, function (error, result) {
                if (error) {
                    console.log("reject => funcionario.delete(): " + JSON.stringify(error));
                    reject(error);
                } else {
                    console.log("resolve => funcionario.delete(): " + JSON.stringify(result))
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
    setNome(nome) {
        this._nome = nome;
    }
    getNome() {
        return this._nome;
    }
    setCargo(cargo) {
        this._cargo = cargo;
    }
    getCargo() {
        return this._cargo;
    }
    setSalario(salario) {
        this._salario = salario;
    }
    getSalario() {
        return this._salario;
    }
    
    
}