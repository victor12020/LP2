const leia=require("prompt-sync")();

let opcao;
let opcao2;
let opcaoVetor;
let numDoacao;
let total;

let cod = ["COD01","COD02","COD03","COD04","COD05","COD06","COD07","COD08","COD09","COD10"];
let servico = ["SER01","SER02","SER03","SER04","SER05","SER06","SER07","SER08","SER09","SER10"];
let valorDoacao = [10.00, 20.00, 25.50, 30.00, 32.00, 40.00, 50.000, 42.00, 34.00, 13.00]
let movimento = [0,0,0,0,0,0,0,0,0,0]
let varserv = ["","","","","","","","","",""]
let repeticao = [0,0,0,0,0,0,0,0,0,0]

while(opcao !="2"){
    opcao="";
    console.log("Ong Sorriso Solidario\n\n")
    console.log("1 - Opcoes\n2- Sair")
    opcao=parseInt(leia("Digite o numero da opcao desejada: "))
    if(opcao=="1"){
        console.log("Esses sao os servicos que atendemos:\n");
        for(let i=0; i<=cod.length-1; i++){
            console.log(cod[i]+" - "+servico[i]);                
        }
        opcao2="";
        while(opcao2!="N"){
            console.log("\nDeseja doar para alguma causa?\nS - Sim\nN- Nao")
            opcao2=leia("").toUpperCase()
            if(opcao2=="N"){
                console.log("Entendemos sua desisao te experamos na proxima.")
            }
            if(opcao2=="S"){
                total=0;
                console.log("Quantos servicos deseja doar? (maximo : 10) :")
                numDoacao=parseInt(leia(""))
                for(let x=0; x<=numDoacao-1; x++){
                opcaoVetor=parseInt(leia("Digite o codigo do servico que deseja doar: "))-1;
                movimento[x]=valorDoacao[opcaoVetor];
                varserv[x]=servico[opcaoVetor]
                repeticao[opcaoVetor]++;
                }
                console.log("CARRINHO")
                for(let y=0; y<=movimento.length-1; y++){
                    console.log(repeticao[y]+" - "+varserv[y]+" - "+movimento[y]);
                    total += movimento[y];
                }
                console.log("O total da doacao ficou : "+"$"+total+" reais");
            }
        }
    }
}
console.log("Fim do programa.")

