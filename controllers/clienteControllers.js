import Cliente from "../modelos/Cliente.js"

export const crearCliente = async (requestCliente) => {
    const cliente = new Cliente();
    cliente.nombre = requestCliente.nombre;
    cliente.email = requestCliente.email;
    cliente.fechaCreacion = new Date();
    cliente.fechaActualizacion = new Date();
    const clienteCreado = await cliente.save();

    return clienteCreado;
}

export const listarClientes = async () => {
    const listaClientes = await Cliente.find();
    return listaClientes;
}

export const editarCliente = async (requestCliente, idCliente) => {
    const cliente = await Cliente.findById(idCliente);
    if(cliente != null){
        cliente.nombre = requestCliente.nombre;
        if (requestCliente.email !== cliente.email){
            cliente.email = requestCliente.email;            
        }
        cliente.fechaActualizacion = new Date();
        const clienteActualizada = await cliente.save();
        return clienteActualizada;
    } 
    return null;
}

export const eliminarCliente = async (id) => {
    const cliente = await Cliente.findByIdAndDelete(id);
    return (etapa != null) ? {deleted: true} : {deleted: false}

}



