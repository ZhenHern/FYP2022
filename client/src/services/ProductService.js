import Api from '@/services/Api'

export default {
    async showProducts() {
        var response
        await Api().get('api/products/showProduct').then(function (res) {
            response = res.data
        })
        return response
    },
}