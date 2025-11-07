"use strict";

function main() {
    // Símbols i lletres
    const SIMBOLS = "🎃💀👹👺👻🧙🧛🧟🪔🦉🍬🍭🔮🎭🕯👿👽🤡🤖👾🧚🧝👸🏚🐞🛸";
    const LLETRES = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const codi = "🤖👹🎃🤡🐞 🧟🎃🍭🍭🕯👸👻👻🎭 !!!";

    const simArr = [...SIMBOLS];  
    const codiArr = [...codi];

    const desencriptat = [];

    for (let i = 0; i < codiArr.length; i++) {
        const simbol = codiArr[i];


        if (simbol.trim() === "") {
            desencriptat.push(simbol);
        }

        const indexSimbol = simArr.indexOf(simbol);
        if (indexSimbol === -1) {
            desencriptat.push(simbol);
        } else {
            desencriptat.push(LLETRES.charAt(indexSimbol));
        }
    }

    document.getElementById("encriptat").innerText = codi;
    document.getElementById("desencriptat").innerText = desencriptat.join("");

}

window.onload = main;
