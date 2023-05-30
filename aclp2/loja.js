class Produto{
    constructor(id,descricao,ativo,estoque,preco,quantidade,marca){
        this.id=id;
        this.descricao=descricao;
        this.ativo=ativo;
        this.estoque=estoque;
        this.preco=preco;
        this.quantidade=quantidade;
        this.marca=marca;
    }
    ativar(){
        this.ativo=true;
        console.log("O produto foi ativado!");
    }
    retirarEstoque(valor){
        if(this.ativo){
            if(valor<0){
                console.log("Impossivel realizar, valor negativo...")
            }else if(valor==0){
                console.log("Impossivel realizar, produto indisponivel...")
            }else if( valor>this.estoque){
                console.log("Impossivel realizar, quantidade não disponivel...")
            }else{
                this.estoque -= valor
            }
        }else{
            console.log("Conta Inativa.")
        }
    }
    incluirEstoque(valor){
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
console.log("Sérgio Construções.");
console.log("Pau pra toda obra.");
let opcao=leia("Gostaria de fazer compras? S/N \n");
do{
    if(opcao=="S"){
        console.log("Sérgio Construções.");
        console.log("Pau pra toda obra.");
        console.log("Cadastro incial do produto \n")
        let descricao=leia("Digite a descrição do Produto: ");
        let preco=parseFloat(leia("Digite o preco do produto :"));
        let quantidade=leia("Digite a quantidade por unidade :");
        let marca=leia("Digite a marca do produto :");
        let produto= new Produto(1,descricao,false,10,preco,quantidade,marca);
        produto.ativar();
        for(let i=1; i<=6; i++){
            console.log("Venda"+i);
            console.log("Prduto");
            console.log(descricao);
            console.log(produto.estoque);
            valor=parseInt(leia("Quantos deseja comprar?"));
            produto.retirarEstoque(valor);
            let pq=preco*valor;
            console.log("Valor a pagar :"+pq);
        }
        console.log("Quantidade final do estoque :"+produto.estoque)
        let q=leia("Gostaria de estocar? S/N \n");
        if(q=="S"){
            valor=parseInt(leia("Quanto gostaria de estocar? "));
            if((produto.estoque+valor)>10){
                console.log("O valor maximo é 10")
            }else{
            produto.incluirEstoque(valor);
            }
            console.log("Quantidade final do estoque :"+produto.estoque)
        }
        opcao=leia("Gostaria de continuar? S/N \n")
    }else if(opcao=="N"){
        console.log("Até breve!")
    }
}while(opcao != "N")