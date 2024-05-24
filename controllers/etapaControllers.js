import Etapa from "../modelos/Etapa.js";

export const crearEtapa = async (requestEtapa) => {
    const etapa = new Etapa();
    etapa.nombre = requestEtapa.nombre;
    
    etapa.fechaCreacion = new Date();
    etapa.fechaActualizacion = new Date();
    return await etapa.save();
}

export const obtenerEtapas = async () => {
    const listaEtapas = await Etapa.find();
    return listaEtapas;
}

export const editarEtapa = async(requestEtapa, idEtapa) => {
    const etapa = await Etapa.findById(idEtapa);
    if(etapa != null){
        etapa.nombre = requestEtapa.nombre;
        etapa.fechaActualizacion = new Date();
        const etapaActualizada = await etapa.save();
        return etapaActualizada;
    } 
    return null;
}

export const eliminarEtapa = async (id) => {
    const etapa = await Etapa.findByIdAndDelete(id);
    return (etapa != null) ? {deleted: true} : {deleted: false}
}
