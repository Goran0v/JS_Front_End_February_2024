function solve(string, num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
        result += string;
    }

    return result;
}

console.log(solve('abc', 3));