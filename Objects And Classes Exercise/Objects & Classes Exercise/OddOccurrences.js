function solve(string) {
    const elements = string.split(' ');

    let wordTracker = {};

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i].toLowerCase();

        if (wordTracker.hasOwnProperty(element)) {
            wordTracker[element]++;
        } else {
            wordTracker[element] = 1;
        }
    }

    let words = [];
    for (let word in wordTracker) {
        if (wordTracker[word] % 2 !== 0) {
            words.push(word);
        }
    }

    console.log(words.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');