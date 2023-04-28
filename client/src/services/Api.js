import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: process.env.NODE_ENV === 'production'
                 ? `https://54.253.165.56/`
                 : `http://localhost:3001/`
    })
}