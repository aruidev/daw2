"use strict";
/*
    CATEGORIES SEGONS L'IMC
        IMC < 16		Infrapès sever
16   <= IMC < 17		Infrapès
17   <= IMC < 18.5		Infrapès lleu
18.5 <= IMC < 25		Pes normal
25   <= IMC < 30		Sobrepès
30   <= IMC < 35		Obesitat lleu
35   <= IMC < 40		Obesitat
        IMC >= 40		Obesitat severa
*/
/**
 * Calcular l'IMC (Índex de Massa Corporal) a partir del pes i l'altura.
 *
 * @param {string} pes		Pes en Kg
 * @param {string} altura	Altura en cm
 * @return 			IMC-Categoria: "24,3-Pes normal"
 *					L'IMC s'ha de mostrar amb un decimal i format local
 *
 *					Exemples:
 *					80 Kg i 180 cm --> "24,7-Pes normal"
 *					81 Kg i 180 cm --> "25,0-Sobrepès"
 *					90 Kg i 173 cm --> "30,1-Obesitat lleu"
 */
function imc(pes, altura) {
    const pesVal = parseFloat(pes);
    const alturaVal = parseFloat(altura) / 100; // Convertir cm a m
    if (isNaN(pesVal) || isNaN(alturaVal) || alturaVal <= 0) {
        return "Error: Pes i altura han de ser números vàlids i l'altura ha de ser major que zero.";
    }
    const imcVal = pesVal / (alturaVal * alturaVal);
    switch (true) {
        case imcVal < 16:
            return imcVal.toFixed(1) + "-Infrapès sever";
        case imcVal >= 16 && imcVal < 17:
            return imcVal.toFixed(1) + "-Infrapès";
        case imcVal >= 17 && imcVal < 18.5:
            return imcVal.toFixed(1) + "-Infrapès lleu";
        case imcVal >= 18.5 && imcVal < 25:
            return imcVal.toFixed(1) + "-Pes normal";
        case imcVal >= 25 && imcVal < 30:
            return imcVal.toFixed(1) + "-Sobrepès";
        case imcVal >= 30 && imcVal < 35:
            return imcVal.toFixed(1) + "-Obesitat lleu";
        case imcVal >= 35 && imcVal < 40:
            return imcVal.toFixed(1) + "-Obesitat";
        case imcVal >= 40:
            return imcVal.toFixed(1) + "-Obesitat severa";
        default:
            return "Invalid input";
    }
}
/**
 * Convertir unitats de longitud.
 *
 * @param valor	Longitud a convertir
 * @param uni1	Unitats de la longitud (mm, cm, dm, m, Dm, Hm, Km)
 * @param uni2	A quines unitats s'ha de convertir (mm, cm, dm, m, Dm, Hm, Km)
 * @return 		Longitud convertida amb 4 dígits significatius
 *
 * 						Exemples:
 * 						12.4 Dm --> 124.0 m
 * 						12.4 Km --> 1.240e+4 m
 */
function convertidor(valor, uni1, uni2) {
    return "Funció no implementada";
}
