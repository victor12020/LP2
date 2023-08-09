const leia=require("prompt-sync")();

let matricula = []
matricula[0] = "M01";
matricula[1] = "M02";
matricula[2] = "M03";
matricula[3] = "M04";

let nota = [0,0,0,0]
let auxmat;

let nome = ["Marcos","Paulo","Pedro","Maria"]

console.log("MATRICULA\tNOME\tNOTA");

for(i=0;i<matricula.length;i++){
    console.log(matricula[i]+"\t\t"+nome[i]+"\t"+nota[i]);
}

auxmat=leia("Digite a matricula do aluno que deseja cadastrar a nota : ").toUpperCase()
console.log(auxmat)