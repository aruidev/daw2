const contenido = new Map<string, object>();

contenido.set("El Padrino", { serie: false, genero: "Drama" });
contenido.set("Titanic", { serie: false, genero: "Romance" });
contenido.set("Avatar", { serie: false, genero: "Ciencia Ficción" });
contenido.set("Los Simpson", { serie: true, genero: "Comedia" });
contenido.set("Rick y Morty", { serie: true, genero: "Ciencia Ficción" });
contenido.set("Stranger Things", { serie: true, genero: "Terror" });

const usuarios = new Map<string, Set<string>>();

usuarios.set("Alice", new Set(["El Padrino", "Titanic", "Los Simpson"]));
usuarios.set("Bob", new Set(["El Padrino", "Avatar", "Rick y Morty"]));
usuarios.set("Charlie", new Set(["Titanic", "Stranger Things", "Los Simpson"]));
usuarios.set("Diana", new Set(["El Padrino", "Titanic", "Avatar", "Rick y Morty"]));

function recomendarContenido(usuario: string): Set<string> {
    // Obtener el conjunto de títulos que ya ha visto el usuario dado.
    const vistoPorUsuario = usuarios.get(usuario);
    // Si no existe el usuario en el Map, devolvemos un Set vacío (no hay recomendaciones).
    if (!vistoPorUsuario) return new Set();

    // Inicializamos un Set para acumular las recomendaciones (evita duplicados).
    const recomendaciones = new Set<string>();

    // Recorremos todos los usuarios para comparar sus vistas con las del usuario objetivo.
    usuarios.forEach((vistoPorOtroUsuario, otroUsuario) => {
        // Ignoramos la comparación consigo mismo.
        if (otroUsuario === usuario) return;

        // Calculamos la "intersección": los títulos que aparecen tanto en vistoPorUsuario
        // como en vistoPorOtroUsuario.
        // [...vistoPorUsuario] convierte el Set del usuario en un array para poder usar filter.
        // filter mantiene sólo los elementos para los que vistoPorOtroUsuario.has(x) es true.
        // new Set(...) vuelve a convertir el array en Set (aunque en este caso no hay duplicados).
        const interseccion = new Set(
            [...vistoPorUsuario].filter(x => vistoPorOtroUsuario.has(x))
        );

        // Si la intersección tiene al menys 3 elements, consideramos que este altre usuari
        // té gustos suficientement parecidos com per prendre recomanacions.
        if (interseccion.size >= 3) {
            // Recorrem tot el que ha vist el altre usuari i afegim a recomendacions
            // aquelles que el usuari objectiu encara no ha vist.
            vistoPorOtroUsuario.forEach(peli => {
                if (!vistoPorUsuario.has(peli)) {
                    recomendaciones.add(peli);
                }
            });
        }
    });

    // Devolvemos el Set amb les recomanacions (sense duplicats).
    return recomendaciones;
}