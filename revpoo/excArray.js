const leia= require('prompt-sync')();
let nome=['','','',''];
let pontos=[0,0,0,0];
let boletim="";
for(let i=0;i<nome.length; i++){
    nome[i]=leia("Digite o nome do aluno : ");
    console.log(nome[i]);
    pontos[i]=parseInt(leia("Digite a nota : "));
}
console.log("\n")
for(let i=0;i<nome.length; i++){
    if(pontos[i]<5){
        boletim="REC";
    }else{
        boletim="APROVADO";
    }
    console.log(nome[i]+'\t'+pontos[i]+'\t'+boletim)
}
