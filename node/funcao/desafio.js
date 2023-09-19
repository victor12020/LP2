const parOuImpar = (numero) => {
  if (numero < 0) {
    console.log("O numero é negativo");
  } else if (numero == 0) {
    console.log("O numero é zero");
  } else if (numero % 2 == 0) {
    console.log("O numero é par");
  } else {
    console.log("O numero é impar");
  }
};

parOuImpar(9);
parOuImpar(-2);
parOuImpar(8);
parOuImpar(0);
