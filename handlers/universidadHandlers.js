import {crearUniversidad,listarUniversidad,editarUniversidad,eliminarUniversidad} from "../controllers/universidadControllers.js";

export const crearUniversidadHandler = async (req,res) => {
    try {
        const nuevaUniversidad = await crearUniversidad (req.body)
        return res.status(200).json(nuevaUniversidad);
    } catch (error) {
        console.log (error)
        return res.status(500).json({error:"Algo salió mal"})   
    }    
}

export const listarUniversidadHandler = async (req,res) => {
    try{
        const universidad = await listarUniversidad();
        return res.status(200).json(universidad);
        
    } catch(error){
        console.log(error)
        return res.status(500).json({error:"Algo salió mal"})     
    }
}

export const editarUniversidadHandler = async(req,res) => {
    try {
        console.log(req.params);
        const {id} = req.params;
        const universidadActualizada = await editarUniversidad(req.body, id);
        if(universidadActualizada === null) {
            return res.status(400).json({error:"Universidad incorrecta"})

        } return res.status(200).json(universidadActualizada);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Algo salió mal"}); 
    }
}

export const eliminarUniversidadHandler = async(req,res) => {
    try {
        console.log(req.params);
        const {id} = req.params;
        const resultado = await eliminarUniversidad(id);
        if(resultado.deleted == false){
           return res.status(400).json({error:"No encontro el id"});
        } return res.status(200).json(resultado);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Algo salió mal"}); 
    }
}

