// Exercicio 15 - Crie um programa que recebe uma nota e checa se
// você passou direto, ficou de recuperação ou foi reprovado na matéria.

// A regra é a seguinte:
// Nota 7 ou mais: passou direto
// Entre 5 e 7: tem direito de fazer uma prova de recuperação
// Abaixo de 5: reprovado direto

// Exercicio 15 - Crie um programa que converta um número para string 
// e exiba o resultado no console.

window.addEventListener("load", () => {
  const answerBtn = document.getElementById("answerBtn");
  const answer = document.getElementById("answer");
  const answer_01 = document.getElementById("answer_01");
  const answer_02 = document.getElementById("answer_02");

  const input_01 = document.getElementById("input_01");

  answerBtn.onclick = (event) => {
    event.preventDefault();

    const values = [
      Number(input_01.value),
    ]

    response = `Aluno ${solveQuestion(values)}`
    response_sub = `${solveSubQuestion(values)}`

    console.log(response);

    answer.innerText = response;
    answer_01.innerText = `Tipo da entrada ${values[0]} -> ${typeof values[0]}`;
    answer_02.innerText = response_sub;
  };

});

const solveQuestion = (entries) => {

  if (entries[0] >= 7) return "aprovado! 😎"
  if (entries[0] >= 5) return "de recuperação. 🥶"

  return "reprovado... 😭"

};


const solveSubQuestion = (entries) => {
  const converted = String(entries[0])
  return `Valor convertido: ${converted} -> ${typeof converted}`;
};