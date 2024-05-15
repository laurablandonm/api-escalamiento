import { crearEtapa, obtenerEtapas } from "../controllers/etapaControllers.js"

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