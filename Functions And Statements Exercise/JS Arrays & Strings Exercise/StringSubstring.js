function solve(word, text) {
    for (let curr of text.split(' ')) {
        if (curr.toLowerCase() === word.toLowerCase()) {
            console.log(word);
            return;
        }
    }

    console.log(`${word} not found!`);
}

solve('python',
'JavaScript is the best programming language');