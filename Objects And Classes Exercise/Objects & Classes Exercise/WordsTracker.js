function solve(array) {
    let wantedWords = array.shift().split(" ");
    let counter = 0;
    let objWontedWords = [];
 
    for (let i = 0; i < wantedWords.length; i++) {
        array.forEach(element => {
            if (!wantedWords[i].indexOf(element)) {
                counter++
            }
        });
        if (counter > 0) {
            let word = wantedWords[i];
            let count = counter;
            objWontedWords.push({ word, count })
        }
        counter = 0;
    }
    objWontedWords.sort((a, b) => b.count - a.count);
 
    for (let i = 0; i < objWontedWords.length; i++) {
 
       
        console.log(`${objWontedWords[i].word} - ${objWontedWords[i].count}`);
    }
    
}

// function solve(arr) {
//     const words = arr[0].split(' ');
    
//     let wordsBook = {};
//     for (let i = 0; i < words.length; i++) {
//         wordsBook[words[i]] = 0;
//     }

//     for (let i = 1; i < arr.length; i++) {
//         if (wordsBook.hasOwnProperty(arr[i])) {
//             wordsBook[arr[i]]++;
//         };
//     }

//     let sortable = Object.fromEntries(
//         Object.entries(wordsBook).sort(([,a],[,b]) => a-b).reverse());

//     for (let word in sortable) {
//         console.log(`${word} - ${wordsBook[word]}`);
//     }
// }

solve([
'is the', 
'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
);