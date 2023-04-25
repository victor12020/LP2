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
            console.log("Avião desliga.")
        }
    },
    velocidade: 0,
    velocidadeMaxima: 1000,
    acelerar: function(){
        console.log("Velocidade atual :"+this.velocidade)
        if(this.Ligado && this.velocidade<this.velocidadeMaxima){
            this.velocidade+=10
        }
        console.log("acelerando...")
    },
    desacelerar: function(){
        if(this.velocidade>0){
            this.velocidade-=10
            console.log("desacelerando...")
        }
    }
}
aviao.Ligar();
for(let x=1; x<=20; x++){
    aviao.acelerar();
    console.log("Velocidade Atual :"+aviao.velocidade)
}
aviao.





