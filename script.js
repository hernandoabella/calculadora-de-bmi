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
