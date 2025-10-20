class CotxeAutonom {
    sensors = ["sensorLlum", "sensorPluja", "sensorCarril", "sensorSemafor", "sensorProximitat", "sensorVelocitat", "sensorGPS"]
    actuadors = ["actuadorLlums", "actuadorDireccio", "actuadorFrenada", "actuadorAcceleracio", "actuadorClaxon", "actuadorNavegacio"]

    constructor(sensors: string[], actuadors: string[]) {
        this.sensors = sensors;
        this.actuadors = actuadors;
    }

    encendreLlums() {
        if (this.sensors.includes("sensorLlum")) {
            return this.actuadors.includes("actuadorLlums")
        }
    }


}