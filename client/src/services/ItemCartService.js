import Api from '@/services/Api'

export default {
    addToCart(userID, productID, quantity) {
        return Api().post('api/itemCarts/addToCart', userID, productID, quantity)
    }
}