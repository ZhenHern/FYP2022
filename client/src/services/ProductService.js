import Api from '@/services/Api'

export default {
    async showProducts(category) {
        var response
        await Api().get('api/products/showProduct/' + category).then(function(res) {
            response = res.data
        })
        return response
    },
    async showAllCategories() {
        var response
        await Api().get('api/products/showCategory').then(function(res) {
            response = res.data
        }) 
        return response
    }
}