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
    },
    saveProfile(information) {
        return Api().post('api/users/saveProfile', information)
    },
    changePassword(information) {
        return Api().post('api/users/changePassword', information)
    },
    async checkCurrentUser() {
        var response 
        await Api().get('api/users/checkCurrentUser').then(function(res) {
            response = res.data
        })
        return response
    },
    async showCurrentUser(loginID) {
        var response 
        await Api().get('api/users/showCurrentUser/' + loginID).then(function(res) {
            response = res.data
        })
        return response
    }
}