const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/exemplo', {useNewUrlParser : true, useUnifiedTopology: true, serverSelectionTimeoutMS : 10000});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', () => {
    console.log("Estamos logados no mongodb");
});

const pessoaSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    profissao: String
})

const pessoa = mongoose.model("Pessoa", pessoaSchema);

const marcos = new pessoa({
    nome: 'Marcos',
    idade: 25,
    profissao: 'Programador'
});

console.log(marcos.nome+'\n'+marcos.idade+'\n'+marcos.profissao+'\n');
marcos.save();

const victor = new pessoa({
    nome: "Victor",
    idade: 15,
    profissao: 'Estudante de Programação'
});

console.log(victor.nome);
console.log(victor.idade);
console.log(victor.profissao);
victor.save();