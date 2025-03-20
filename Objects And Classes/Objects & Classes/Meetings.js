function solve(strings) {
    let scheduleBook = {};

    for (let i = 0; i < strings.length; i++) {
        let arr = strings[i].split(' ');

        if (!scheduleBook.hasOwnProperty(arr[0])) {
            scheduleBook[arr[0]] = arr[1];
            console.log(`Scheduled for ${arr[0]}`);
        } else {
            console.log(`Conflict on ${arr[0]}!`);
        }
    }

    for (let day in scheduleBook) {
        console.log(`${day} -> ${scheduleBook[day]}`);
    }
}

solve(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);