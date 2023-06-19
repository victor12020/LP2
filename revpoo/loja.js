const leia= require('prompt-sync')();

let codigos = ["P01","P02","P03","P04"];
let produtos = ["camisa","calca","saia","short"];
let precos = [0,0,0,0];

console.log("COO\tPRODUTO\tPREÇOS");
for(let i=0; i<codigos.length; i++){
    console.log(codigos[i]+'\t'+produtos[i]+'\t'+precos[1]);
}

console.log("Digitação de valores");
for(let i=0; i<codigos.length; i++){
    console.log(codigos[i]+'\t'+produtos[i]);
    precos[i]=leia("Digite o valor do produto : ");
}

console.log("COO\tPRODUTO\tPREÇOS");
for(let i=0; i<codigos.length; i++){
    console.log(codigos[i]+'\t'+produtos[i]+'\t'+precos[1]);
}

console.log("Alteração de dados");
let codigo = leia("digite o codigo do produto que deleja trocar o nome");
for(let i=0; i<codigos.length; i++){
    if(codigo == codigos[i]){
        console.log("Nome atual do produto : "+produtos[i]);
        produtos[i]=leia("Digite o novo nome do produto : ");
    }
}

