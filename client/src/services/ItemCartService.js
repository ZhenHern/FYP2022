import Api from './Api'

export default {
    addToCart(userID, productID, quantity) {
        return Api().post('api/itemCarts/addToCart', userID, productID, quantity)
    },
    addQuantity(itemID) {
        return Api().post('api/itemCarts/addQuantity', itemID)
    },
    subtractQuantity(itemID) {
        return Api().post('api/itemCarts/subtractQuantity', itemID)
    },
    removeItem(itemID) {
        return Api().post('api/itemCarts/removeItem', itemID)
    },
    completeOrder(itemCartID) {
        return Api().post('api/itemCarts/completeOrder', itemCartID)    
    },
    changeStatus(itemCart) {
        return Api().post('api/itemCarts/changeStatus', itemCart)    
    },
    async getCurrentCart(userID) {
        var response
        await Api().get('api/itemCarts/getCurrentCart/' + userID).then(function(res) {
            response = res.data
        })
        return response
    },
    async showAllItems(itemCartID) {
        var response
        await Api().get('api/itemCarts/showAllItems/' + itemCartID).then(function(res) {
            response = res.data
        })
        return response
    },
    async showPaidOrders(userID) {
        var response
        await Api().get('api/itemCarts/showPaidOrders/' + userID).then(function(res) {
            response = res.data
        })
        return response
    },
    async showOrder(itemCartID) {
        var response
        await Api().get('api/itemCarts/showOrder/' + itemCartID).then(function(res) {
            response = res.data
        })
        return response
    },
    async showAllPaidOrders() {
        var response
        await Api().get('api/itemCarts/showAllPaidOrders').then(function(res) {
            response = res.data
        })
        return response
    },
    async showStatusOrders(status) {
        var response
        await Api().get('api/itemCarts/showStatusOrders/' + status).then(function(res) {
            response = res.data
        })
        return response
    },
    async showMonthOrders(month, year) {
        var response
        await Api().get('api/itemCarts/showMonthOrders/' + month + "&" + year).then(function(res) {
            response = res.data
        })
        return response
    }
}