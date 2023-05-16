class Conta{
    constructor(numero,cpf,saldo,ativo){
        this.numero=numero;
        this.cpf=cpf;
        this.saldo=saldo;
        this.ativo=ativo;
    }
    
    ativar(){
        this.ativo=true;
        console.log("O estado da conta foi alterado para : "+this.ativo)
    }
    debitar(valor){
        if(this.ativo){
            if(valor<0){
                console.log("Impossivel realizar, valor negativo...")
            }else if(valor==0){
                console.log("Impossivel realizar, valor zerado...")
            }else if( valor>this.saldo){
                console.log("Impossivel realizar, saldo indisponivel...")
            }else{
                this.saldo -= valor
            }
        }else{
            console.log("Conta Inativa.")
        }
    }
    creditar(valor){
        if(this.ativo){
            if(valor<0){
                console.log("Impossivel realizar, valor negativo...")
            }else if(valor==0){
                console.log("Impossivel realizar, valor zerado...")
            }else{
                this.saldo += valor
            }
        }else{
            console.log("Conta inativa.")
        }
    }
}

class Poupanca extends Conta{
    constructor(diaAniversarioPoupanca){

        this.diaAniversarioPoupanca=diaAniversarioPoupanca;
    }
    
    correcao(data){
        if(data==this.diaAniversarioPoupanca){
            this.saldo=(this.saldo*0.05)+this.saldo
            console.log("Após a correção o saldo ficou : "+this.saldo)
        }
    }
}

const leia = require("prompt-sync")();
let numero = parseInt(leia("Digite o numero da conta : "));
let cpf = leia("Digite o cpf da conta : ");
let C1= new Conta(numero,cpf,0,false);
let op="";
let valor=0;
C1.ativar()
for(let x=1; x<=10; x++){
    op = leia("Digite D - debito ou C - credito : ");
    console.log("Saldo atual : "+C1.saldo)
    if(op=="D"){
        valor = parseInt(leia("Digite o valor para debito : "))
        C1.debitar(valor)
    }else if(op=="C"){
        valor = parseInt(leia("Digite o valor para creditar : "))
        C1.creditar(valor)
    }
    console.log("Saldo atual da conta : "+C1.saldo)
}

console.log("Saldo final da conta "+C1.saldo)



