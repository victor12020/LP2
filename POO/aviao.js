let aviao={
    modelo: "boing 717",
    capacidade: 100,
    Ligado: false,
    Ligar: function(){
        this.Ligado=true
        console.log("Avião ligado...")
    },
    desligar: function(){
        if(this.velocidade==0){
            this.Ligado=false
            console.log("Avião desligado.")
        }
    },
    velocidade: 0,
    velocidadeMaxima: 800,
    acelerar: function(){
        console.log("Velocidade atual :"+this.velocidade)
        if(this.Ligado && this.velocidade<this.velocidadeMaxima){
            this.velocidade+=10
            console.log("acelerando...")
        }
    },
    desacelerar: function(){
        console.log("Velocidade atual :"+this.velocidade)
        if(this.velocidade>0){
            this.velocidade-=10
            console.log("desacelerando...")
        }
    },
    decolar: function(){
        if(this.velocidade>=200){
            console.log("decolando...")
        }
    },
    pousar: function(){
        if(this.velocidade<=200){
            console.log("pousando...")
        }
    }
}
aviao.Ligar();
for(let x=1; x<=20; x++){
    aviao.acelerar();
}
console.log("Velocidade atual :"+aviao.velocidade);

aviao.decolar();

for(let x=1; x<=30; x++){
    aviao.acelerar();
}
console.log("Velocidade atual :"+aviao.velocidade);

for(let x=1; x<=30; x++){
    aviao.desacelerar();
}
console.log("Velocidade atual :"+aviao.velocidade);

aviao.pousar();
for(let x=1; x<=20; x++){
    aviao.desacelerar();
}
console.log("Velocidade atual :"+aviao.velocidade);

aviao.desligar();


