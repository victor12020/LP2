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
    constructor(saldo,aniversario,ativo){
        this.aniversario=aniversario;
        this.saldo=saldo;
        this.ativo=ativo;
    }
    
    correcao(data){
        if(data==this.aniversario){
            this.saldo=(this.saldo*0.05)+this.saldo
            console.log("Após a correção o saldo ficou : "+this.saldo)
        } else{
            console.log("Desculpa mas não podemos fazer a correção porque hoje não é o seu aniversário.");
        }
    }

    ativar(){
        this.ativo=true;
        console.log("Sua conta poupança foi ativada.")
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

const leia = require("prompt-sync")();
console.log("Bem vindo ao banco SALTBANK");
console.log("Dê um salto na sua vida!")
let numero = parseInt(leia("Digite o numero da conta : "));
let cpf = leia("Digite o cpf da conta : ");
let aniversario=parseInt(leia("Gostariamos de saber a sua data de aniversario : "));
let C1= new Conta(numero,cpf,0,false);
let op="";
let valor=0;
C1.ativar()
console.log("SALTBANK");
console.log("Dê um salto na sua vida!")
let conta= parseInt(leia("Escolha qual conta deseja usar:\n 1- Poupança \n 2- Corrente \n 3- Especial \n"));
if(conta==1){
    let C1p= new Poupanca(0,aniversario,false);
    C1p.ativar();
    for(let x=1; x<=10; x++){
        op = leia("Digite D - debito ou C - credito : ");
        console.log("Saldo atual : "+C1.saldo)
        if(op=="D"){
            valor = parseInt(leia("Digite o valor para debito : "))
            C1p.debitar(valor)
        }else if(op=="C"){
            valor = parseInt(leia("Digite o valor para creditar : "))
            C1p.creditar(valor)
        }
        console.log("Saldo atual da conta : "+C1.saldo)
        let correcao= leia("Gostaria de fazer a correção do seu saldo? sim/não")
        if(correcao=="sim"){
            C1p.correcao(aniversario)
        } else if(correcao=="não"){
            console.log("Que pena, deixa pra proxima então.")
        } else {
            console.log("desculpa não entendi o que quis dizer.")
        }
    }
    
    console.log("Saldo final da conta "+C1.saldo)
}

