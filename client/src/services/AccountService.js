import Api from '@/services/Api'

export default {
    checkEmail(email) {
        return Api().post('api/users/checkEmail', email)
    },
    createAccount(credentials) {
        return Api().post('api/users/createAccount', credentials)
    },
    resendVerification(information) {
        return Api().post('api/users/resendVerificationEmail', information)
    },
    login(credentials) {
        return Api().post('api/users/login', credentials)
    }
}