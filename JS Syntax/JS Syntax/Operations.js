function solve(first, second, operator) {
    if (operator === '+') {
        console.log(first + second);
    } else if (operator === '-') {
        console.log(first - second);
    }
    else if (operator === '*') {
        console.log(first * second);
    }
    else if (operator === '/') {
        console.log(first / second);
    }
    else if (operator === '%') {
        console.log(first % second);
    } else if (operator === '**') {
        console.log(first ** second);
    }
}

solve(5, 6, '**');