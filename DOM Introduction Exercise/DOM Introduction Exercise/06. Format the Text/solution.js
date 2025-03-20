function solve() {
    const textAreaElement = document.getElementById('input');
    const outputElement = document.getElementById('output');

    const text = textAreaElement.value;

    const result = 
        text
            .split('.')
            .filter(el => !!el)
            .reduce((result, sentence, i) => {
        const resultIndex = Math.floor(i / 3);
        if (!result[resultIndex]) {
            result[resultIndex] = [];
        }

        result[resultIndex].push(sentence.trim());
        return result;
    }, [])
    .map(el => `<p>${el.join('. ')}.</p>`)
    .join('\n');

    outputElement.innerHTML = result;
}