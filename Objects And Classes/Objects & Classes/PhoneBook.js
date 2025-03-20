function solve(strings) {
    let phoneBook = {};
    for (let i = 0; i < strings.length; i++) {
        let arr = strings[i].split(' ');
        phoneBook[arr[0]] = arr[1];
    }

    for (let name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}

solve(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);