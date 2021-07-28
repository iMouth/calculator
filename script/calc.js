let number1;
let number2;
let operator;

const keys = document.querySelector("#keys");
const out = document.querySelector("#output");

keys.addEventListener("click", (e) => {
  if (e.target !== keys) {
    if (e.target.outerText === "AC") {
      out.textContent = 0;
    } else if (!isNaN(+e.target.outerText)) {
      number1 = +e.target.outerText;
      out.textContent = e.target.outerText;
    }
  }
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divison(a, b) {
  return a / b;
}

function operate(a, operator, b) {
  if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "+") {
    return add(a, b);
  } else if (operator === "/") {
    return divison(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  }
}
