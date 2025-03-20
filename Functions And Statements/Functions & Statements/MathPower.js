function solve(num, power) {
    // let result = Math.pow(num, power);

    // console.log(result);

    let result = num;
    for (let i = 1; i < power; i++) {
        result *= num;
    }

    console.log(result);
}

solve(2, 8);