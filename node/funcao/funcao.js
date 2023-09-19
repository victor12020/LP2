function escreverNoConsole() {
  console.log("Escrevendo na tela usando funçao");
}

escreverNoConsole();

const textoNoConsole = function () {
  console.log("Escrevendo na tela usando funçao");
};

textoNoConsole();

const textoPorParametro = function (texto) {
  console.log(texto);
};

textoPorParametro("Terceiro exemplo, texto por parametro");

const textoUsandoArrow = (texto) => {
  console.log(texto);
};
textoUsandoArrow("Quarto exemplo, texto por arrow function");
