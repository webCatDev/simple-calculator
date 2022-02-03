const numbers = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operator");
const calculation = document.getElementById("calculation");
const paranthesis = document.getElementById("paranthesis");
const equalsTo = document.getElementById("equals-to");
const backspace = document.getElementById("backspace");
const clear = document.getElementById("clear");
const previous = document.getElementById("previous");

for (const number of numbers) {
  number.addEventListener("click", () => {
    calculation.value += number.value;
  });
}

for (const operator of operators) {
  operator.addEventListener("click", () => {
    calculation.value += operator.value;
  });
}

equalsTo.addEventListener("click", () => {
 let result;
 previous.textContent = calculation.value;
 try {
   result = eval(calculation.value);
   console.log(result);
 } catch {
   previous.textContent = "Yanlış ifade girdiniz.";
 }
 if (Number.isSafeInteger(result)) {
   calculation.value = result;
 }else if(Number.isFinite(result)){
      calculation.value = "";
      previous.innerHTML = "Sayı hesaplamak için çok büyük: &#8734;";

 } else {
   result = result.toFixed(2);
   calculation.value = result;
 } 
});

backspace.addEventListener("click", () => {
  let text = calculation.value;
  text = text.substring(0, text.length - 1);
  calculation.value = text;
});

clear.addEventListener("click", () => {
  let text = calculation.value;
  previous.textContent = "";
  text = "";
  calculation.value = text;
});

calculation.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    let result;
    previous.textContent = calculation.value;
    try {
      result = eval(calculation.value);
      console.log(result)
    } catch {
      previous.textContent = "Yanlış ifade girdiniz.";
    }
    if (Number.isSafeInteger(result)) {
      calculation.value = result;
    } else if (Number.isFinite(result)) {
      calculation.value = "";
      previous.innerHTML = "Sayı hesaplamak için çok büyük: &#8734;";
    } else {
      result = result.toFixed(2);
      calculation.value = result;
    } 
  }
});
