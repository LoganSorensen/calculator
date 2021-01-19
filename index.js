const calcOutput = document.querySelector(".calc-output");
calcOutput.innerHTML = 0;

calcOutput.addEventListener("click", () => {
  console.log("you clicked the output");
  console.log(calcOutput.innerHTML);
});

// Operator Button Functionality
const operatorButtons = document.querySelectorAll(".operator-btn");
let firstNumber = 0;
let secondNumber = 0;
let currentOperator = null;

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
      if (button.innerHTML !== "=") {
          firstNumber = Number(calcOutput.innerHTML);
          calcOutput.innerHTML = 0;
      currentOperator = button.innerHTML;
      console.log(firstNumber, currentOperator);
    } else {
        secondNumber = Number(calcOutput.innerHTML);
      console.log(firstNumber, currentOperator, secondNumber);
        if (currentOperator == "+") {
            calcOutput.innerHTML = firstNumber + secondNumber;
        } else if (currentOperator == "-") {
            calcOutput.innerHTML = firstNumber - secondNumber;
        } else if (currentOperator == "x") {
            calcOutput.innerHTML = firstNumber * secondNumber;
        } else if (currentOperator == "÷") {
            calcOutput.innerHTML = firstNumber / secondNumber;
        }
    //   console.log("equals", typeof firstNumber);
    }
  });
});

// Number Button Functionality
const numberButtons = document.querySelectorAll(".number-btn");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (calcOutput.innerHTML == 0) {
      calcOutput.innerHTML = button.innerHTML;
    } else if (calcOutput.innerHTML.length <= 7) {
      calcOutput.innerHTML += button.innerHTML;
    }

    // comma handling

    // } else if (calcOutput.innerHTML.length <= 7) {

    //   if (calcOutput.innerHTML.length > 3) {
    //     //   moves the comma one space to the right as the number grows
    //     let outputArr = calcOutput.innerHTML.split("");
    //     const comma = outputArr.indexOf(",")
    //     console.log(outputArr, comma)
    //     outputArr.splice(comma, 1)
    //     outputArr.splice(comma + 1, 0, ",");
    //     calcOutput.innerHTML = outputArr.join("");
    //   }

    //   if (calcOutput.innerHTML.length === 3 || calcOutput.innerHTML.length === 7) {
    //     //   adds a comma once the number hits a certain length
    //     const outputArr = calcOutput.innerHTML.split("");
    //     outputArr.splice(1, 0, ",");
    //     calcOutput.innerHTML = outputArr.join("");
    //     calcOutput.innerHTML += button.innerHTML;
    //   } else {
    //     calcOutput.innerHTML += button.innerHTML;
    //   }
    // }
  });
});

// Clear Button Functionality
const clearButton = document.querySelector(".clear-btn");

// resets the output to zero when clicked
clearButton.addEventListener("click", () => {
  calcOutput.innerHTML = 0;
});
