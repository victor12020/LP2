const fs = require('fs');

fs.readFile('/index.html',(erro, arquivo)=>{
    if(erro){
        throw erro
    }else{
        console.log(arquivo)
    }
});

var arquivo = fs.readFileSync('/index.html');
console.log(arquivo);