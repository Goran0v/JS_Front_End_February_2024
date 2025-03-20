function solve(num, group, day) {
    const fridayS = 8.45;
    const fridayB = 10.9;
    const fridayR = 15;

    const saturdayS = 9.8;
    const saturdayB = 15.6;
    const saturdayR = 20;

    const sundayS = 10.46;
    const sundayB = 16;
    const sundayR = 22.5;

    let sum = 0;

    if (group === 'Students') {
        if (day === 'Friday') {
            sum = num * fridayS;
            if (num >= 30) {
                sum *= 0.85;
            }
        } else if (day === 'Saturday') {
            sum = num * saturdayS;
            if (num >= 30) {
                sum *= 0.85;
            }
        } else if (day === 'Sunday') {
            sum = num * sundayS;
            if (num >= 30) {
                sum *= 0.85;
            }
        }
    } else if (group === 'Business') {
        if (day === 'Friday') {
            sum = num * fridayB;
            if (num >= 100) {
                sum -= fridayB * 10;
            }
        } else if (day === 'Saturday') {
            sum = num * saturdayB;
            if (num >= 100) {
                sum -= saturdayB * 10;
            }
        } else if (day === 'Sunday') {
            sum = num * sundayB;
            if (num >= 100) {
                sum -= sundayB * 10;
            }
        }
    } else if (group === 'Regular') {
        if (day === 'Friday') {
            sum = num * fridayR;
            if (num >= 10 && num <= 20) {
                sum *= 0.95;
            }
        } else if (day === 'Saturday') {
            sum = num * saturdayR;
            if (num >= 10 && num <= 20) {
                sum *= 0.95;
            }
        } else if (day === 'Sunday') {
            sum = num * sundayR;
            if (num >= 10 && num <= 20) {
                sum *= 0.95;
            }
        }
    }

    console.log(`Total price: ${sum.toFixed(2)}`);
}

solve(40, 'Regular', 'Saturday');