const leia= require('prompt-sync')();

let matricula = ["M1","M2","M3","M4"];
let alunos = ["Victor","Jorge","Luisa","João"];
let notas = [0,0,0,0];
let situação=[];

console.log("\nMatricula"+'\t|'+"\tAluno"+'\t|'+"\tNota");
console.log("------------------------------------------------")
for(let i=0; i<matricula.length; i++){
    console.log(matricula[i]+'\t|'+'\t'+alunos[i]+'\t|'+'\t'+notas[i]);
}
console.log("------------------------------------------------")
console.log("\nDigitação de valores");
for(let i=0; i<matricula.length; i++){
    console.log(matricula[i]+'\t|'+'\t'+alunos[i]);
    notas[i]=leia("Digite a nota :");
    console.log("\n");
}

console.log("\nMatricula"+'\t|'+"\tAluno"+'\t|'+"\tNota");
console.log("------------------------------------------------")
for(let i=0; i<matricula.length; i++){
    if(notas[i]>=5){
        situação='Aprovado';
    }else{
        situação='REC';
    }
    console.log(matricula[i]+'\t|'+'\t'+alunos[i]+'\t|'+'\t'+notas[i]+'\t|'+'\t'+situação[i]);
}
console.log("------------------------------------------------"+"\n")
console.log("Alteração de dados");
let alt = leia("Digite a matricula do aluno que deseja mudar a nota : ");
for(let i=0; i<matricula.length; i++){
    if(alt == matricula[i]){
        console.log("Nota do aluno antes de alterar : "+notas[i]);
        notas[i]=leia("Digite a nova nota do Aluno : ");
        console.log(matricula[i]+'\t|'+'\t'+alunos[i]+'\t|'+'\t'+notas[i]);
    }
}

