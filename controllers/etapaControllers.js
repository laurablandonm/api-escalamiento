import Etapa from "../modelos/Etapa.js";

export const crearEtapa = async (requestEtapa) => {
    const etapa = new Etapa();
    etapa.nombre = requestEtapa.nombre;
    etapa.fechaCreacion = new Date();
    etapa.fechaActualizacion = new Date();
    return await etapa.save();
}

