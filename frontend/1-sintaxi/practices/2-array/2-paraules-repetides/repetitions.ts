// @ts-ignore
import { diccionari } from "../Diccionari.js";


function eliminaParaulesRepetides(): void {
    const start = Date.now();
    let trobat: boolean;
    do {
        trobat = false;
        for (let i = 0; i < diccionari.length; i++) {
            const paraula = diccionari[i];
            const primera = diccionari.indexOf(paraula);
            if (primera !== i) {
                console.log(`Paraula repetida: "${paraula}" — posició ${i} (primera a ${primera}). Eliminant...`);
                diccionari.splice(i, 1);
                trobat = true;
                break;
            }
        }
        console.log(`Passada completa. Trobat = ${trobat}`);
    } while (trobat);
    const elapsed = Date.now() - start;
    console.log(`Temps total: ${elapsed} ms. Paraules restants: ${diccionari.length}`);
}

eliminaParaulesRepetides();