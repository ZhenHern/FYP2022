import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `http://13.211.21.159:3001`
    })
}