class Pessoa{
    constructor(cpf,nome,anoNascimento){
        this.cpf=cpf;
        this.nome=nome;
        this.anoNascimento = anoNascimento
    }

    mostraIdade(){
        console.log(2023-this.anoNascimento)
    }
}
//programa principal
let cliente1 = new Pessoa("111.222.333-44","Marcos",1974)
console.log(cliente1)
cliente1.mostraIdade()
console.log(cliente1.nome)