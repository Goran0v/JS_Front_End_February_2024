function solve(first, second, third) {
    let counter = 0;
    if (first < 0) {
        counter++;
    }
    if (second < 0) {
        counter++;
    }
    if (third < 0) {
        counter++;
    }

    if (counter % 2 == 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

solve(5, 12, 15);