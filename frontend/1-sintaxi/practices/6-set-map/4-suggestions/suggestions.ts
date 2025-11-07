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
    const vistoPorUsuario = usuarios.get(usuario);
    if (!vistoPorUsuario) return new Set();

    const recomendaciones = new Set<string>();
    usuarios.forEach((vistoPorOtroUsuario, otroUsuario) => {
        if (otroUsuario === usuario) return;
        const coincidencias = new Set(
            [...vistoPorUsuario].filter(x => vistoPorOtroUsuario.has(x))
        );
        if (coincidencias.size >= 2) {
            vistoPorOtroUsuario.forEach(peli => {
                if (!vistoPorUsuario.has(peli)) {
                    recomendaciones.add(peli);
                }
            });
        }
    });
    return recomendaciones;
}

const recomendacionesParaAlice = recomendarContenido("Alice");
console.log("Recomendaciones para Alice:", recomendacionesParaAlice);

const recomendacionesParaBob = recomendarContenido("Bob");
console.log("Recomendaciones para Bob:", recomendacionesParaBob);

const recomendacionesParaCharlie = recomendarContenido("Charlie");
console.log("Recomendaciones para Charlie:", recomendacionesParaCharlie);