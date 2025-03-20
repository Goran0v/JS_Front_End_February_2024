function solve(fruit, weight, price) {
    let moneyNeeded = 0;
    weight /= 1000;
    moneyNeeded += price * weight;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.8);