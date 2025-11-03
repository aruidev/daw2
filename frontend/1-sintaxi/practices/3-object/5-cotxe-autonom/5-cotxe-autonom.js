"use strict";
class CotxeAutonom {
    constructor(sensors, actuadors) {
        this.sensors = ["sensorLlum", "sensorPluja", "sensorCarril", "sensorSemafor", "sensorProximitat", "sensorVelocitat", "sensorGPS"];
        this.actuadors = ["actuadorLlums", "actuadorDireccio", "actuadorFrenada", "actuadorAcceleracio", "actuadorClaxon", "actuadorNavegacio"];
        this.sensors = sensors;
        this.actuadors = actuadors;
    }
    encendreLlums() {
        if (this.sensors.includes("sensorLlum")) {
            return this.actuadors.includes("actuadorLlums");
        }
    }
}
