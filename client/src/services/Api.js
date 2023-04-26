import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `https://54.253.165.56/`
    })
}