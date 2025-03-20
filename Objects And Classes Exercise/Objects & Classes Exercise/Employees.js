function solve(arr) {
    let employeeBook = {};

    for (let i = 0; i < arr.length; i++) {
        let employee = arr[i];
        employeeBook[employee] = employee.length;
    }

    for (let employee in employeeBook) {
        console.log(`Name: ${employee} -- Personal Number: ${employeeBook[employee]}`);
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']);