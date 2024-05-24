import {crearEtapa, editarEtapa, eliminarEtapa, obtenerEtapas} from "../controllers/etapaControllers.js"

export const crearEtapaHandler = async (req,res) => {
    try {
        const nuevaEtapa = await crearEtapa (req.body)
        return res.status(200).json(nuevaEtapa);
    } catch (error) {
        console.log (error)
        return res.status(500).json({error:"Algo salió mal"})   
    }    
}

export const obtenerEtapasHandler = async (req,res) => {
    try{
        const etapas = await obtenerEtapas();
        return res.status(200).json(etapas);
        
    } catch(error){
        console.log(error)
        return res.status(500).json({error:"Algo salió mal"})     
    }

}


export const editarEtapaHandler = async(req,res) => {
    try {
        console.log(req.params);
        const {id} = req.params;
        const etapaActualizada = await editarEtapa(req.body, id);
        if(etapaActualizada === null) {
            return res.status(400).json({error:"Etapa incorrecta"})

        } return res.status(200).json(etapaActualizada);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Algo salió mal"}); 
    }

}

export const eliminarEtapaHandler = async(req,res) => {
    try {
        console.log(req.params);
        const {id} = req.params;
        const resultado = await eliminarEtapa(id);
        if(resultado.deleted == false){
           return res.status(400).json({error:"No encontro el id"});
        } return res.status(200).json(resultado);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Algo salió mal"}); 
    }

}

