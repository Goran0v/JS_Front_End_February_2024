function solve(text) {
    const pattern = /#(?<word>[a-zA-Z]+)/g;

    const matches = text.matchAll(pattern);

    for (const match of matches) {
        console.log(match.groups.word);
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');