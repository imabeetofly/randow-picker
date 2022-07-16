let btnRandom = document.querySelector(".pickDataBtn");
let resultContainer = document.querySelector(".result-container");
let result = document.querySelector(".result");
let allDataDisplay = document.querySelector("h3");

let dataToRandomize = [];

//input data

const inputInnerText = document.querySelector("input");
const inputBtn = document.querySelector(".addDataBtn");
let dataToRandomizeB = [];

inputBtn.addEventListener("click", () => {
  dataToRandomizeB.push(inputInnerText.value);
  dataToRandomize.push(inputInnerText.value);
  console.log(inputInnerText.value);
  dataToRandomizeB.forEach((data) => {
    console.log(data);
    let dataToShow = document.createElement("li");
    dataToShow.innerHTML = data;
    allDataDisplay.append(dataToShow);
    dataToRandomizeB = [];
    inputBtn.classList.add("btnClick");
    setTimeout(btnGetCliked, 500);
  });
});

// document.getElementById("arrayPrint").innerHTML = dataToRandomize;

function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;

  return result;
}

function btnGetCliked() {
  console.log("btn get cliked");
  btnRandom.classList.remove("btnClick");
  inputBtn.classList.remove("btnClick");
  resultContainer.classList.remove("result-container-spinning");
}

btnRandom.addEventListener("click", () => {
  console.log("random data picked");
  console.log(dataToRandomize);
  let dataRandomized = getRandomNumber(0, dataToRandomize.length - 1);
  result.innerText = dataToRandomize[dataRandomized];
  resultContainer.classList.add("result-container-spinning");
  result.classList.add("show-data");
  btnRandom.classList.add("btnClick");
  setTimeout(btnGetCliked, 500);
});
