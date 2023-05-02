const leia= require('prompt-sync')()

let altura=leia("Digite a altura 1 : ")
let base=leia("Digite a base 1 : ")
let area=base*altura

let altura2=leia("Digite a altura 2 : ")
let base2=leia("Digite a base 2 : ")
let area2=base2*altura2

console.log("A area do retangulo 1 é : "+area)
console.log("A area do retangulo 2 é : "+area2)