// Exercicio 17 - Crie um programa que verifique se uma string é
// um anagrama de outra string e exiba o resultado no console.

window.addEventListener("load", () => {
  const answerBtn = document.getElementById("answerBtn");
  const answer = document.getElementById("answer");

  const input_01 = document.getElementById("input_01");
  const input_02 = document.getElementById("input_02");

  answerBtn.onclick = (event) => {
    event.preventDefault();

    const values = [
      String(input_01.value).toLocaleLowerCase(),
      String(input_02.value).toLocaleLowerCase(),
    ]

    response = solveQuestion(values);

    console.log(response);

    answer.innerText = response;
  };
});

const solveQuestion = (entries) => {

  let referenceStr = entries[0]
  let testingStr = entries[1]

  for (let i = 0; i < referenceStr.length; i++) {
    const character = referenceStr[i];

    if (testingStr.includes(character)) {
      testingStr = testingStr.replace(character, "")
    } else {
      return "A string [B] não é palindromo da string [A]"
    }
  }

  return "A string [B] é palindromo da string [A]"
};
