const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/ONG", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error :"));

db.once("open", () => {
  console.log("Estamos conectados ao mongoDB");
});

const usuarioSchema = new mongoose.Schema({
  login: String,
  senha: String,
});

const Usuarios = mongoose.model("Usuarios", usuarioSchema);

Usuarios.insertMany([
  {
    login: "victor@gmail.com",
    senha: "chabrau",
  },
  {
    login: "lusia@gmail.com",
    senha: "kleberas",
  },
  {
    login: "mateus@gmail.com",
    senha: "paocombatata",
  },
]);

async function findUsuarios(){
    try {
        const usuarios = await Usuarios.find();
        console.log("Usuarios :", usuarios);
      } catch {
        console.error("Usuario não encontrados : ", error);
      }
}
findUsuarios();