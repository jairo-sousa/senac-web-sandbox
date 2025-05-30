// Questão 09 - Crie um programa que verifique se um número é maior,
// menor ou igual a outro número e exiba o resultado no console.

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

  if (compare > reference) result = "Maior";
  if (compare < reference) result = "Menor";
  if (compare === reference) result = "Igual";

  return `O número comparado é ${result}`;
};
