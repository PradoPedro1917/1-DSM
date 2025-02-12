// Exercício 3
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
  
  const p1 = disciplina.notas.p1 * disciplina.pesos.p1;
  const p2 = disciplina.notas.p2 * disciplina.pesos.p2;
  const projeto = disciplina.notas.projeto * disciplina.pesos.projeto;
  const total = p1 + p2 + projeto;
  console.log("Nota final:", total);
  