import Api from '@/services/Api'

export default {
    async showProducts(category) {
        var response
        await Api().get('api/products/showProducts/' + category).then(function(res) {
            response = res.data
        })
        return response
    },
    async showProduct(productID) {
        var response
        await Api().get('api/products/showProduct/' + productID).then(function(res) {
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
    },
    async createProduct(product) {
        var response
        await Api().post('api/products/createProduct', product).then(function(res) {
            response = res.data
        })
        return response
    },
    async createIngredients(data) {
        var response
        await Api().post('api/products/createIngredients', data).then(function(res) {
            response = res.data
        })
        return response
    },
    async deleteProduct(productID) {
        var response
        await Api().post('api/products/deleteProduct', productID).then(function(res) {
            response = res.data
        })
        return response
    }
}