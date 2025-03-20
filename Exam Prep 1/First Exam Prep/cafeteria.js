function solve(input) {
    class Barista {
        coffeeType = [];
        constructor(baristaName, shift) {
            this.baristaName = baristaName;
            this.shift = shift;
        }
    }
    
    const n = Number(input[0]);
    let baristas = [];
    for (let i = 1; i <= n; i++) {
        const baristaInfo = input[i].split(' ');
        let barista = new Barista(baristaInfo[0], baristaInfo[1]);
        barista.coffeeType = baristaInfo[2].split(',');

        baristas.push(barista);
    }

    let lineCounter = n;
    while (input[lineCounter] !== 'Closed') {
        const curr = input[lineCounter].split(' / ');
        const task = curr[0];

        let name = '';
        let shift = '';
        let coffeeType = '';
        let barista;

        if (task === 'Prepare') {
            name = curr[1];
            shift = curr[2];
            coffeeType = curr[3];
            barista = baristas.find(barista => barista.baristaName === name);

            if (barista.shift === shift && barista.coffeeType.includes(coffeeType)) {
                console.log(`${name} has prepared a ${coffeeType} for you!`);
            } else {
                console.log(`${name} is not available to prepare a ${coffeeType}.`);
            }
        } else if (task === 'Change Shift') {
            name = curr[1];
            shift = curr[2];
            barista = baristas.find(barista => barista.baristaName === name);

            barista.shift = shift;
            console.log(`${name} has updated his shift to: ${shift}`);
        } else if (task === 'Learn') {
            name = curr[1];
            coffeeType = curr[2];
            barista = baristas.find(barista => barista.baristaName === name);

            if (barista.coffeeType.includes(coffeeType)) {
                console.log(`${name} knows how to make ${coffeeType}.`);
            } else {
                barista.coffeeType.push(coffeeType);
                console.log(`${name} has learned a new coffee type: ${coffeeType}.`);
            }
        }

        lineCounter++;
    }

    for (const barista of baristas) {
        console.log(`Barista: ${barista.baristaName}, Shift: ${barista.shift}, Drinks: ${barista.coffeeType.join(', ')}`);
    }
}

solve(['4',
'Alice day Espresso,Cappuccino',
'Bob night Latte,Mocha',
'Carol day Americano,Mocha',
'David night Espresso',
'Prepare / Alice / day / Espresso',
'Change Shift / Bob / day',
'Learn / Carol / Latte',
'Prepare / Bob / night / Latte',
'Learn / David / Cappuccino',
'Prepare / Carol / day / Cappuccino',
'Change Shift / Alice / night',
 'Learn / Bob / Mocha',
'Prepare / David / night / Espresso',
'Closed']);