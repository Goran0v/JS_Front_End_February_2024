function solve(json) {
    const obj = JSON.parse(json);

    Object.keys(obj).forEach(name => console.log(`${name}: ${obj[name]}`));
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');