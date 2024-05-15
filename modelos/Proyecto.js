import {Schema, model} from "mongoose";

const ProyectoSchema = Schema({
    numero:{
        type: Number,
        unique: true,
        required: true
    },
    titulo:{
        type: String,
        required: true
    },
    fechaIniciacion: {
        type: Date,
        required: true
    },
    fechaEntrega: {
        type: Date,
        required: true
    },
    fechaCreacion: {
        type: Date,
        required: true
    },
    fechaActualizacion: {
        type: Date,
        required: true
    },
    cliente:{
        type: Schema.Types.ObjectId,
        ref: "Cliente",
        required: true        
    },
    tipoDeProyecto: {
        type: Schema.Types.ObjectId,
        ref: "TipoDeProyecto",
        required: true   
    },
    universidad: {
        type: Schema.Types.ObjectId,
        ref: "Universidad",
        required: true 
    },
    etapa:{
        type: Schema.Types.ObjectId,
        ref: "Etapa",
        required: true  
    }        
})

export default model("Proyecto", ProyectoSchema)