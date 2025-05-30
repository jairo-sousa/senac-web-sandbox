// Exercicio 12 - Crie um um programa que receba o raio de uma 
// circunferência e mostre o diâmetro, comprimento e área desta.

window.addEventListener("load", () => {
  const answerBtn = document.getElementById("answerBtn");
  const answer = document.getElementById("answer");

  const ray = document.getElementById("ray");

  answerBtn.onclick = (event) => {
    event.preventDefault();

    response = solveQuestion(ray.value);

    console.log(response);

    answer.innerText = response;
  };
});

const solveQuestion = (rayValue) => {
  let diameter = 2 * rayValue;
  let area = (3.14 * rayValue) ^ 2;
  let length = 2 * 3.14 * rayValue;

  return `Diâmetro: ${diameter}   |   Área: ${area}   |   Comprimento: ${length}`;
};
