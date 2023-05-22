let pessoa={
    nome: "Victor",
    nascimento: 2007,
    mostraIdade: function(){
        console.log("Sua idade é :"+(2023-this.nascimento))
    }
}

let roblox={
    nick: "victor",
    idade: 120,
    robux: 1000,
    excluir: function(){
        console.log("Deletado com sucesso.")
    }
}

let eldenringBuild={
    build: "Marais Destroyer",
    level: 150,
    vigor: 50,
    mind: 9,
    endurance: 30,
    strengh: 62,
    dexterity: 18,
    intelligence: 7,
    faith: 8,
    arcane: 45,
    like: function(){
        console.log("Você deu like nessa build.")
    }
}

//console.log(eldenringBuild.build+"\n"+eldenringBuild.level)
//console.log("Total points :"+(eldenringBuild.dexterity+eldenringBuild.endurance+eldenringBuild.faith+eldenringBuild.intelligence+eldenringBuild.mind+eldenringBuild.strengh+eldenringBuild.vigor+eldenringBuild.arcane))
//console.log(roblox.nick.toUpperCase())

//eldenringBuild.like()

//pessoa.mostraIdade()
