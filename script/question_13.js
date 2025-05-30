// Exercicio 13 - Crie um programa que receba três inteiros e diga qual deles
// é o maior e qual o menor. Consegue criar mais de uma solução?

window.addEventListener("load", () => {
  const answerBtn = document.getElementById("answerBtn");
  const answer = document.getElementById("answer");

  const input_01 = document.getElementById("input_01");
  const input_02 = document.getElementById("input_02");
  const input_03 = document.getElementById("input_03");

  answerBtn.onclick = (event) => {
    event.preventDefault();

    const values = [
      Number(input_01.value),
      Number(input_02.value),
      Number(input_03.value)
    ]

    response = solveQuestion(values);

    console.log(response);

    answer.innerText = response;
  };
});

const solveQuestion = (entries) => {

  let greater = entries[0]
  let less = entries[0]

  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i]

    if (entry > greater) greater = entry
    if (entry < less) less = entry
  }

  return `Maior: ${greater}   |   Menor: ${less}`;
};
