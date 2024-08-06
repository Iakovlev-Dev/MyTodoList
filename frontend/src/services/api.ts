import axios, {AxiosInstance} from "axios";

const URL = "http://localhost:5000";
const REQUEST_TIMEOUT = 5000

export const createApi = (): AxiosInstance => {
    return axios.create({
        baseURL: URL,
        timeout: REQUEST_TIMEOUT,
    })

}
