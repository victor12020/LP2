const leia= require('prompt-sync')();
let num=0;
num=parseInt(leia("Digite um numero entre 5 e 9 : "));
if(num>9 || num<5){
    console.log("O numero colocado não é aceito.");
}else{
    console.log("O numero é : "+num);
    while(num<100){
        num=num*3;
        console.log("O numero é : "+num);
    }
}

