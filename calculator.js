const numbers=document.getElementsByClassName("number")
const operators=document.getElementsByClassName("operator")
const calculation= document.getElementById("calculation")
const paranthesis = document.getElementById("paranthesis");
const equalsTo = document.getElementById("equals-to");
const backspace = document.getElementById("backspace");
const clear = document.getElementById("clear");


for(const number of numbers){
    number.addEventListener("click", ()=>{
        calculation.textContent+=number.value
    })
}


for (const operator of operators) {
  operator.addEventListener("click", () => {
    calculation.textContent += operator.value;
  });
}


equalsTo.addEventListener("click",()=>{
const result = eval(calculation.textContent).toFixed(2);
calculation.textContent=result
})


backspace.addEventListener("click", () => {
    let text= calculation.textContent
    text=text.substring(0,text.length-1)
    calculation.textContent=text
 
});

clear.addEventListener("click", () => {
  let text = calculation.textContent;
  text = "";
  calculation.textContent = text;
});

calculation.addEventListener("keydown", (e)=>{
  if(e.key==="Enter"){
    e.preventDefault()
    const result = eval(calculation.textContent).toFixed(2);
    calculation.textContent = result;
  }
})


