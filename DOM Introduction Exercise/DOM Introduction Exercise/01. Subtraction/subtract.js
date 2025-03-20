function subtract() {
    const firstTextElement = document.getElementById('firstNumber');
    const secondTextElement = document.getElementById('secondNumber');
    const divElement = document.getElementById('result');

    const firstNum = Number(firstTextElement.value);
    const secondNum = Number(secondTextElement.value);

    divElement.textContent = firstNum - secondNum;
}