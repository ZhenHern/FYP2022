import Api from '@/services/Api'

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
    }
}