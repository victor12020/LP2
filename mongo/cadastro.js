const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/exemplo', {useNewUrlParser : true, useUnifiedTopology: true, serverSelectionTimeoutMS : 10000});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', () => {
    console.log("Estamos logados no mongodb");
});

const produtosSchema = mongoose.Schema({
    descricao: String,
    ano: Number,
    valor: Number,
    estoque: Number
});

const produtos = mongoose.model("Livros", produtosSchema);

const aCasaDe13Andares = new produtos({
    descricao: 'Duas pessoas vivendo em uma casa na arvore de 13 andares',
    ano: 2016,
    valor: 24.50,
    estoque: 20
});

const aCasaDe26Andares = new produtos({
    descricao: 'Duas pessoas vivendo em uma casa na arvore de 26 andares',
    ano: 2016,
    valor: 30.50,
    estoque: 10
});

console.log(aCasaDe13Andares.descricao);
console.log(aCasaDe13Andares.ano);
console.log(aCasaDe13Andares.valor);
console.log(aCasaDe13Andares.estoque);
aCasaDe13Andares.save();

console.log('\n'+aCasaDe26Andares.descricao);
console.log(aCasaDe26Andares.ano);
console.log(aCasaDe26Andares.valor);
console.log(aCasaDe26Andares.estoque);
aCasaDe26Andares.save();
