// Exercicio 16 - Crie um programa que verifique se uma string
// é um palíndromo e exiba o resultado no console..

window.addEventListener("load", () => {
  const answerBtn = document.getElementById("answerBtn");
  const answer = document.getElementById("answer");

  const input_01 = document.getElementById("input_01");

  answerBtn.onclick = (event) => {
    event.preventDefault();

    const values = [
      input_01.value,
    ]

    response = solveQuestion(values);

    console.log(response);

    answer.innerText = response;
  };
});

const solveQuestion = (entries) => {

  const charactersAmount = entries[0].length
  for (let i = 0; i < Math.floor(charactersAmount / 2); i++) {
    const leftCharacter = entries[0][i];
    const rightCharacter = entries[0][charactersAmount - i - 1];

    if (leftCharacter != rightCharacter) return "A string não é um palindromo"
  }
  return "A string é um palindromo"

};
