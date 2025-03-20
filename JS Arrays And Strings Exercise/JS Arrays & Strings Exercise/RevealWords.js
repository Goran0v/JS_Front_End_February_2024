function solve(wordArr, text) {
    let newWordArr = [];
    newWordArr = wordArr.split(', ');
    let newText = '';
    newText = text.split(' ');

    for (let word of newText) {
        for (let i = 0; i < newWordArr.length; i++) {
            if (word.length === newWordArr[i].length && word.startsWith('*') && word.endsWith('*')) {
                text = text.replace(word, newWordArr[i]);
            }
        }
    }

    console.log(text);
}

solve('great, learning', 'softuni is ***** place for ******** new programming languages');