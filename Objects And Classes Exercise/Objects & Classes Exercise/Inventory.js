function solve(arr) {

    let heroes = [];
    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = parseInt(level);
            this.items = items;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        const line = arr[i].split(' / ');
        const items = line[2].split(', ');

        const hero = new Hero(line[0], parseInt(line[1]), items);
        heroes[i] = hero;
    }

    heroes.sort((a, b) => a.level - b.level);
    for (let i = 0; i < heroes.length; i++) {
        const hero = heroes[i];

        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }
}

solve([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]);