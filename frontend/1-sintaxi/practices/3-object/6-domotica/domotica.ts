// HELPERS

/**
 * Función para obtener un elemento HTMLInputElement por su ID
 * @param id ID del elemento
 * @returns El elemento HTMLInputElement o null si no se encuentra
 */
function getHTMLInputElement(id: string): HTMLInputElement | null {
    return document.getElementById(id) as HTMLInputElement | null;
}

/**
 * Función para agregar una línea de texto a un contenedor, una línea por llamada
 * @param element ID del contenedor
 * @param text Texto a agregar
 */
function appendLine(element: string, text: string) {
    const contenedor = document.getElementById(element) as HTMLElement | null;
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
function write(element: string, text: string) {
    const contenedor = document.getElementById(element) as HTMLElement | null;
    if (contenedor) {
        contenedor.innerHTML = text;
    }
}

// CLASES

// Sensores
abstract class Sensor {
    abstract obtenerValor(): string | number | boolean;
}

class SensorTemperatura extends Sensor {
    obtenerValor(): number {
        const el = getHTMLInputElement('temperatura');
        return el ? parseFloat(el.value) : 0;
    }
}

class SensorLluvia extends Sensor {
    obtenerValor(): boolean {
        const el = getHTMLInputElement('lluvia');
        return el ? el.checked : false;
    }
}

class SensorPresencia extends Sensor {
    obtenerValor(): string {
        const el = getHTMLInputElement('presencia');
        return el ? el.value : 'calle';
    }
}

class SensorHumo extends Sensor {
    obtenerValor(): boolean {
        const el = getHTMLInputElement('humo');
        return el ? el.checked : false;
    }
}

class SensorHora extends Sensor {
    obtenerValor(): string {
        return new Date().toLocaleTimeString();
    }
}

class SensorAlarma extends Sensor {
    obtenerValor(): boolean {
        const el = getHTMLInputElement('alarma');
        return el ? el.checked : false;
    }
}

// Actuadores
abstract class Actuador {
    abstract activar(): void;
    abstract desactivar(): void;
}

class Alarma extends Actuador {
    activar(): void { appendLine('contenedor', 'Alarma activada'); }
    desactivar(): void { appendLine('contenedor', 'Alarma desactivada.'); }
}

class Calefaccion extends Actuador {
    activar(): void { appendLine('contenedor','Calefacción activada.'); }
    desactivar(): void { appendLine('contenedor','Calefacción desactivada.'); }
}

class AireAcondicionado extends Actuador {
    activar(): void { appendLine('contenedor','Aire acondicionado activado.'); }
    desactivar(): void { appendLine('contenedor','Aire acondicionado desactivado.'); }
}

class Luces extends Actuador {
    activar(): void { appendLine('contenedor','Luces encendidas'); }
    desactivar(): void { appendLine('contenedor','Luces apagadas'); }
}

class Persianas extends Actuador {
    activar(): void { appendLine('contenedor','Persianas bajadas.'); }
    desactivar(): void { appendLine('contenedor','Persianas subidas.'); }
}

class Reloj {
    reloj = new SensorHora();
    activar(): void {}
}

// LÓGICA DEL SISTEMA

// Tipo para almacenar el estado actual y previo
type Estado = {
    alarma: boolean;
    calefaccion: boolean;
    aire: boolean;
    luces: string | null;
    persianasBajadas: boolean;
    humo: boolean;
    temperatura: number;
    presencia: string | null;
};

// Estado previo para detectar cambios
let estadoPrevio: Estado | null = null;

// Instancias de sensores y actuadores
const sensorTemperatura = new SensorTemperatura();
const sensorLluvia = new SensorLluvia();
const sensorPresencia = new SensorPresencia();
const sensorHumo = new SensorHumo();
const sensorAlarma = new SensorAlarma();
const alarma = new Alarma();
const calefaccion = new Calefaccion();
const aireAcondicionado = new AireAcondicionado();
const luces = new Luces();
const persianas = new Persianas();
const reloj = new Reloj();

/**
 * Función con la lógica del sistema de domótica
 * @returns void
 */
function sistemaDomotica() {
    // Obtener valores de los sensores
    const temp = sensorTemperatura.obtenerValor() as number;
    const lluvia = sensorLluvia.obtenerValor() as boolean;
    const presenciaVal = sensorPresencia.obtenerValor() as string;
    const humoVal = sensorHumo.obtenerValor() as boolean;
    const alarmaVal = sensorAlarma.obtenerValor() as boolean;

    // Estado por defecto basado en los sensores
    const estadoDefault: Estado = {
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
        estadoPrevio = {...estadoDefault};
    }

    // Array para registrar cambios
    const cambios: string[] = [];

    // Mostrar resumen del estado actual
    write('resumen', `Temperatura: <span class="resumen-data">${estadoDefault.temperatura}°C</span>
Climatización: <span class="resumen-data">${estadoDefault.calefaccion ? 'Calefacción' : estadoDefault.aire ? 'Aire acondicionado' : 'Apagado'}</span>
Lluvia: <span class="resumen-data">${lluvia ? 'Sí' : 'No'}</span>
Humo: <span class="resumen-data">${estadoDefault.humo ? 'Sí' : 'No'}</span>
Luces: <span class="resumen-data">${estadoDefault.luces !== 'calle' ? 'Encendidas' : 'Apagadas'}</span>
Persianas: <span class="resumen-data">${estadoDefault.persianasBajadas ? 'Bajadas' : 'Subidas'}</span>
Presencia: <span class="resumen-data">${estadoDefault.presencia}</span>
Alarma: <span class="resumen-data">${estadoDefault.alarma ? 'Activada' : 'Desactivada'}</span>`);

    // COMPARACIÓN Y ACTUACIÓN DE ESTADOS CON REGISTRO DE CAMBIOS

    // Gestión de la alarma
    if (estadoDefault.alarma !== estadoPrevio!.alarma) {
        if (estadoDefault.alarma) alarma.activar(); else alarma.desactivar();
        cambios.push('alarma');
    }

    // Alerta de presencia no autorizada
    if (estadoDefault.alarma && estadoDefault.presencia !== 'calle') {
        if (estadoDefault.alarma && estadoDefault.presencia !== 'calle') {
            appendLine('contenedor', '<span style="color: red;">¡Alerta de presencia no autorizada!</span>');
        } else if (!estadoDefault.alarma) {
            alarma.desactivar();
        }
    }

    // Alerta de humo
    if (estadoDefault.humo) {
        appendLine('contenedor', '<span style="color: red;">¡Alerta de humo!</span>');
    }

    // Gestión de calefacción
    if (estadoDefault.calefaccion !== estadoPrevio!.calefaccion) {
        if (estadoDefault.calefaccion) calefaccion.activar(); else calefaccion.desactivar();
        cambios.push('calefaccion');
    }

    // Gestión del aire acondicionado
    if (estadoDefault.aire !== estadoPrevio!.aire) {
        if (estadoDefault.aire) aireAcondicionado.activar(); else aireAcondicionado.desactivar();
        cambios.push('aire');
    }

    // Gestión de las luces basado en presencia
    if (estadoDefault.luces !== estadoPrevio!.luces) {
        if (estadoDefault.alarma) {
            return; 
        }
        if (estadoDefault.luces !== 'calle') { 
            luces.activar();
            appendLine('contenedor', `en ${estadoDefault.luces}`);
        } 
        if (estadoPrevio.luces != estadoDefault.luces && estadoPrevio.luces !== 'calle') {
            luces.desactivar();
            appendLine('contenedor', `en ${estadoPrevio.luces}`);
        }
        cambios.push('luces');
    }

    // Gestión de las persianas
    if (estadoDefault.persianasBajadas !== estadoPrevio!.persianasBajadas) {
        if (estadoDefault.persianasBajadas) persianas.activar(); else persianas.desactivar();
        cambios.push('persianas');
    }

    // Si hubo cambios, agregar separador y timestamp.
    if (cambios.length > 0) {
        const time = new Date().toLocaleTimeString();
        appendLine(`contenedor`, `<span style="color: gray;"><italic>${time}</italic></span>`);
        appendLine(`contenedor`, `--------------------------------`);
        appendLine(`contenedor`, `<br>`);
    }

    // actualizar estado previo
    estadoPrevio = estadoDefault;
}

// Inicialización al cargar la página, y ejecución continua cada segundo
window.addEventListener('DOMContentLoaded', () => {
    sistemaDomotica();
    setInterval(sistemaDomotica, 1000);
});

// Función para limpiar el contenedor de mensajes
function limpiarContenedor() {
    const contenedor = document.getElementById('contenedor') as HTMLElement | null;
    if (contenedor) {
        contenedor.innerText = '';
    }
}