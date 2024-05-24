import { crearCliente, editarCliente, eliminarCliente, listarClientes } from "../controllers/clienteControllers.js"

export const crearClienteHandler = async (req, res) => {
    try {
        const nuevoCliente = await crearCliente(req.body);
        return res.status(200).json(nuevoCliente)
    } catch (error) {
        console.log (error)
        return res.status(500).json({error:"Algo salió mal"}) 
    }
}

export const listarClienteHandler = async (req, res) => {
    try {
        const listaClientes = await listarClientes();
        return res.status(200).json(listaClientes);
    } catch (error) {
        console.log (error)
        return res.status(500).json({error:"Algo salió mal"}) 
    }
}

export const editarClienteHandler = async(req,res) => {
    try {
        console.log(req.params);
        const {id} = req.params;
        const clienteActualizado = await editarCliente(req.body, id);
        if(clienteActualizado === null) {
            return res.status(400).json({error:"Cliente incorrecto"})

        } return res.status(200).json(clienteActualizado);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Algo salió mal"}); 
    }

}

export const eliminarClienteHandler = async(req,res) => {
    try {
        console.log(req.params);
        const {id} = req.params;
        const resultado = await eliminarCliente(id);
        if(resultado.deleted == false){
           return res.status(400).json({error:"No encontro el id"});
        } return res.status(200).json(resultado);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Algo salió mal"}); 
    }

}