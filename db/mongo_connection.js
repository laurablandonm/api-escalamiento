import mongoose from "mongoose";
import {ATLASURL} from "../utils/utils.js"

export const getConexion = async () => {
    try {
        await mongoose.connect(ATLASURL)
        console.log("conectado a base de datos")    
    } catch (error) {
        console.log(error)   
    }
}