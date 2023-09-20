const aluno = (nome, ac = 5, at) => {
  if (at === undefined) {
    return "RECUPERAÇÃO";
  } else if ((ac + at) / 2 <= 6) {
    return `Aluno ${nome}, sua média foi ${(ac + at) / 2}, recomendamos que faça a RECUPERAÇÃO`;
  } else {
    return `Aluno ${nome}, sua média foi ${(ac + at) / 2}, e você foi APROVADO`;
  }
};
console.log(aluno("Victor", 5, 7));
