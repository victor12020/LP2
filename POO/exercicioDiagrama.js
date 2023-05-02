class Pessoa{
    constructor(cpf,nome,anoNascimento){
        this.cpf=cpf;
        this.nome=nome;
        this.anoNascimento = anoNascimento
    }

    mostraIdade(){
        console.log("A idade é "+(2023-this.anoNascimento))
    }
}

class Cliente extends Pessoa {
    constructor(cpf, id){
    super(cpf);
    this.id = id
    }
    mostraNome(){
    console.log("O nome é "+this.nome)
    }
   }

//programa principal
let cliente1 = new Pessoa("111.222.333-44","Marcos",1974)
console.log(cliente1)
console.log(cliente1.nome)
cliente1.mostraIdade()

let cliente2 = new Cliente("111.222.33-55",1)
cliente2.anoNascimento = 2000
cliente2.nome = "Epaminondas"
//console.log(cliente2)
cliente2.mostraNome()
console.log(cliente2.cpf)
cliente2.mostraIdade()


