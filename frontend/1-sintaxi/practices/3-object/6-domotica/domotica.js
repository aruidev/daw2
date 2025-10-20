// HELPERS
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * Función para obtener un elemento HTMLInputElement por su ID
 * @param id ID del elemento
 * @returns El elemento HTMLInputElement o null si no se encuentra
 */
function getHTMLInputElement(id) {
    return document.getElementById(id);
}
/**
 * Función para agregar una línea de texto a un contenedor, una línea por llamada
 * @param element ID del contenedor
 * @param text Texto a agregar
 */
function appendLine(element, text) {
    var contenedor = document.getElementById(element);
    if (contenedor) {
        contenedor.innerHTML += text + '<br>';
        contenedor.scrollTop = contenedor.scrollHeight;
    }
}
/**
 * Función para escribir texto en un contenedor, reemplazando su contenido
 * @param element ID del contenedor
 * @param text Texto a escribir
 */
function write(element, text) {
    var contenedor = document.getElementById(element);
    if (contenedor) {
        contenedor.innerHTML = text;
    }
}
// CLASES
// Sensores
var Sensor = /** @class */ (function () {
    function Sensor() {
    }
    return Sensor;
}());
var SensorTemperatura = /** @class */ (function (_super) {
    __extends(SensorTemperatura, _super);
    function SensorTemperatura() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SensorTemperatura.prototype.obtenerValor = function () {
        var el = getHTMLInputElement('temperatura');
        return el ? parseFloat(el.value) : 0;
    };
    return SensorTemperatura;
}(Sensor));
var SensorLluvia = /** @class */ (function (_super) {
    __extends(SensorLluvia, _super);
    function SensorLluvia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SensorLluvia.prototype.obtenerValor = function () {
        var el = getHTMLInputElement('lluvia');
        return el ? el.checked : false;
    };
    return SensorLluvia;
}(Sensor));
var SensorPresencia = /** @class */ (function (_super) {
    __extends(SensorPresencia, _super);
    function SensorPresencia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SensorPresencia.prototype.obtenerValor = function () {
        var el = getHTMLInputElement('presencia');
        return el ? el.value : 'calle';
    };
    return SensorPresencia;
}(Sensor));
var SensorHumo = /** @class */ (function (_super) {
    __extends(SensorHumo, _super);
    function SensorHumo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SensorHumo.prototype.obtenerValor = function () {
        var el = getHTMLInputElement('humo');
        return el ? el.checked : false;
    };
    return SensorHumo;
}(Sensor));
var SensorHora = /** @class */ (function (_super) {
    __extends(SensorHora, _super);
    function SensorHora() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SensorHora.prototype.obtenerValor = function () {
        return new Date().toLocaleTimeString();
    };
    return SensorHora;
}(Sensor));
var SensorAlarma = /** @class */ (function (_super) {
    __extends(SensorAlarma, _super);
    function SensorAlarma() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SensorAlarma.prototype.obtenerValor = function () {
        var el = getHTMLInputElement('alarma');
        return el ? el.checked : false;
    };
    return SensorAlarma;
}(Sensor));
// Actuadores
var Actuador = /** @class */ (function () {
    function Actuador() {
    }
    return Actuador;
}());
var Alarma = /** @class */ (function (_super) {
    __extends(Alarma, _super);
    function Alarma() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Alarma.prototype.activar = function () { appendLine('contenedor', 'Alarma activada'); };
    Alarma.prototype.desactivar = function () { appendLine('contenedor', 'Alarma desactivada.'); };
    return Alarma;
}(Actuador));
var Calefaccion = /** @class */ (function (_super) {
    __extends(Calefaccion, _super);
    function Calefaccion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Calefaccion.prototype.activar = function () { appendLine('contenedor', 'Calefacción activada.'); };
    Calefaccion.prototype.desactivar = function () { appendLine('contenedor', 'Calefacción desactivada.'); };
    return Calefaccion;
}(Actuador));
var AireAcondicionado = /** @class */ (function (_super) {
    __extends(AireAcondicionado, _super);
    function AireAcondicionado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AireAcondicionado.prototype.activar = function () { appendLine('contenedor', 'Aire acondicionado activado.'); };
    AireAcondicionado.prototype.desactivar = function () { appendLine('contenedor', 'Aire acondicionado desactivado.'); };
    return AireAcondicionado;
}(Actuador));
var Luces = /** @class */ (function (_super) {
    __extends(Luces, _super);
    function Luces() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Luces.prototype.activar = function () { appendLine('contenedor', 'Luces encendidas'); };
    Luces.prototype.desactivar = function () { appendLine('contenedor', 'Luces apagadas'); };
    return Luces;
}(Actuador));
var Persianas = /** @class */ (function (_super) {
    __extends(Persianas, _super);
    function Persianas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Persianas.prototype.activar = function () { appendLine('contenedor', 'Persianas bajadas.'); };
    Persianas.prototype.desactivar = function () { appendLine('contenedor', 'Persianas subidas.'); };
    return Persianas;
}(Actuador));
var Reloj = /** @class */ (function () {
    function Reloj() {
        this.reloj = new SensorHora();
    }
    Reloj.prototype.activar = function () { };
    return Reloj;
}());
// Estado previo para detectar cambios
var estadoPrevio = null;
// Instancias de sensores y actuadores
var sensorTemperatura = new SensorTemperatura();
var sensorLluvia = new SensorLluvia();
var sensorPresencia = new SensorPresencia();
var sensorHumo = new SensorHumo();
var sensorAlarma = new SensorAlarma();
var alarma = new Alarma();
var calefaccion = new Calefaccion();
var aireAcondicionado = new AireAcondicionado();
var luces = new Luces();
var persianas = new Persianas();
var reloj = new Reloj();
/**
 * Función con la lógica del sistema de domótica
 * @returns void
 */
function sistemaDomotica() {
    // Obtener valores de los sensores
    var temp = sensorTemperatura.obtenerValor();
    var lluvia = sensorLluvia.obtenerValor();
    var presenciaVal = sensorPresencia.obtenerValor();
    var humoVal = sensorHumo.obtenerValor();
    var alarmaVal = sensorAlarma.obtenerValor();
    // Estado por defecto basado en los sensores
    var estadoDefault = {
        alarma: !!alarmaVal,
        calefaccion: temp < 20,
        aire: temp > 25,
        presencia: presenciaVal !== 'calle' ? presenciaVal : 'calle',
        luces: presenciaVal !== 'calle' ? presenciaVal : 'calle',
        persianasBajadas: lluvia,
        humo: !!humoVal,
        temperatura: temp
    };
    // Inicializar estado previo si es la primera ejecución
    if (!estadoPrevio) {
        estadoPrevio = __assign({}, estadoDefault);
    }
    // Array para registrar cambios
    var cambios = [];
    // Mostrar resumen del estado actual
    write('resumen', "Temperatura: <span class=\"resumen-data\">".concat(estadoDefault.temperatura, "\u00B0C</span>\nClimatizaci\u00F3n: <span class=\"resumen-data\">").concat(estadoDefault.calefaccion ? 'Calefacción' : estadoDefault.aire ? 'Aire acondicionado' : 'Apagado', "</span>\nLluvia: <span class=\"resumen-data\">").concat(lluvia ? 'Sí' : 'No', "</span>\nHumo: <span class=\"resumen-data\">").concat(estadoDefault.humo ? 'Sí' : 'No', "</span>\nLuces: <span class=\"resumen-data\">").concat(estadoDefault.luces !== 'calle' ? 'Encendidas' : 'Apagadas', "</span>\nPersianas: <span class=\"resumen-data\">").concat(estadoDefault.persianasBajadas ? 'Bajadas' : 'Subidas', "</span>\nPresencia: <span class=\"resumen-data\">").concat(estadoDefault.presencia, "</span>\nAlarma: <span class=\"resumen-data\">").concat(estadoDefault.alarma ? 'Activada' : 'Desactivada', "</span>"));
    // COMPARACIÓN Y ACTUACIÓN DE ESTADOS CON REGISTRO DE CAMBIOS
    // Gestión de la alarma
    if (estadoDefault.alarma !== estadoPrevio.alarma) {
        if (estadoDefault.alarma)
            alarma.activar();
        else
            alarma.desactivar();
        cambios.push('alarma');
    }
    // Alerta de presencia no autorizada
    if (estadoDefault.alarma && estadoDefault.presencia !== 'calle') {
        if (estadoDefault.alarma && estadoDefault.presencia !== 'calle') {
            appendLine('contenedor', '<span style="color: red;">¡Alerta de presencia no autorizada!</span>');
        }
        else if (!estadoDefault.alarma) {
            alarma.desactivar();
        }
    }
    // Alerta de humo
    if (estadoDefault.humo) {
        appendLine('contenedor', '<span style="color: red;">¡Alerta de humo!</span>');
    }
    // Gestión de calefacción
    if (estadoDefault.calefaccion !== estadoPrevio.calefaccion) {
        if (estadoDefault.calefaccion)
            calefaccion.activar();
        else
            calefaccion.desactivar();
        cambios.push('calefaccion');
    }
    // Gestión del aire acondicionado
    if (estadoDefault.aire !== estadoPrevio.aire) {
        if (estadoDefault.aire)
            aireAcondicionado.activar();
        else
            aireAcondicionado.desactivar();
        cambios.push('aire');
    }
    // Gestión de las luces basado en presencia
    if (estadoDefault.luces !== estadoPrevio.luces) {
        if (estadoDefault.alarma) {
            return;
        }
        if (estadoDefault.luces !== 'calle') {
            luces.activar();
            appendLine('contenedor', "en ".concat(estadoDefault.luces));
        }
        if (estadoPrevio.luces != estadoDefault.luces && estadoPrevio.luces !== 'calle') {
            luces.desactivar();
            appendLine('contenedor', "en ".concat(estadoPrevio.luces));
        }
        cambios.push('luces');
    }
    // Gestión de las persianas
    if (estadoDefault.persianasBajadas !== estadoPrevio.persianasBajadas) {
        if (estadoDefault.persianasBajadas)
            persianas.activar();
        else
            persianas.desactivar();
        cambios.push('persianas');
    }
    // Si hubo cambios, agregar separador y timestamp.
    if (cambios.length > 0) {
        var time = new Date().toLocaleTimeString();
        appendLine("contenedor", "<span style=\"color: gray;\"><italic>".concat(time, "</italic></span>"));
        appendLine("contenedor", "--------------------------------");
        appendLine("contenedor", "<br>");
    }
    // actualizar estado previo
    estadoPrevio = estadoDefault;
}
// Inicialización al cargar la página, y ejecución continua cada segundo
window.addEventListener('DOMContentLoaded', function () {
    sistemaDomotica();
    setInterval(sistemaDomotica, 1000);
});
// Función para limpiar el contenedor de mensajes
function limpiarContenedor() {
    var contenedor = document.getElementById('contenedor');
    if (contenedor) {
        contenedor.innerText = '';
    }
}
