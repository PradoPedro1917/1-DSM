//Exercício 7
const disciplina = {
    nome: "Algoritmos",
    carga: 80,
    pesos: {
      p1: 0.25,
      p2: 0.35,
      projeto: 0.4,
    },
    notas: {
      p1: 8.2,
      p2: 7.5,
      projeto: 9,
    },
  };
  
  //const { p1, p2 } = disciplina.pesos;
  const { pesos:{p1, p2} } = disciplina;
  console.log("P1:", p1);
  console.log("P2:", p2);
  