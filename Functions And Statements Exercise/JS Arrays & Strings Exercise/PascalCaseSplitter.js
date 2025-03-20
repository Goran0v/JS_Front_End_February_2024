function solve(text) {
    let arr = [];
    let word = text[0];
    for (let i = 1; i < text.length; i++) {
        if (text[i].toUpperCase() === text[i]) {
            arr.push(word);
            word = text[i];
        } else {
            word += text[i];
        }
    }
    arr.push(word);

    console.log(arr.join(', '));
}

solve('HoldTheDoor');