import { crearEtapa } from "../controllers/etapaControllers.js"

export const crearEtapaHandler = async (req,res) => {
    try {
        console.log (req)
        const nuevaEtapa = await crearEtapa (req.body)
        return res.status(200).json(nuevaEtapa);
    } catch (error) {
        console.log (error)
        return res.status(500).json({error:"Algo salió mal"})        
    }

}