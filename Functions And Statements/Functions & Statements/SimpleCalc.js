function solve(first, second, operator) {
    let sum = 0;
    if (operator === 'multiply') {
        sum = first * second;
    } else if (operator === 'divide') {
        sum = first / second;
    } else if (operator === 'add') {
        sum = first + second;
    } else if (operator === 'subtract') {
        sum = first - second;
    }

    console.log(sum);
}

solve(5, 5, 'multiply');