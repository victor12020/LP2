class Pessoa {
    constructor(cpf, nome, anoNascimento){
        this.cpf= cpf;
        this.nome= nome;
        this.anoNascimento= anoNascimento;
    }

    mostraIdade(){
        console.log(2023-this.anoNascimento);
    }
}
class Aluno extends Pessoa {
    constructor(cpf, nome, anoNascimento, matricula, notas){
        super(cpf, nome, anoNascimento);
        this.matricula= matricula;
        this.notas= notas;
    }
}
//Programa principal
const leia= require('prompt-sync')();

let p1 = new Aluno("111.222.333-44","Victor",2007,"M1",0);
let p2 = new Aluno("222.333.444-55","Jorge",2006,"M2",0);
let p3 = new Aluno("333.444.555-66","Luisa",2006,"M3",0);
let p4 = new Aluno("444.555.666-77","João",2007,"M4",0);

console.log('\nMatricula'+'\t|\t'+'Aluno'+'\t|\t'+'Nota');
console.log("------------------------------------------------");
console.log(p1.matricula+'\t|\t'+p1.nome+'\t|\t'+p1.notas);
console.log(p2.matricula+'\t|\t'+p2.nome+'\t|\t'+p2.notas);
console.log(p3.matricula+'\t|\t'+p3.nome+'\t|\t'+p3.notas);
console.log(p4.matricula+'\t|\t'+p4.nome+'\t|\t'+p4.notas);
console.log("------------------------------------------------");

console.log('\nDigitação de notas\n');
p1.notas = parseFloat(leia('Digite a nota de '+p1.nome+' : '));
console.log('\n')
p2.notas = parseFloat(leia('Digite a nota de '+p2.nome+' : '));
console.log('\n')
p3.notas = parseFloat(leia('Digite a nota de '+p3.nome+' : '));
console.log('\n')
p4.notas = parseFloat(leia('Digite a nota de '+p4.nome+' : '));
console.log('\n')

console.log('\nMatricula'+'\t|\t'+'Aluno'+'\t|\t'+'Nota');
console.log("------------------------------------------------");
console.log(p1.matricula+'\t|\t'+p1.nome+'\t|\t'+p1.notas);
console.log(p2.matricula+'\t|\t'+p2.nome+'\t|\t'+p2.notas);
console.log(p3.matricula+'\t|\t'+p3.nome+'\t|\t'+p3.notas);
console.log(p4.matricula+'\t|\t'+p4.nome+'\t|\t'+p4.notas);
console.log("------------------------------------------------");
