document.getElementById("calculate").addEventListener("click", function() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100; // Convert to meters

  if (!isNaN(weight) && !isNaN(height) && height > 0) {
      const bmi = weight / (height * height);
      const result = document.getElementById("result");
      result.textContent = `Your BMI is ${bmi.toFixed(2)}`;
  } else {
      alert("Please enter valid weight and height values.");
  }
});

// Update weight value as the range is adjusted
document.getElementById("weight").addEventListener("input", function() {
  const weightValue = document.getElementById("weightValue");
  weightValue.textContent = `${this.value} kg`;
});

// Update height value as the range is adjusted
document.getElementById("height").addEventListener("input", function() {
  const heightValue = document.getElementById("heightValue");
  heightValue.textContent = `${this.value} cm`;
});
