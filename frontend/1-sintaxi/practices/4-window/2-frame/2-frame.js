"use strict";
/*
2 - Comunicació amb un marc (<iframe>)
Has de completar la funció setFrame(url, f), que es crida al clicar el botó Marc, de forma que mostri la següent informació en el frame f:

si el paràmetre url està buit, ha de mostrar la informació que retorna la funció informacio() creada en l'apartat anterior. Fes-ho utilitzant la propietat innerHTML.
en cas contrari, ha de mostrar la web de la URL indicada. Si no es pot mostrar perquè s'ha produït una excepció, ha de mostrar el missatge d'error amb un alert().
Proves amb l'opció "Marc"
Prova diferents URL (abans de cada prova, fes F5 per reiniciar la pàgina):

URL en blanc: mostrar la informació dins del frame.
URL http://www.sapalomera.cat: mostrar la web de l'institut dins del frame.
URL http://moodlecf.sapalomera.cat: el navegador hauria de mostrar un error per la consola.
Si en el frame es mostra una web i s'intenta mostrar una altra o la informació sense fer F5, hauria de saltar l'excepció i mostrar el missatge amb un alert().
*/
function setFrame(url, outputFrame) {
    try {
        if (url.trim() === '') {
            outputFrame.contentWindow.document.body.innerHTML = infoWindow();
        }
        else {
            outputFrame.src = url;
        }
    }
    catch (error) {
        alert('Error: ' + error.message);
    }
}
function setWindow(url) {
    try {
        if (url.trim() === '') {
            document.body.innerHTML = infoWindow();
        }
        else {
            window.location.href = url;
        }
    }
    catch (error) {
        alert('Error: ' + error.message);
    }
}
function saveName(name) {
    localStorage.setItem('name', name);
}
function getName() {
    const name = localStorage.getItem('name');
    const input = document.getElementById('input-name');
    if (input)
        input.value = name !== null && name !== void 0 ? name : 'No name saved';
    return name;
}
function infoWindow() {
    let info = '<h2>Window Info</h2>';
    // Screen information
    info += '<h3>Screen Information:</h3>';
    info += `<p>Width: ${window.screen.width}px</p>`;
    info += `<p>Height: ${window.screen.height}px</p>`;
    info += `<p>Available Width: ${window.screen.availWidth}px</p>`;
    info += `<p>Available Height: ${window.screen.availHeight}px</p>`;
    // Navigator information
    info += '<h3>Navigator Information:</h3>';
    info += `<p>User agent: ${navigator.userAgent}</p>`;
    info += `<p>Mobile device: ${/Mobi|Android/i.test(navigator.userAgent) ? 'Yes' : 'No'}</p>`;
    info += `<p>Operating system: ${navigator.platform}</p>`;
    info += `<p>Browser language: ${navigator.language}</p>`;
    // Current URL information
    info += '<h3>Current URL Information:</h3>';
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
