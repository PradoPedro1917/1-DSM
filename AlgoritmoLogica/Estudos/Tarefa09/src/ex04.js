// Exercício 4
const disciplina = {
    nome: "Algoritmos",
    carga: 80,
    pesos: [0.25,0.35,0.4],
    notas: [8.2,7.5,9]
    };
    const p1 = disciplina.notas[0] * disciplina.pesos[0];
    const p2 = disciplina.notas[1] * disciplina.pesos[1];
    const projeto = disciplina.notas[2] * disciplina.pesos[2];
    const total = p1 + p2 + projeto;
    console.log("Nota final:", total);    