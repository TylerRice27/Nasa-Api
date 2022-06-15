import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"







class ApodsService {

    async getApods() {
        const res = await api.get()
        logger.log('get apod', res.data)
        AppState.apods = res.data
    }

    // come back to this later
    // I believe this will allow me to write a function
    // to be able get different apods based on the date
    async changeApod() {


    }

}








export const apodsService = new ApodsService()