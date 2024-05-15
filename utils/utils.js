import {ATLAS_USER, ATLAS_PASSWORD, DB_NAME, ATLAS_APP_NAME} from "../config.js"

export const ATLASURL = `mongodb://${ATLAS_USER}:${ATLAS_PASSWORD}@ac-fvifizb-shard-00-00.rs344pt.mongodb.net:27017,ac-fvifizb-shard-00-01.rs344pt.mongodb.net:27017,ac-fvifizb-shard-00-02.rs344pt.mongodb.net:27017/${DB_NAME}?ssl=true&replicaSet=atlas-d9x873-shard-0&authSource=admin&retryWrites=true&w=majority&appName=${ATLAS_APP_NAME}`


//export const ATLASURL = `mongodb+srv://practica:laura1990@laura.vdgbkym.mongodb.net/api_escalamiento_db?retryWrites=true&w=majority&appName=LAURA`
