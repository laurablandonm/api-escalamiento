import Universidad from "..//modelos/Universidad.js";

export const crearUniversidad = async (requestUniversidad) => {
    const universidad = new Universidad();
    universidad.nombre = requestUniversidad.nombre;
    universidad.direccion = requestUniversidad.direccion;
    universidad.telefono = requestUniversidad.telefono;
    universidad.fechaCreacion = new Date();
    universidad.fechaActualizacion = new Date();
    return await universidad.save();
}

export const listarUniversidad = async () => {
    const listaUniversidad = await Universidad.find();
    return listaUniversidad;
}

export const editarUniversidad = async(requestUniversidad, idUniversidad) => {
    const universidad = await Universidad.findById(idUniversidad);
    if(universidad != null){
        universidad.nombre = requestUniversidad.nombre;
        universidad.direccion = requestUniversidad.direccion;
        universidad.telefono = requestUniversidad.telefono;
        universidad.fechaActualizacion = new Date();
        const universidadActualizada = await universidad.save();
        return universidadActualizada;
    } 
    return null;
}

export const eliminarUniversidad = async (id) => {
    const universidad = await Universidad.findByIdAndDelete(id);
    return (universidad != null) ? {deleted: true} : {deleted: false}
}
