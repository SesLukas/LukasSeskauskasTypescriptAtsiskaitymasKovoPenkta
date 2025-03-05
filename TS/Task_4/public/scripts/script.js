"use strict";
function tekstasIBinara(tekstas) {
    let rezultatas = "1";
    for (let i = 1; i < tekstas.length; i++) {
        rezultatas += i % 2 === 0 ? "1" : "0";
    }
    return rezultatas;
}
