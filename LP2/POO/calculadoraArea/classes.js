//classe e metodos

class Retangulo{

    constructor(altura,base){
        this.altura=altura;
        this.base=base;
    }

    mostrarArea(){
        console.log("Area do Retangulo é : "+(this.base*this.altura))
    }
}

class Triangulo{
    constructor(altura,base){
        this.altura=altura;
        this.base=base;
    }

    mostrarArea(){
        console.log("Area do Triangulo é : "+((this.base*this.altura)/2))
    }
}

//programa principal
const leia= require('prompt-sync')()
let base=leia("Digite a base : ")
let altura=leia("Digite a altura : ")
let retangulo= new Retangulo(base,altura)
retangulo.mostrarArea()
let triangulo= new Triangulo(base,altura)
triangulo.mostrarArea()
//let objeto1 = new Retangulo(5,3);
//let objeto2 = new Retangulo(4,2);
//let triangulo1=new Triangulo(5,8);

//console.log("base do objeto 1 : "+objeto1.base)

//console.log("Area do objeto 1 : "+(objeto1.base*objeto1.altura))

//objeto2.mostrarArea()
//triangulo1.mostrarArea()
