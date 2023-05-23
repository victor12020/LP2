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
    constructor(cpf,aniversario,numero,saldo,ativo){
        super(cpf,numero,saldo,ativo);
        this.aniversario=aniversario;
    }
    
    correcao(data){
        if(data==this.aniversario){
            this.saldo=(this.saldo*0.05)+this.saldo
            console.log("Após a correção o saldo ficou : "+this.saldo)
        } else{
            console.log("Desculpa mas não podemos fazer a correção porque hoje não é o seu aniversário.");
        }
    }
}
class ContaCorrente extends Conta {
    constructor(numero, cpf, saldo, ativo){ 
    super(numero, cpf, saldo, ativo);
    this.numChequesSolicitados = 0;
    }
    
    solicitarCheques(){
        if(this.numChequesSolicitados < 3){
            this.saldo -= 30.00; // Cada cheque solicitado debita R$30,00
            this.numChequesSolicitados++;
            console.log("Seu cheque foi solicitado com sucesso.");
    
        } else {
           console.log("Você atingiu o limite maximo de cheques possiveis.")
        }
    
    }
}
class especial extends Conta{
    constructor(cpf,numero,limite,saldo,ativo){
        super(numero,cpf,saldo,ativo);
        this.limite = limite
    }
}
const leia = require("prompt-sync")();
console.log("Bem vindo ao banco SALTBANK");
console.log("Dê um salto na sua vida!")
let numero = parseInt(leia("Digite o numero da conta : "));
let cpf = leia("Digite o cpf da conta : ");
let op="";
let valor=0;
console.log("SALTBANK");
console.log("Dê um salto na sua vida!")
let conta= parseInt(leia("Escolha qual conta deseja usar:\n 1- Poupança \n 2- Corrente \n 3- Especial \n"));
if(conta==1){
    let aniversario=parseInt(leia("Gostariamos de saber a sua data de aniversario : "));
    let C1= new Poupanca(cpf,aniversario,numero,0,false);
    C1.ativar();
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
    let correcao= leia("Gostaria de fazer a correção do seu saldo? sim/não \n")
    if(correcao=="sim"){
        let data=leia("Qual a data de hoje? ")
        C1.correcao(data)
    } else if(correcao=="não"){
        console.log("Que pena, deixa pra proxima então.")
    } else {
        console.log("desculpa não entendi o que quis dizer.")
    }
    console.log("Saldo final da conta "+C1.saldo)
} else if(conta==2){
    let C1 = new ContaCorrente(cpf,numero,0,false);
    C1.ativar();
    for(let x = 1; x <= 10; x++) {
        console.log("Conta Corrente");
        console.log("Saldo atual: R$ " + C1.saldo.toFixed(2));
        op = leia("Movimento - D - débito ou C - crédito: ");
        valor = parseFloat(leia("Valor do movimento: R$ "));
        if (op == "D") {
            C1.debitar(valor);
        } else if (op == "C") {
            C1.creditar(valor);
        }
        const continuar = leia("\nContinuar? (S/N): ");
        if (continuar != "S") {
            const solicitarCheque = leia("Você deseja solicitar um cheque? (S/N): ");
        if (solicitarCheque == "S") {
            C1.solicitarCheque();
        }
            break;
        }
    }
    console.log("\nSaldo final da conta: R$ " + ContaCorrente.saldo.toFixed(2))
} else if(conta==3){
    C1 = new especial(cpf,numero,1000,0,false);
    C1.ativar();
    for (let x=1; x<=10; x++) {
        op = leia("Qual operação você deseja efetuar ? Digite C para Credito e D para Debito ")
        if (op=="C") {
            valor = parseInt(leia("Digite o valor para crédito: "))
            C1.creditar(valor)
        } else if (op = "D") {
            valor = parseInt(leia("Digite o valor para débito: "))
            C1.debitar(valor)
        }
        console.log("Saldo atual da conta : "+C1.saldo)
    }
    C1.debitar()
    for(C1.saldo==0;valor<C1.limite;){
        if (C1.saldo<=0 && valor<=C1.limite){
                    C1.limite -= valor
                    console.log("Limite atual ",C1.limite)
            }
        else if (C1.saldo<=0 && valor>C1.limite){
                    console.log("Não foi possível realizar. Fora do limite.")
                }
    }
}