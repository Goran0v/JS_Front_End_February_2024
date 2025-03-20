function solve(num, array) {
    let output = '';
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr[i - 1] = array[num - i];
    }

    for (let number of arr) {
        output += `${number} `;
    }

    console.log(output);
}

solve(3, [10, 20, 30, 40, 50]);