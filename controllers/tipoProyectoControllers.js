import TipoDeProyecto from "../modelos/TipoDeProyecto.js"



export const crearTipoProyecto = async(requestTipoProyecto) => {
    const tipoProyecto = new TipoDeProyecto();
    tipoProyecto.nombre = requestTipoProyecto.nombre
    tipoProyecto.fechaCreacion = new Date();
    tipoProyecto.fechaActualizacion = new Date();
    return await tipoProyecto.save()
}

export const listarTipoProyecto = async() => {
    const listaProyectos = await TipoDeProyecto.find();
    return listaProyectos;
}

export const editarTipoProyecto = async(requestTipoProyecto, idTipoProyecto) => {
    const tipoDeProyecto = await TipoDeProyecto.findById(idTipoProyecto)
    if (tipoDeProyecto != null){
        tipoDeProyecto.nombre = requestTipoProyecto.nombre;
        tipoDeProyecto.fechaActualizacion = new Date();
        const tipoProyectoActualizado = await tipoDeProyecto.save();
        return tipoProyectoActualizado;
    } 
    return null;
}

export const eliminarTipoProyecto = async (id) => {
    const tipodeproyecto = await TipoDeProyecto.findByIdAndDelete(id);
    return (tipodeproyecto != null) ? {deleted: true} : {deleted: false}

}


