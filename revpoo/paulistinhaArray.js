const leia= require('prompt-sync')();
//arrays ou vetores
let times=['SFC','SPFC','SCCP','SEP'];
let pontos=[0,0,0,0];
for(let i=0;i<times.length; i++){
    console.log(equipes[i]);
    pontos[i]=parseInt(leia("Digite quantos pontos : "));
}

console.log("TABELA");
console.log("TIME\tPONTOS");
for(let i=0;i<times.length;i++){
    console.log(equipes[i]+'\t'+times[i])
}