function nomeComIdade(nome, idade) {
  if (idade === undefined) {
    console.log("Seu nome é " + nome);
  } else {
    console.log(`Ò seu nome é ${nome}, e você tem ${idade}`);
  }
}
//nomeComIdade('Epaminondas');
//nomeComIdade('Carla',18);
//nomeComIdade(18, "60", 2500);

function repetirFrase(frase, n = 5) {
  for (let i = 1; i <= n; i++) {
    console.log(frase + " " + i);
  }
}
repetirFrase("SILENCIO");
