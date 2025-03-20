function solve(input) {
    let obj = {};

    obj = input.reduce((acc, cur) => {
        let [command, carNumber] = cur.split(', ');

        if (acc.hasOwnProperty(carNumber)) {
            if (command === 'OUT') {
                acc[carNumber] = 'out';
            }else if (command === 'IN') {
                acc[carNumber] = 'parked';
            }
        } else {
            if (command === 'IN') {
                acc[carNumber] = 'parked';
            }
        }

        return acc;
    }, {});

    obj = Object.entries(obj)
        .filter(([carNumber, status]) => {

            if (status ===  'parked') {
                return carNumber;
            }
        })
        .map(el => el[0])
        .sort((a, b) => a.localeCompare(b))

    if (obj.length > 0) {
        console.log(obj.join('\n'));
    } else {
        console.log('Parking Lot is Empty');
    }
}

// function solve(arr) {
//     let carBook = [];

//     for (let i = 0; i < arr.length; i++) {
//         const line = arr[i].split(', ');
//         const func = line[0];
//         const carPlate = line[1];

//         if (func === 'IN') {
//             carBook.push(carPlate);
//         } else {
//             carBook.pop(carPlate);
//         }
//     }

//     carBook.sort((a, b) => parseInt(a.substring(2, 6)) - parseInt(b.substring(2, 6)));
//     if (carBook.length > 0) {
//         for (let plate of carBook) {
//             console.log(plate);
//         }
//     } else {
//         console.log('Parking Lot is Empty');
//     }
// }

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);