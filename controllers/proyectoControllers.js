import Proyecto from "../modelos/Proyecto.js";

export const crearProyecto = async (requestProyecto) => {
    const proyecto = new Proyecto();
    proyecto.numero = requestProyecto.numero;
    proyecto.titulo = requestProyecto.titulo;
    proyecto.fechaIniciacion = requestProyecto.fechaIniciacion;
    proyecto.fechaEntrega = requestProyecto.fechaEntrega;
    proyecto.cliente = requestProyecto.cliente.id;
    proyecto.universidad = requestProyecto.universidad.id;
    proyecto.tipoDeProyecto = requestProyecto.tipoDeProyecto.id;
    proyecto.etapa = requestProyecto.etapa.id;
    proyecto.fechaCreacion = new Date();
    proyecto.fechaActualizacion = new Date();
    return await proyecto.save();
}

export const listarProyecto = async () => {
    const listaProyecto = await Proyecto.find().populate([
        {
            path:"cliente",
            select: "_id nombre email"
        },
        {
            path:"universidad",
            select: "_id nombre direccion telefono"
        },
        {
            path:"tipoDeProyecto",
            select: "_id nombre"
        },
        {
            path:"etapa",
            select: "_id nombre"
        }
    ]);
    return listaProyecto;
}

export const editarProyecto = async(requestProyecto, idProyecto) => {
    const proyecto = await Proyecto.findById(idProyecto);
    if(proyecto != null){
        proyecto.numero = requestProyecto.numero;
        proyecto.titulo = requestProyecto.titulo;
        proyecto.fechaIniciacion = requestProyecto.fechaIniciacion;
        proyecto.fechaEntrega = requestProyecto.fechaEntrega;
        proyecto.cliente = requestProyecto.cliente.id;
        proyecto.universidad = requestProyecto.universidad.id;
        proyecto.tipoDeProyecto = requestProyecto.tipoDeProyecto.id;
        proyecto.etapa = requestProyecto.etapa.id;
        proyecto.fechaCreacion = new Date();
        proyecto.fechaActualizacion = new Date();
        const proyectoActualizado = await proyecto.save();
        return proyectoActualizado;
    } 
    return null;
}


