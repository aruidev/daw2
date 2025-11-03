let alumne1 = {
    nom: "Joan",
    cognoms: "Garcia Lopez",
    curs: 1,
    moduls: [
        {
            nom: "Mòdul 1",
            notes: [8, 7, 9]
        },
        {
            nom: "Mòdul 2",
            notes: [6, 5, 7]
        }
    ]
};
let alumne2 = {
    nom: "Maria",
    cognoms: "Martinez Ruiz",
    curs: 2,
    moduls: [
        {
            nom: "Mòdul 1",
            notes: [8, 7, 9]
        },
        {
            nom: "Mòdul 2",
            notes: [1, 2, 3]
        }
    ]
};
let alumne3 = {
    nom: "Pere",
    cognoms: "Lopez Garcia",
    curs: 2,
    moduls: [
        {
            nom: "Mòdul 1",
            notes: [4, 3, 2]
        },
        {
            nom: "Mòdul 2",
            notes: [1, 2, 3]
        }
    ]
};
let alumnes = [alumne1, alumne2, alumne3];
const N_MODULS_CURS = 2;
function modificarAlumnes(alumnes) {
    let alumnesModificats = alumnes.map((alumne, i) => {
        const alumneModificat = {
            nom: alumne.nom,
            cognoms: alumne.cognoms,
            curs: alumne.curs,
            moduls: alumne.moduls.map(modul => ({
                nom: modul.nom,
                notes: [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
            }))
        };
        return alumneModificat;
    });
    return alumnesModificats;
}
function calcularMitjana(notes) {
    let suma = notes.reduce((acc, nota) => { return acc + nota; }, 0);
    return suma / notes.length;
}
function calcularMitjanaModul(alumne, nomModul) {
    let modul = alumne.moduls.find(modul => modul.nom === nomModul);
    if (modul) {
        return calcularMitjana(modul.notes);
    }
    else {
        return -1;
    }
}
function calcularNotaFinal(alumne) {
    if (alumne.moduls.length < N_MODULS_CURS)
        return undefined;
    if (alumne.curs < 2)
        return undefined;
    let notesModuls = alumne.moduls.map(modul => calcularMitjana(modul.notes));
    let notaFinal = calcularMitjana(notesModuls);
    alumne.notaFinal = parseFloat(notaFinal.toFixed(2));
    return notaFinal;
}
function ordenarAlumnesPerCognomINom(alumnes) {
    return alumnes.sort((a, b) => {
        return a.cognoms.localeCompare(b.cognoms) || a.nom.localeCompare(b.nom);
    });
}
function filtrarAlumnesPerModul(alumnes, nomModul) {
    return alumnes.filter(alumne => alumne.moduls.some(modul => modul.nom == nomModul));
}
function filtrarAlumnesPerNoModul(alumnes, nomModul) {
    return alumnes.filter(alumne => !alumne.moduls.some(modul => modul.nom == nomModul));
}
function filtrarAlumnesCursFinalitzat(alumnes) {
    return alumnes.filter(alumne => (alumne.notaFinal !== undefined) && (alumne.notaFinal >= 5));
}
function mostrarDadesAlumnes(alumnes) {
    const taula = alumnes.map(alumne => ({
        Nom: `${alumne.nom} ${alumne.cognoms}`,
        Curs: alumne.curs,
        Moduls: alumne.moduls.map(m => `${m.nom}: [${m.notes.join(", ")}]`).join("; "),
        NotaFinal: alumne.notaFinal !== undefined ? alumne.notaFinal : "Encara no ha acabat el cicle"
    }));
    console.table(taula);
}
// Merge alumnes i alumnes modificats
alumnes = alumnes.concat(modificarAlumnes(alumnes));
// Calcular nota final per a cada alumne
alumnes.forEach(alumne => calcularNotaFinal(alumne));
// Mostrar la taula d'alumnes amb les dades
mostrarDadesAlumnes(alumnes);
export {};
