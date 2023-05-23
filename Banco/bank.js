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
    constructor(cpf,diaAniversarioPoupanca,numero,saldo,ativo){
        super(cpf,numero,saldo,ativo);
        this.diaAniversarioPoupanca=diaAniversarioPoupanca;
    }
    
    correcao(data){
        if(data==this.diaAniversarioPoupanca){
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
    debito(limite,saldo,valor){
        for(saldo<=0;valor<=limite;){
        if (saldo<=0 && valor<=limite){
                    limite -= valor
                    console.log("Limite atual ",limite)
            }
        else if (saldo<=0 && valor>limite){
                    console.log("Não foi possível realizar. Fora do limite.")
                }
            }
    }
    mostrarLimite(){
    console.log('Limite disponível:', this.limite)
    }
}
// programa principal
const leia = require("prompt-sync")();
let opcao=0;

// menu
console.log("Bem vindo ao banco SALTBANK");
console.log("Dê um salto na sua vida!")
let numero = parseInt(leia("Digite o numero da conta : "));
let cpf = leia("Digite o cpf da conta : ");
let op="";
let valor=0;
do{
    console.log("")
    console.log("1- Poupaça")
    console.log("2- Corrente")
    console.log("3- Especial")
    console.log("4- Sair")
    opcao = leia("Digite o numero da sua opção : ")
    
    // Contas
    if(opcao==1){
        console.log("Testando conta Poupança")
        let aniversario=parseInt(leia("Gostariamos de saber a sua data de aniversario : "));
        let C1p= new Poupanca(cpf,aniversario,numero,0,false);
        C1p.ativar();
        for(let x=1; x<=10; x++){
        op = leia("Digite D - debito ou C - credito : ");
        console.log("Saldo atual : "+C1p.saldo)
        if(op=="D"){
            valor = parseInt(leia("Digite o valor para debito : "))
            C1p.debitar(valor)
        }else if(op=="C"){
            valor = parseInt(leia("Digite o valor para creditar : "))
            C1p.creditar(valor)
        }
        console.log("Saldo atual da conta : "+C1p.saldo)
        }   
        let correcao= leia("Gostaria de fazer a correção do seu saldo? sim/não \n")
        if(correcao=="sim"){
        let data=leia("Qual a data de hoje? ")
        C1p.correcao(data)
        } else if(correcao=="não"){
        console.log("Que pena, deixa pra proxima então.")
        } else {
        console.log("desculpa não entendi o que quis dizer.")
        }
        console.log("Saldo final da conta "+C1p.saldo)
    }else if(opcao==2){
        console.log("Testando conta Corrente")
        let C1c = new ContaCorrente(cpf,numero,0,false);
        C1c.ativar();
        for(let x = 1; x <= 10; x++) {
            console.log("Conta Corrente");
            console.log("Saldo atual: R$ " + C1c.saldo.toFixed(2));
            op = leia("Movimento - D - débito ou C - crédito: ");
            valor = parseFloat(leia("Valor do movimento: R$ "));
        if (op == "D") {
            C1c.debitar(valor);
        } else if (op == "C") {
            C1c.creditar(valor);
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
    } else if(opcao="3"){

    } else if(opcao="4"){
        console.log("Saindo do programa .........")
    } else{
        console.log("Digitação invalida ........")
    }
}while(opcao != "4")
console.log("Fim de programa, volte sempre.")