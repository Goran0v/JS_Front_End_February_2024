function solve(text, word) {
    let counter = 0;
    let str = text.split(' ');

    for (let i = 0; i < str.length; i++) {
        if (str[i] === word) {
            counter++;
        }
    }

    console.log(counter);
}

solve('softuni is great place for learning new programming languages', 'softuni');