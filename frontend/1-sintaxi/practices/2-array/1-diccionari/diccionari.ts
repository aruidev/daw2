const diccionari: string[] = ["alt", "ablatiu", "amic", "amor", "aigua", "animal", "arbre", "avió", "bosc", "casa", "cel", "cervell", "ciutat", "codi", "cotxe", "dia", "dona", "escola", "esport", "foc", "força", "gos", "home", "illa", "llibre", "llum", "mar", "música", "natura", "nit", "núvol", "ocell", "ordinador", "país", "pluja", "riu", "sol", "terra", "vent", "vida", "veu", "universitat", "xarxa", "zebra"];

function agafarParaulesRandom(numParaules: number): string[] {
    const paraulesSeleccionades: string[] = [];
    for (let i = 0; i < numParaules; i++) {
        const indexRandom = Math.floor(Math.random() * diccionari.length);
        paraulesSeleccionades.push(diccionari[indexRandom]);
    }
    return paraulesSeleccionades;
}

console.log(agafarParaulesRandom(10).join("\n----------\n"));