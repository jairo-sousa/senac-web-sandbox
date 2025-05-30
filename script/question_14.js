// Exercicio 14 - Crie um programa que converta uma string
// para número e exiba o resultado no console.

window.addEventListener("load", () => {
  const answerBtn = document.getElementById("answerBtn");
  const answer = document.getElementById("answer");

  const input_01 = document.getElementById("input_01");

  answerBtn.onclick = (event) => {
    event.preventDefault();

    const values = [
      Number(input_01.value)
    ]

    response = solveQuestion(values);

    console.log(response);

    answer_01.innerText = `Tipo da entrada ${input_01.value} -> ${typeof input_01.value}`;
    answer_02.innerText = response;
  };
});

const solveQuestion = (entries) => {


  return `Valor convertido: ${entries[0]} -> ${typeof entries[0]}`;
};
