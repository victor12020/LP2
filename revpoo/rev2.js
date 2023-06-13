const leia= require('prompt-sync')();
let n1=0;
let total=0;
let maiorNumero=0;
// 1- Usar if no contador 2- Colocar o contador como -1;
let contador=0;
while(n1>=0){
    total=total+n1;
    n1=parseInt(leia("Digite um numero : "));
    if(n1>=0){
        contador++;
    }
    if(n1>maiorNumero){
        maiorNumero=n1;
    }
}
console.log("A soma de todos os numero foi : "+total)
console.log("O maior numero digitado foi : "+maiorNumero)
console.log("A quantidade de numero digitados foi : "+contador)