import {Schema, model} from "mongoose";

const EtapaSchema = Schema({
    nombre:{
        type: String,
        required: true        
    },
    fechaCreacion: {
        type: Date,
        required: true
    },
    fechaActualizacion: {
        type: Date,
        required: true
    }    
})

export default model ("Etapa", EtapaSchema)