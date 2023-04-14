import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `https://52.63.170.37/`
    })
}