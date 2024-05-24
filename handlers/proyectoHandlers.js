import { crearProyecto, listarProyecto, editarProyecto } from "../controllers/proyectoControllers.js";

export const crearProyectoHandler = async (req,res) => {
    try {
        const nuevoProyecto = await crearProyecto (req.body)
        return res.status(200).json(nuevoProyecto);
    } catch (error) {
        console.log (error)
        return res.status(500).json({error:"Algo salió mal"})   
    }    
}

export const listarProyectoHandler = async (req,res) => {
    try{
        const proyecto = await listarProyecto();
        return res.status(200).json(proyecto);
        
    } catch(error){
        console.log(error)
        return res.status(500).json({error:"Algo salió mal"})     
    }
}

export const editarProyectoHandler = async(req,res) => {
    try {
        console.log(req.params);
        const {id} = req.params;
        const proyectoActualizado = await editarProyecto(req.body, id);
        if(proyectoActualizado === null) {
            return res.status(400).json({error:"Proyecto incorrecto"})

        } return res.status(200).json(proyectoActualizado);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Algo salió mal"}); 
    }
}