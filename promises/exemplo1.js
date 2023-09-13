function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(frase)
        }, segundos = 1000)
    });
}

falarDepoisDe(4,"Teste de promises no 2mib")
.then(frase=> frase.concat("Programando em vscode!!!"))
.then()