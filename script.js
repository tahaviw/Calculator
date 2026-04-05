const display = document.getElementById("container-result")
const numberBtn = document.querySelectorAll('[id^="btn-"]')
const operatorBtn = document.querySelectorAll('[class="btn-op"]')
const equalBtn = document.getElementById("key-equal")
const acBtn = document.getElementById("key-ac")
const delBtn = document.getElementById("key-del")
const dotBtn = document.getElementById("key-dot")

let firstNumber = ""
let secondNumber = ""
let operator = ""
let result = ""

for (let i = 0 ; i<numberBtn.length ; i++) {
    numberBtn[i].addEventListener("click" , function() {
        display.textContent += numberBtn[i].textContent
    })
}
for (let i = 0 ; i<operatorBtn.length ; i++) {
    operatorBtn[i].addEventListener("click" , function() {
        //Guard clauses with early return
        if (display.textContent === "") {
            return
        }
    firstNumber = display.textContent 
    operator = operatorBtn[i].textContent  
    display.textContent = ""  
})
}

equalBtn.addEventListener("click" , function(){
    secondNumber = display.textContent
    if (operator === "+") {
        result = Number(firstNumber) + Number(secondNumber)
    } else if (operator === "-") {
        result = Number(firstNumber) - Number(secondNumber)
    } else if (operator === "x") {
        result = Number(firstNumber) * Number(secondNumber)
    } else if (operator === "÷") {
        result/*.toFixed(2)*/ = Number(firstNumber) / Number(secondNumber)
    }

    if (result === Infinity) {
        result = "Undefined"
    } else if (!Number.isInteger(result)) {
        result = Number(result.toFixed(2))
    }
    firstNumber = String(result)
    display.textContent = result
    operator = ""
})

acBtn.addEventListener("click" , function (){
    display.textContent = ""
    firstNumber = ""
    secondNumber = ""
    operator = ""
    result = ""
})

delBtn.addEventListener("click" , function (){
    display.textContent = display.textContent.slice(0,-1)
})

dotBtn.addEventListener("click" , function() {
    if (!display.textContent.includes(".")) {
        display.textContent += dotBtn.textContent
    }
})