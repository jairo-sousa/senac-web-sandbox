// Exercicio 11 - Crie um programa que verifique se uma string contém uma determinada substring e exiba o resultado no console.

window.addEventListener("load", () => {
  const evaluateBtn = document.getElementById("evaluateBtn");
  const stringInfo = document.getElementById("stringInfo");

  const referenceString = document.getElementById("referenceString");
  const stringToCompare = document.getElementById("stringToCompare");

  evaluateBtn.onclick = (event) => {
    event.preventDefault();

    response = evaluateStrings(referenceString.value, stringToCompare.value);

    console.log(response);

    stringInfo.innerText = response;
  };
});

const evaluateStrings = (reference, compare) => {
  let result = "";

  if (!reference.includes(compare)) result = "não ";

  return `O a string comparada ${result} está contida na string referência`;
};
