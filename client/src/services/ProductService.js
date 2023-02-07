import Api from '@/services/Api'

export default {
    async showProducts(category) {
        var response
        await Api().get('api/products/showProduct/' + category).then(function(res) {
            response = res.data
        })
        return response
    },
    async showAllProducts() {
        var response
        await Api().get('api/products/showAllProducts').then(function(res) {
            response = res.data
        })
        return response
    },
    async showAllCategories() {
        var response
        await Api().get('api/products/showAllCategories').then(function(res) {
            response = res.data
        }) 
        return response
    },
    async showCategory(categoryID) {
        var response
        await Api().get('api/products/showCategory/' + categoryID).then(function(res) {
            response = res.data
        }) 
        return response
    },
    async showDetails(productID) {
        var response
        await Api().get('api/products/showDetails/' + productID).then(function(res) {
            response = res.data
        })
        return response
    },
    async showIngredients(productID) {
        var response
        await Api().get('api/products/showIngredients/' + productID).then(function(res) {
            response = res.data
        })
        return response
    }
}