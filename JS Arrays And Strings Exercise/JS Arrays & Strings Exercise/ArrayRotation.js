function solve(array, rotations) {
    for (let i = 0; i < rotations; i++) {
        let curr = array.shift();
        array.push(curr);
    }

    let output = '';
    for (let i = 0; i < array.length; i++) {
        output += `${array[i]} `;
    }

    console.log(output);
}

solve([32, 21, 61, 1], 4);