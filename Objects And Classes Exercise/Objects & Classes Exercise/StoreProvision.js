function solve(firstArr, secondArr) {
    let storeBook = {};

    for (let i = 0; i < firstArr.length; i += 2) {
        const product = firstArr[i];
        let quantity = firstArr[i + 1];

        storeBook[product] = parseInt(quantity);
    }

    for (let i = 0; i < secondArr.length; i += 2) {
        const product = secondArr[i];
        let quantity = secondArr[i + 1];

        if (storeBook.hasOwnProperty(product)) {
            storeBook[product] += parseInt(quantity);
        } else {
            storeBook[product] = parseInt(quantity);
        }
    }

    for (let product in storeBook) {
        console.log(`${product} -> ${storeBook[product]}`);
    }
}

solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);