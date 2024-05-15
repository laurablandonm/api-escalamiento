import {ATLAS_USER, ATLAS_PASSWORD, DB_NAME, ATLAS_APP_NAME} from "../config.js"



export const ATLASURL = `mongodb://${ATLAS_USER}:${ATLAS_PASSWORD}@ac-igzi6ex-shard-00-00.tcbkree.mongodb.net:27017,ac-igzi6ex-shard-00-01.tcbkree.mongodb.net:27017,ac-igzi6ex-shard-00-02.tcbkree.mongodb.net:27017/${DB_NAME}?ssl=true&replicaSet=atlas-369rw4-shard-0&authSource=admin&retryWrites=true&w=majority&appName=${ATLAS_APP_NAME}`


//export const ATLASURL = `mongodb+srv://practica:laura1990@laura.vdgbkym.mongodb.net/api_escalamiento_db?retryWrites=true&w=majority&appName=LAURA`
