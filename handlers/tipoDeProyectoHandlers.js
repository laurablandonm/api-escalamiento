import { crearTipoProyecto, editarTipoProyecto, eliminarTipoProyecto, listarTipoProyecto } from "../controllers/tipoProyectoControllers.js"



export const crearTipoProyectoHandler = async(req,res) => {

    try {
        const nuevoTipoProyecto = await crearTipoProyecto(req.body);
        return res.status(200).json(nuevoTipoProyecto);

    } catch (error) {
        console.log (error)
        return res.status(500).json({error:"Algo salió mal"})  
    }
}

export const listarTipoProyectoHandler = async(req,res) => {

    try {
        const listaProyectos = await listarTipoProyecto();
        return res.status(200).json(listaProyectos);

    } catch (error) {
        console.log (error)
        return res.status(500).json({error:"Algo salió mal"})  
    }
}


export const editarTipoProyectoHandler = async(req,res) => {
    try {
        const {id} = req.params;
        const tipoProyectoActualizado = await editarTipoProyecto(req.body, id);
        if(tipoProyectoActualizado === null) {
            return res.status(400).json({error:"tipo de proyecto incorrecta"})

        } return res.status(200).json(tipoProyectoActualizado);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Algo salió mal"}); 
    }
}

export const eliminarTipoProyectoHandler = async(req,res) => {
    try {
        const {id} = req.params;
        const resultado = await eliminarTipoProyecto(id);
        if(resultado.deleted == false){
           return res.status(400).json({error:"No encontro el id"});
        } return res.status(200).json(resultado);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Algo salió mal"}); 
    }

}