function printTime() {
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}

setInterval(printTime, 100);