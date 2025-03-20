function solve(input) {
    let string = input[0];

    let counter = 1;
    let currLine = input[counter].split('?');
    let task = currLine[0];
    while (task !== 'Buy') {
        if (task === 'TakeEven') {
            let message = '';
            for (let i = 0; i < string.length; i++) {
                if (i % 2 === 0) {
                    message += string[i];
                }
            }

            string = message;
            console.log(string);
        } else if (task === 'ChangeAll') {
            const substring = currLine[1];
            const replacement = currLine[2];

            string = string.split(substring).join(replacement);
            console.log(string);
        } else if (task === 'Reverse') {
            const substring = currLine[1];

            if (string.includes(substring)) {
                string = string.replace(substring, '');
                string += substring.split('').reverse().join('');

                console.log(string);
            } else {
                console.log('error');
            }
        }

        counter++;
        currLine = input[counter].split('?');
        task = currLine[0];
    }

    console.log(`The cryptocurrency is: ${string}`);
}

solve((["PZDfA2PkAsakhnefZ7aZ", 
"TakeEven",
"TakeEven",
"TakeEven",
"ChangeAll?Z?X",
"ChangeAll?A?R",
"Reverse?PRX",
"Buy"]));