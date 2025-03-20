function solve(input) {
    class Character {
        constructor(name, hp, bullets) {
            this.name = name;
            this.hp = hp;
            this.bullets = bullets;
        }
    }

    const n = Number(input[0]);

    let characters = [];
    for (let i = 1; i <= n; i++) {
        const line = input[i].split(' ');
        const character = new Character(line[0], Number(line[1]), Number(line[2]));

        characters.push(character);
    }

    let counter = n + 1;
    let line = input[counter].split(' - ');

    while (line[0] !== 'Ride Off Into Sunset') {
        const task = line[0];
        const name = line[1];
        const character = characters.find(ch => ch.name === name);

        if (task === 'FireShot') {
            const target = line[2];

            if (character.bullets > 0) {
                character.bullets--;
                const bullets = character.bullets;

                console.log(`${name} has successfully hit ${target} and now has ${bullets} bullets!`);
            } else {
                console.log(`${name} doesn't have enough bullets to shoot at ${target}!`);
            }
        } else if (task === 'TakeHit') {
            const damage = Number(line[2]);
            const attacker = line[3];

            character.hp -= damage;

            if (character.hp > 0) {
                console.log(`${name} took a hit for ${damage} HP from ${attacker} and now has ${character.hp} HP!`);
            } else {
                characters = characters.filter(ch => ch.name !== name);
                console.log(`${name} was gunned down by ${attacker}!`);
            }
        } else if (task === 'Reload') {
            if (character.bullets < 6) {
                const reloadedBullets = 6 - character.bullets;
                character.bullets = 6;
                console.log(`${name} reloaded ${reloadedBullets} bullets!`);
            } else {
                console.log(`${name}'s pistol is fully loaded!`);
            }
        } else if (task === 'PatchUp') {
            let amount = Number(line[2]);

            if (character.hp === 100) {
                console.log(`${name} is in full health!`);
            } else {
                let recoveredAmount = 0;

                if (character.hp + amount > 100) {
                    recoveredAmount = 100 - character.hp;
                    character.hp = 100;
                } else {
                    character.hp += amount;
                    recoveredAmount = amount;
                }

                console.log(`${name} patched up and recovered ${recoveredAmount} HP!`);
            }
        }

        counter++;
        line = input[counter].split(' - ');
    }

    for (const character of characters) {
        console.log(character.name);
        console.log(` HP: ${character.hp}`);
        console.log(` Bullets: ${character.bullets}`);
    }
}

solve((["2",
"Gus 100 4",
"Walt 100 5",
"FireShot - Gus - Bandit",
"TakeHit - Walt - 100 - Bandit",
"Reload - Gus",
"Ride Off Into Sunset"]));