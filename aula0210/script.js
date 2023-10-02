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
  nome: String,
  idade: Number,
  turma: String
});

const alunos = mongoose.model("Alunos", alunoSchema);

alunos.insertMany([
  {
    nome: "Paulo",
    idade: 16,
    turma: "Turma1",
  },
  {
    nome: "Maria",
    idade: 15,
    turma: "Turma2",
  },
  {
    nome: "Marcos",
    idade: 17,
    turma: "Turma1",
  },
]);

async function findAlunos() {
  try {
    const Alunos = await alunos.find();
    console.log("Alunos :", Alunos);
  } catch {
    console.error("Alunos não encontrados : ", error);
  }
}
findAlunos();
