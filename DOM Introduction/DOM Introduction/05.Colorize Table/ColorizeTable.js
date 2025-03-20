function colorize() {
    const evenRowElements = document.querySelectorAll('table tr:nth-child(2n)');

    //evenRowElements.forEach(el => el.style.backgroundColor = 'teal');
    for (let element of evenRowElements) {
        element.style.backgroundColor = 'teal';
    }
}