import Api from '@/services/Api'

export default {
    // createAccount(credentials) {
    //     return Api().post('api/users/createAccount', credentials)
    // }
    checkEmail(email) {
        return Api().post('api/users/checkEmail', email)
    }
}