function solve(speed, zone) {
    if (zone === 'motorway') {
        if (speed > 130) {
            if (speed - 130 <= 20) {
                console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of 130 - speeding`);
            } else if (speed - 130 > 20 && speed - 130 <= 40) {
                console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of 130 - excessive speeding`);
            } else {
                console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of 130 - reckless driving`);
            }
        } else {
            console.log(`Driving ${speed} km/h in a 130 zone`);
        }
    } else if (zone === 'interstate') {
        if (speed > 90) {
            if (speed - 90 <= 20) {
                console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of 90 - speeding`);
            } else if (speed - 90 > 20 && speed - 90 <= 40) {
                console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of 90 - excessive speeding`);
            } else {
                console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of 90 - reckless driving`);
            }
        } else {
            console.log(`Driving ${speed} km/h in a 90 zone`);
        }
    } else if (zone === 'city') {
        if (speed > 50) {
            if (speed - 50 <= 20) {
                console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of 50 - speeding`);
            } else if (speed - 50 > 20 && speed - 50 <= 40) {
                console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of 50 - excessive speeding`);
            } else {
                console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of 50 - reckless driving`);
            }
        } else {
            console.log(`Driving ${speed} km/h in a 50 zone`);
        }
    } else if (zone === 'residential') {
        if (speed > 20) {
            if (speed - 20 <= 20) {
                console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of 20 - speeding`);
            } else if (speed - 20 > 20 && speed - 20 <= 40) {
                console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of 20 - excessive speeding`);
            } else {
                console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of 20 - reckless driving`);
            }
        } else {
            console.log(`Driving ${speed} km/h in a 20 zone`);
        }
    }
}

solve(120, 'interstate');