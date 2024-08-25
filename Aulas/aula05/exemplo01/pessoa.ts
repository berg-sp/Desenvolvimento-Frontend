class Pessoa {
    private _nome: string
    private _idade: number

    Constructor(nome:string, idade: number) {
        this._nome = nome
        this._idade = idade
    }

    public get idade() {
        return this._idade;
    }

    public set idade(idade: number) {
        this._idade = idade;
    }
}

let pessoa = new Pessoa('Fulano', 10)
pessoa.idade = 32;
console.log(pessoa.idade)
