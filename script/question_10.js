// Exercicio 10 - Crie um programa que verifique se um número é múltiplo
// de outro número e exiba o resultado no console.

window.addEventListener("load", () => {
  const evaluateBtn = document.getElementById("evaluateBtn");
  const referenceNumber = document.getElementById("referenceNumber");
  const numberToCompare = document.getElementById("numberToCompare");
  const numberInfo = document.getElementById("numberInfo");

  evaluateBtn.onclick = (event) => {
    event.preventDefault();

    response = evaluateNumbers(
      Number(referenceNumber.value),
      Number(numberToCompare.value)
    );

    console.log(response);

    numberInfo.innerText = response;
  };
});

const evaluateNumbers = (reference, compare) => {
  let result = "";

  if (compare % reference !== 0) result = "não ";

  return `O número comparado ${result}é múltiplo`;
};
