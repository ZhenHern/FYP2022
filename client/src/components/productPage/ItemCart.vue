<template>
  <div class="overlay" ref="cart">
    <div class="item-cart" v-if="!showPaypal">
        <div class="header">
            <div class="header-title">
                Item Cart
            </div>
        </div>
        <div class="product-list">
            <div class="responsive-table">
                <table>
                    <tr class="product-name-title">
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                    <tr v-for="(item, index) in items" :key="index">
                        <td>
                            <div class="product-image">
                                <img :src="getImgUrl(products[index].image_name1)">
                            </div>
                        </td>
                        <td>{{products[index].product_name}}</td>
                        <td>{{products[index].product_price}}</td>
                        <td>
                            <div class="minus">
                                <i class="fa fa-minus" aria-hidden="true" @click="subtractQuantity(item.item_id)"></i>
                            </div>
                            {{item.quantity}}
                            <div class="plus">
                                <i class="fa fa-plus" aria-hidden="true" @click="addQuantity(item.item_id)"></i>
                            </div>
                        </td>
                        <td>
                            RM {{item.quantity * products[index].product_price}}
                            <div class="cancel-item">
                                <i class="fa fa-times" aria-hidden="true" @click="removeItem(item.item_id)"></i>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="checkout">
            <div class="left-checkout">
                <div class="subtotal">Subtotal <span>{{subtotal.toFixed(2)}}</span></div>
                <div class="tnc">
                    <input type="checkbox">
                    I agree to <span>Terms & Condition</span>
                </div>
            </div>
            <div :class="checkoutEnabled ? 'checkout-button' : 'disabled-checkout-button'" @click="goToPaypal()" ref="checkout">Checkout</div>
            <div class="close-button" @click="closeCart">Close Cart</div>
        </div>
    </div>
    <PaypalComponent v-else @showPaypal="returnItemCart()" :subtotal="subtotal" :itemCartID="currentItemCartID"/>
  </div>
</template>

<script>
import ProductService from "../../services/ProductService"
import ItemCartService from "../../services/ItemCartService"
import PaypalComponent from "./PaypalComponent.vue"

export default {
    components: {
        PaypalComponent
    },
    async mounted() {
        this.currentUserID = this.$storage.getStorageSync("loginID")

        var currentItemCart = await ItemCartService.getCurrentCart(this.currentUserID)
        this.currentItemCartID = currentItemCart.item_cart_id

        this.allProducts = await ProductService.showAllProducts()

        this.updateCart()
    },
    data() {
        return {
            showItemCart: false,
            currentUserID: null,
            currentItemCartID: null,
            items: [],
            allProducts: null,
            products: [],
            subtotal: 0,
            showPaypal: false,
            slideDirection: "slide-left",
            checkoutEnabled: null
        }
    },
    methods: {
        goToPaypal() {
            if (this.checkoutEnabled) {
                this.showPaypal = true
            }
        },
        returnItemCart() {
            this.showPaypal = false
        },
        closeCart() {
            this.showItemCart = false
            document.body.style.overflow = "auto"
        },
        getImgUrl(picture) {
            return require("https://52.63.170.37/images/" + picture)
        },
        getProduct(productID) { 
            setTimeout(() => {
                if (this.products == null) {
                    this.getProduct(productID)
                }
                else {
                    for(let i=0; i < this.products.length; i++) {
                        if(this.products[i].product_id == productID) {
                            return i
                        }
                    }
                }
            }, 500) 
        },
        async addQuantity(itemID) {
            await ItemCartService.addQuantity({
                itemID: itemID
            })
            await this.updateCart()
        },
        async subtractQuantity(itemID) {
            await ItemCartService.subtractQuantity({
                itemID: itemID
            })
            await this.updateCart()
        },
        async removeItem(itemID) {
            await ItemCartService.removeItem({
                itemID: itemID
            })
            await this.updateCart()
        },
        async updateCart() {
            this.checkoutEnabled = true
            this.items = await ItemCartService.showAllItems(this.currentItemCartID)
            this.products = []
            for(let i=0; i < this.items.length; i++) {
                for(let j=0; j< this.allProducts.length; j++) {
                    if(this.allProducts[j].product_id == this.items[i].product_id) {
                        this.products.push(this.allProducts[j])
                    }
                }
            }
            if (this.items.length == 0) {
                this.checkoutEnabled = false
            }
            this.calculateSubtotal()
        },
        calculateSubtotal() {
            this.subtotal = 0
            for(let i=0; i < this.items.length; i++) {
                this.subtotal += this.items[i].quantity * this.products[i].product_price
            }
            this.subtotal.toFixed(2)    
        }
    },
    watch: {
        async showItemCart(newShow) {
            if (newShow == false) {
                this.$refs.cart.style.opacity = "0%";
                this.$refs.cart.style.visibility = "hidden";
            }
            else if (newShow == true) {
                this.updateCart()
                this.$refs.cart.style.opacity = "100%";
                this.$refs.cart.style.visibility = "visible";
            }
        },
    }
}
</script>

<style scoped>
    .overlay {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(-45deg, #fdb822, #FFE7C9);
        z-index: 1;
        visibility: hidden;
        transition: opacity 0.5s ease, visibility 0.5s ease;
        opacity: 0%;
        overflow-y: scroll;
    }

    .item-cart {
        width: 1200px;
        height: 800px;
        background-color: white;
        margin-left: auto;
        margin-right: auto;
        border: 1px solid #EEE0CD;
    }
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        color: rgb(58,65,79);
    }

    .header-title {
        margin-left: 100px;
        font-size: 25px;
        font-weight: bold;
        word-spacing: 5px;
    }

    .header i {
        margin-right: 100px;
        font-size: 25px;
    }

    .product-list {
        position: relative;
        width: 100%;
        height: 600px;
        background: linear-gradient(90deg, #FAFAFA 50%, #FFFFFF 50%);
        border-top: 2px solid #FAFAFA;
        display: flex;
        justify-content: center;
        align-content: center;
        
    }

    .product-title {
        width: 100%;
    }

    .product-name-title {
        text-transform: uppercase;
        font-weight: bold;
        color: rgb(152,156,163);
        font-size: 15px;
    }

    .responsive-table {
        width: 100%;
        overflow: auto;
        height: 550px;
        margin-top: 48px;
        
    }
    
    table {
        color: rgb(58,65,79);
        width: 90%;
        height: 250px;
        border-collapse: collapse;
        overflow: auto;
    }

    table th {
        height: 100px;
        position: sticky;
        top: 0;
        z-index: 1;
    }

    table th:nth-child(1) {
        width: 212px;
        background: #FAFAFA;
    }

    table th:nth-child(2) {
        padding-right: 10%;
        padding-left: 5%;
        text-align: left;
        width: 425px;
        background: linear-gradient(90deg, #FAFAFA 91%, #FFFFFF 9%);
    }

    table th:nth-child(3) {
        text-align: left;
        background: #FFFFFF;
    }

    table th:nth-child(4) {
        width: 20%;
        background: #FFFFFF;
    }

    table th:nth-child(5) {
        text-align: left;
        background: #FFFFFF;
    }

    table td {
        font-weight: bold;
        text-align: center;
        height: auto;
        word-wrap: break-word;
    }

    table td:nth-child(n+3) {
        border-top: 2px solid #F5F5F5;
    }

    table td:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 30px;
    }

    table td:nth-child(2) {
        padding-right: 10%;
        padding-left: 5%;
        text-align: left;
    }

    table td:nth-child(3) {
        text-align: left;
    }

    table td:nth-child(5) {
        text-align: left;
    }

    .product-image {
        position: relative;
        width: 120px;
        height: 120px;
        background: linear-gradient(45deg, #FAFAFA 50%, #ffe6b1 50%);
    }

    img {
        width: 100%;
        height: 100%;
    }

    td i .fa {
        margin-left: 25px;
    }

    .minus {
        position: relative;
        float: left;
        left: 65px;
        cursor: pointer;
    }

    .plus {
        position: relative;
        float: right;
        right: 65px;
        cursor: pointer;
    }
    
    .cancel-item {
        position: relative;
        float: right;
        cursor: pointer;
    }

    .checkout {
        width: 100%;
        height: 150px;
        background: #363D4B;
        color: white;
        text-transform: uppercase;
        padding-top: 25px;
        padding-left: 110px;
    }

    .left-checkout {
        float: left;
        width: 250px;
        height: 80px;
    }

    .subtotal {
        width: 250px;
        position: relative;
    }

    .subtotal span {
        margin-left: 18px;
        font-weight: bold;
        font-size: 25px;
    }

    .tnc {
        width: 250px;
        position: relative;
        top: 15px;
        text-transform: none;
        font-size: 14px;
    }

    .tnc input {
        margin-right: 5px;
    }

    .tnc span {
        color: #d68b94;
        font-weight: bold;
        cursor: pointer;
    }

    .checkout-button {  
        margin-top: 15px;
        margin-left: 345px;
        float: left;
        height: 60px;
        width: 150px;
        position: relative;
        background-color: #fed9a9ee;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        letter-spacing: 2px;
        cursor: pointer;
        transition: background-color 0.15s ease;
    }

    .checkout-button:hover {
        background-color: #f8bc6ec7;
    }

    .disabled-checkout-button {
        margin-top: 15px;
        margin-left: 345px;
        float: left;
        height: 60px;
        width: 150px;
        position: relative;
        color: #798488;
        background-color: #e2e8ea;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        letter-spacing: 2px;
        cursor: not-allowed;      
    }

    .close-button {
        display: flex;
        justify-content: center;
        align-items: center;
        float: left;
        margin-left: 85px;
        margin-top: 15px;
        height: 60px;
        width: 150px;
        background-color: rgb(231, 93, 93);
        font-weight: bold;
        letter-spacing: 2px;
        cursor: pointer;
        transition: background-color 0.15s ease;
    }

    .close-button:hover {
        background-color: rgb(170, 67, 67);
    }

    @media (max-width: 1300px) {
        .item-cart {
            width: 850px;
        }

        .product-name-title {
            font-size: 13px;
        }

        table th:nth-child(2) {
            background: linear-gradient(90deg, #FAFAFA 92%, #FFFFFF 8%);
        }

        table tr {
            font-size: 13px;
        }

        .minus {
            left: 45px;
        }

        .plus {
            right: 45px;
        }

        .checkout {
            padding-left: 50px;
            font-size: 15px;
        }

        .checkout-button {
            margin-left: 148px;
            width: 120px;
            font-size: 12px;
        }

        .disabled-checkout-button {
            margin-left: 148px;
            width: 120px;
            font-size: 12px;
        }

        .close-button {
            margin-left: 60px;
            width: 120px;
            font-size: 12px;
        }

        table th:nth-child(1) {
        width: 150px;
        background: #FAFAFA;
        }

        table th:nth-child(2) {
            width: 298px;
        }
    }

    @media (max-width: 1000px) {
        .item-cart {
            width: 700px;
        }

        table td {
            height: 115px;
        }


        table th:nth-child(1) {
            width: 110px;
        }

        table th:nth-child(2) {
            width: 260px;
            background: linear-gradient(90deg, #FAFAFA 92%, #FFFFFF 8%);
        }

        .minus {
            left: 38px;
        }

        .plus {
            right: 38px;
        }

        .product-image {
            width: 80px;
            height: 80px;
        }

        .checkout-button {
            margin-left: 70px;
            width: 110px;
            font-size: 12px;
        }

        .disabled-checkout-button {
            margin-left: 70px;
            width: 110px;
            font-size: 12px;
        }

        .close-button {
            margin-left: 40px;
            width: 110px;
            font-size: 12px;
        }
    }
    @media (max-width: 750px) {
        .item-cart {
            height: 80%;
            width: 90%;
        }

        .product-list {
            background: linear-gradient(to right, #FAFAFA 0%, #FAFAFA 40%, #FFFFFF 40%, #FFFFFF 100%);
        }

        .header {
            height: 15%;
        }

        .product-list {
            height: 65%;
        }
        
        .responsive-table {
            margin-top: 0px;
            height: 100%;
        }

        table th:nth-child(1) {
            display: none;
        }
        table th:nth-child(2) {
            width: 50%;
            background: linear-gradient(90deg, #FAFAFA 89%, #FFFFFF 11%);
        }

        table th:nth-child(3) {
            display: none;
        }

        table th:nth-child(5) {
            padding-left: 7%;
        }

        table td:nth-child(1) {
            display: none;
        }
        
        table td:nth-child(3) {
            display: none;
        }

        table td:nth-child(5) {
            padding-left: 7%;
        }

        .responsive-table::-webkit-scrollbar {
            display: none;
        }

        .checkout {
            padding-top: 5%;
            padding-left: 5%;
        }

        .left-checkout {
            width: 30%;
        }

        .subtotal {
            width: 100%;
            font-size: 11px;
        }

        .subtotal span {
            font-size: 13px;
        }

        .tnc {
            font-size: 11px;
        }

        .minus {
            left: 15%;
        }

        .plus {
            right: 15%;
        }

        .checkout-button {
            width: 95px;
            height: 50px;
            font-size: 10px;
        }

        .disabled-checkout-button {
            width: 95px;
            height: 50px;
            font-size: 10px;
        }

        .close-button {
            width: 95px;
            height: 50px;
            font-size: 10px;
        }
    }

    @media (max-width: 510px) {
        .left-checkout {
            width: 60%;
        }

        .checkout-button {
            margin-left: 3%;
            margin-top: 0;
            float: none;
        }

        .disabled-checkout-button {
            margin-left: 3%;
            margin-top: 0;
            float: none;
        }

        .close-button {
            margin-left: 0;
            float: none;
        }
    }
</style>