function solve(array) {
    array.sort((a,b) => a - b);5
    let newArr = [];

    while (array.length > 0) {
        let first = array.shift();
        let second = array.pop();

        newArr.push(first, second);
    }

    return newArr;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));