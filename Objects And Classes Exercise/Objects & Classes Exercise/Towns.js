function solve(arr) {
    let towns = [];

    for (let i = 0; i < arr.length; i++) {
        const townInfo = arr[i].split(' | ');
        const town = townInfo[0];
        const latitude = parseFloat(townInfo[1]).toFixed(2);
        const longitude = parseFloat(townInfo[2]).toFixed(2);
        let obj = {
            town,
            latitude,
            longitude
        };

        towns[i] = obj;
    }

    for (let town of towns) {
        console.log(town);
    }
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);