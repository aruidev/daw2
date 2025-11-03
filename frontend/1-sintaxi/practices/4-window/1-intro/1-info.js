"use strict";
/*
1 - Obtenir informació del sistema
La funció informacio() ha de retornar un string HTML amb la següent informació:

Informació sobre la pantalla:

Amplada:
Alçada:
Amplada disponible:
Alçada disponible:
Informació sobre el navegador:

User agent:
Mobile device:
Operating system:
Browser language:
Informació sobre la URL actual (seria convenient provar-ho posant el document en un servidor):

Hash:
Host:
Hostname:
Href:
Origin:
Pathname:
Port:
Protocol:
Search:
*/
function informacio() {
    let info = '<h2>Informació del sistema</h2>';
    // Informació sobre la pantalla
    info += '<h3>Informació sobre la pantalla:</h3>';
    info += `<p>Amplada: ${window.screen.width}px</p>`;
    info += `<p>Alçada: ${window.screen.height}px</p>`;
    info += `<p>Amplada disponible: ${window.screen.availWidth}px</p>`;
    info += `<p>Alçada disponible: ${window.screen.availHeight}px</p>`;
    // Informació sobre el navegador
    info += '<h3>Informació sobre el navegador:</h3>';
    info += `<p>User agent: ${navigator.userAgent}</p>`;
    info += `<p>Mobile device: ${/Mobi|Android/i.test(navigator.userAgent) ? 'Sí' : 'No'}</p>`;
    info += `<p>Operating system: ${navigator.platform}</p>`;
    info += `<p>Browser language: ${navigator.language}</p>`;
    // Informació sobre la URL actual
    info += '<h3>Informació sobre la URL actual:</h3>';
    info += `<p>Hash: ${window.location.hash}</p>`;
    info += `<p>Host: ${window.location.host}</p>`;
    info += `<p>Hostname: ${window.location.hostname}</p>`;
    info += `<p>Href: ${window.location.href}</p>`;
    info += `<p>Origin: ${window.location.origin}</p>`;
    info += `<p>Pathname: ${window.location.pathname}</p>`;
    info += `<p>Port: ${window.location.port || 'default'}</p>`;
    info += `<p>Protocol: ${window.location.protocol}</p>`;
    info += `<p>Search: ${window.location.search}</p>`;
    console.log(info);
    return info;
}
