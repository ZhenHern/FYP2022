import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `http://52.63.170.37:3001/`
    })
}