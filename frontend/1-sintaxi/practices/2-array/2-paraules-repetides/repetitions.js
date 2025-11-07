// @ts-ignore
import { diccionari } from "../Diccionari.js";
function eliminaParaulesRepetides() {
    const start = Date.now();
    let trobat;
    do {
        trobat = false;
        for (let i = 0; i < diccionari.length; i++) {
            const paraula = diccionari[i];
            const primera = diccionari.indexOf(paraula);
            if (primera !== i) {
                console.log(`Paraula repetida: "${paraula}" — posició ${i} (primera a ${primera}). Eliminant...`);
                diccionari.splice(i, 1); // elimina la ocurrència repetida
                trobat = true;
                break; // reinicia la cerca després d'una eliminació
            }
        }
        console.log(`Passada completa. Trobat = ${trobat}`);
    } while (trobat);
    const elapsed = Date.now() - start;
    console.log(`Temps total: ${elapsed} ms. Paraules restants: ${diccionari.length}`);
}
eliminaParaulesRepetides();
