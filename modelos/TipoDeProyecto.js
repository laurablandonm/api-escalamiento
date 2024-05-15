import {Schema, model} from "mongoose";

const TipoDeProyectoSchema = Schema({
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

export default model("TipoDeProyecto", TipoDeProyectoSchema)