arithmetic = {
    a: '3' + 2,
    b: '3' - 2,
    c: 3 + null,
    d: '3' + null,
    e: true + 3,
    f: false + null,
    g: '3' + undefined,
    h: '3' - undefined
}

for (const val in arithmetic) {
    console.log(`${val}: ${arithmetic[val]}`);
}

comparison = {
    a: '2' > 1,
    b: '2' < '12',
    c: 2 == '2',
    d: 2 === '2',
    e: true == 2,
    f: true === Boolean(2)
}

let index = 1;

for (const val in comparison) {
    console.log(`${index++}. ${val}: ${comparison[val]}`)
}