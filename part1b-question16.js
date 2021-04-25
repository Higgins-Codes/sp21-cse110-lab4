let statistics = {
    redCars: 21,
    bluecars: 35,
    greenCars: 12,
    raceCars: 5,
    blackCars: 5,
    blackCars: 40,
    rareCars: 2
}

for (const val in statistics) {
    if (val.charAt(0).toLowerCase() == 'r' || statistics[val] % 2 == 1) {
        console.log(`${val}: ${statistics[val]}`);
    }
}