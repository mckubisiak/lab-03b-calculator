const firstInput = document.getElementById('first-num');
const secondInput = document.getElementById('second-num');
const addPressed = document.getElementById('add-nums');
const mathOutput= document.getElementById('nums-math');
const subtractPressed = document.getElementById('subtract-nums');
const dividePressed = document.getElementById('divide-nums');
const multiplyPressed = document.getElementById('multiply-nums');
const resetPressed = document.getElementById('reset-nums');


addPressed.addEventListener('click', () => {
    const number1 = Number(firstInput.value);
    const number2 = Number(secondInput.value);
    console.log(number1);
    console.log(number2);
    mathOutput.textContent = number1 + number2;
})
subtractPressed.addEventListener('click', () => {
    const number1 = Number(firstInput.value);
    const number2 = Number(secondInput.value);
    mathOutput.textContent = number1 - number2;
})
dividePressed.addEventListener('click', () => {
    const number1 = Number(firstInput.value);
    const number2 = Number(secondInput.value);
    mathOutput.textContent = number1 / number2;
})
multiplyPressed.addEventListener('click', () => {
    const number1 = Number(firstInput.value);
    const number2 = Number(secondInput.value);
    mathOutput.textContent = number1 * number2;
})
resetPressed.addEventListener('click', () => {
    const number1 = Number(firstInput.value);
    const number2 = Number(secondInput.value);
    mathOutput.textContent = "0"
    firstInput.value= "";
    secondInput.value= "";
})

