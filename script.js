const weightSlider = document.getElementById("myWeight");
const weightOutput = document.getElementById("inputWeight");

const heightSlider = document.getElementById("myHeight");
const heightOutput = document.getElementById("inputHeight");

weightSlider.oninput = function () {
  weightOutput.textContent = this.value;
};

heightSlider.oninput = function () {
  heightOutput.textContent = this.value;
};

function calculateBmi(event) {
  event.preventDefault();
  const weight = document.bmiForm.realweight.value;
  const height = (document.bmiForm.realheight.value) / 100;
  const realbmi = weight / Math.pow(height, 2);
  const realbmiOutput = document.getElementById("yourbmi");
  const messageOutput = document.getElementById("evaluationMessage");
  const roundedBmi = realbmi.toFixed(1);
  realbmiOutput.innerHTML = roundedBmi;

  if (roundedBmi > 26) {
    messageOutput.innerHTML = "¡¡¡ERES UN CULO GORDO!!!";
  } else {
    messageOutput.innerHTML = "Tu peso es saludable.";
  }
}
