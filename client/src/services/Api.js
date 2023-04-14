import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `https://13.211.124.167/`
    })
}