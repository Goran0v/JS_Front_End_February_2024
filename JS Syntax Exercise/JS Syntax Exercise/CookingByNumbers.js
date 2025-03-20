function solve(number, c1, c2, c3, c4, c5) {
    let num = Number(number);

    if (c1 === 'chop') {
        num /= 2;
    } else if (c1 === 'dice') {
        num = Math.sqrt(num);
    } else if (c1 === 'spice') {
        num++;
    } else if (c1 === 'bake') {
        num *= 3;
    } else if (c1 === 'fillet') {
        num *= 0.8;
    }
    console.log(num);

    if (c2 === 'chop') {
        num /= 2;
    } else if (c2 === 'dice') {
        num = Math.sqrt(num);
    } else if (c2 === 'spice') {
        num++;
    } else if (c2 === 'bake') {
        num *= 3;
    } else if (c2 === 'fillet') {
        num *= 0.8;
    }
    console.log(num);

    if (c3 === 'chop') {
        num /= 2;
    } else if (c3 === 'dice') {
        num = Math.sqrt(num);
    } else if (c3 === 'spice') {
        num++;
    } else if (c3 === 'bake') {
        num *= 3;
    } else if (c3 === 'fillet') {
        num *= 0.8;
    }
    console.log(num);

    if (c4 === 'chop') {
        num /= 2;
    } else if (c4 === 'dice') {
        num = Math.sqrt(num);
    } else if (c4 === 'spice') {
        num++;
    } else if (c4 === 'bake') {
        num *= 3;
    } else if (c4 === 'fillet') {
        num *= 0.8;
    }
    console.log(num);

    if (c5 === 'chop') {
        num /= 2;
    } else if (c5 === 'dice') {
        num = Math.sqrt(num);
    } else if (c5 === 'spice') {
        num++;
    } else if (c5 === 'bake') {
        num *= 3;
    } else if (c5 === 'fillet') {
        num *= 0.8;
    }
    console.log(num);
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');