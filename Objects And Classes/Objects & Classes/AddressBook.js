function solve(strings) {
    let addressBook = {};

    for (let i = 0; i < strings.length; i++) {
        let arr = strings[i].split(':');

        if (addressBook.hasOwnProperty(arr[0])) {
            addressBook[arr[0]] = arr[1];
        }
        
        addressBook[arr[0]] = arr[1];
    }

    let sorted = Object.entries(addressBook);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    for (let i = 0; i < sorted.length; i++) {
        let arr = sorted[i].toString().split(',');
        console.log(`${arr[0]} -> ${arr[1]}`);
    }
}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);