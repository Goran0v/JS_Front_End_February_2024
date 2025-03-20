function solve(array) {
    class Cat {
        constructor (catName, age) {
            this.catName = catName,
            this.age = age
        }

        meow() {
            console.log(`${this.catName}, age ${this.age} says Meow`);
        }
    }

    for (let i = 0; i < array.length; i++) {
        const catInfo = array[i].split(' ');
        let cat = new Cat(catInfo[0], catInfo[1]);
        cat.meow();
    }
}

solve(['Mellow 2', 'Tom 5']);