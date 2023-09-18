const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/escola", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error :"));

db.once("open", () => {
  console.log("Estamos conectados ao mongoDB");
});

const alunoSchema = new mongoose.Schema({
  matricula: String,
  nome: String,
  idade: Number,
  turma: String,
});

const alunos = mongoose.model("Alunos", alunoSchema);

const paulo = new alunos({
  matricula: "rm15200",
  nome: "Paulo",
  idade: 15,
  turma: "2MIB",
});

paulo.save();

const victor = new alunos({
  matricula: "rm15279",
  nome: "Victor",
  idade: 15,
  turma: "2MIB",
});

victor.save();
