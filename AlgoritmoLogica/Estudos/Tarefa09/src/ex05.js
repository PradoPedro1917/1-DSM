// Exercício 5
  const disciplina = {
    nome: "Algoritmos",
    carga: 80,
    notas: [
      {
        peso: 0.25,
        nota: 8.2,
      },
      {
        peso: 0.35,
        nota: 7.5,
      },
      {
        peso: 0.4,
        nota: 9,
      },
    ],
  };
  
  const p1 = disciplina.notas[0].nota * disciplina.notas[0].peso;
  const p2 = disciplina.notas[1].nota * disciplina.notas[1].peso;
  const projeto = disciplina.notas[2].nota * disciplina.notas[2].peso;
  const total = p1 + p2 + projeto;
  console.log("Nota final:", total);
  