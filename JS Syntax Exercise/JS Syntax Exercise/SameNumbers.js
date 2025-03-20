function solve(num) {
    let sum = 0;
    let counter = 0;
    let numCopy = Math.floor(num % 10);
    while (num > 0) {
        sum += Math.floor(num % 10);
        counter++;
        num = Math.floor(num / 10);
    }

    if (sum / counter === numCopy) {
        console.log(true);
    } else {
        console.log(false);
    }

    console.log(sum);
}

solve(1234);