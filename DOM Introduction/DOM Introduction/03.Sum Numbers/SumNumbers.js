function calc() {
    const first = document.getElementById('num1');
    const second = document.getElementById('num2');
    const sum = document.getElementById('sum');

    const firstNum = Number(first.value);
    const secondNum = Number(second.value);

    sum.value = firstNum + secondNum;
}