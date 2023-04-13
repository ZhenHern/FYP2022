import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `https://13.211.21.159:22`
    })
}