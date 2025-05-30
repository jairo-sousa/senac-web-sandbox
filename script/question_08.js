// Questão 08 - Crie um programa que verifique se um número é positivo,
// negativo ou zero e exiba o resultado no console.

window.addEventListener("load", () => {
  const evaluateBtn = document.getElementById("evaluateBtn");
  const numberToEval = document.getElementById("numberToEval");
  const numberInfo = document.getElementById("numberInfo");

  evaluateBtn.onclick = (event) => {
    event.preventDefault();

    response = evaluateNumber(Number(numberToEval.value));

    console.log(response);

    numberInfo.innerText = response;
  };
});

const evaluateNumber = (number) => {
  let result = "";
  if (number > 0) result = "Positivo";
  if (number < 0) result = "Negativo";
  if (number === 0) result = "Zero";

  return `O número é ${result}`;
};
