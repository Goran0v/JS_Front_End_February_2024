function solve(first, second, third) {
    let biggest = Number.MIN_SAFE_INTEGER;

    if (biggest < first) {
        biggest = first;
    }

    if (biggest < second) {
        biggest = second;
    }

    if (biggest < third) {
        biggest = third;
    }

    console.log(`The largest number is ${biggest}.`);
}

solve(66, -3, 16);