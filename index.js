function calculateBMI() {
  const height = parseFloat(document.getElementById("height"). value);
  const weight = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("result");

  if (!height || !weight || height <= 0 || weight <= 0){
    result.textContent = "please enter valid heigt and weight.";
    return;
  }
  const bmi = weight / (height * height);
  let status = "";

  if (bmi < 18.5) {
    status = "Underweight";
  }

  else if (bmi < 25){
    status = "Normal weight";
  }

else if (bmi < 30) {
  status = "Overweight";
}

else {
  status = "obese"
}
result.textContent = 'Your BMI ${bmi.toFixed(4)} (${status})';
 }
