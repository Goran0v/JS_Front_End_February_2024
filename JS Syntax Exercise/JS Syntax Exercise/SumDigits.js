function solve(num) {
    let sum = 0;
    while (num > 0) {
        sum += Math.floor(num % 10);
        num = Math.floor(num / 10);
    }

    console.log(sum);
}

solve(245678);