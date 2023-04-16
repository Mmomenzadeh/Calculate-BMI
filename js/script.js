//create useable  Calculate BMI function
const CalculateBMI = (height, weight) => {
  height = height / 100;
  const BMI = weight / (height * height);
  return BMI.toFixed(2);
};

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  //Validation of entries
  if (height.trim() === "" || weight.trim() === "") {
    alert("لطفاً همه ورودی‌ها را پر کنید!");

    return false;
  }

  height = parseInt(height);
  weight = parseInt(weight);

  // Validation of entries
  if (isNaN(height) || isNaN(weight)) {
    alert("قد و وزن باید عددی باشند");

    return false;
  }

  //Validation of entries
  if (weight < 0 || height < 0) {
    alert("قد و وزن باید بزرگتر از صفر باشد.");

    return false;
  }

  document.getElementById("result").innerHTML = CalculateBMI(height, weight);
});

/// Using the event delegate pattern We manage incoming events input
document.querySelector("form").addEventListener("keydown", () => {
  document.getElementById("result").innerHTML = "";
});
