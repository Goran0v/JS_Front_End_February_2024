function solve(type, count) {
    let sum = 0;
    if (type === 'coffee') {
        sum = 1.5 * count;
    } else if (type === 'water') {
        sum = 1 * count;
    } else if (type === 'coke') {
        sum = 1.4 * count;
    } else if (type === 'snacks') {
        sum = 2 * count;
    }

    console.log(sum.toFixed(2));
}

solve('coffee', 5);