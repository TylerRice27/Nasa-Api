import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"







class ApodsService {

    async getApods() {
        const res = await api.get()
        logger.log('get apod', res.data)
        AppState.apods = res.data
    }


}








export const apodsService = new ApodsService()