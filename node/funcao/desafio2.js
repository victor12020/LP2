const salario = (num) => {
  if (num <= 1500) {
    return "Seu salario " + num + ", e você é ISENTO.";
  } else if (num > 1500 && num <= 2500) {
    return (
      "Seu salário " +
      num +
      ", o imposto é 15% " +
      "e o seu salario final é " +
      num * 0.15
    );
  } else {
    return (
      "Seu salário " +
      num +
      ", o imposto é 25% " +
      "e o seu salario final é " +
      num * 0.25
    );
  }
};
console.log(salario(1500));
console.log(salario(2000));
console.log(salario(3500));

// OU (dependendo do caso, avitar colocar string em const)

const calculaImposto = (salario) => {
  if (salario <= 1500) {
    return 0;
  } else if (salario > 1500 && salario <= 2500) {
    return salario * 0.15;
  } else {
    return salario * 0.25;
  }
};

let saldo = 2500;

if (calculaImposto(saldo) == 0) {
  console.log(`Seu salario é ${saldo}, e você é ISENTO`);
} else {
  console.log(
    `Seu salario é ${saldo}, o imposto é de ${calculaImposto(
      saldo
    )} e seu salario final é ${saldo - calculaImposto(saldo)}`
  );
}
