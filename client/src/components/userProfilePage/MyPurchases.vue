<template>
  <div class="empty-list" v-if="itemList.length == 0">
    <img src="../../assets/order.png" alt="">
    <div class="text">Please place your orders first.</div>
  </div>
  <div class="main-container" v-else>
    <div class="navigation-header">
        <div class="navigation-button-active">All</div>
        <div class="navigation-button">To Collect</div>
        <div class="navigation-button">Completed</div>
        <div class="navigation-button">Cancelled</div>
    </div>
    <div class="order-list" ref="scrollComponent">
        <div class="order-item" v-for="(order, index) in itemsArray" :key="index">
            <div class="top-container">
                <div class="order-title">
                    <div class="order-id">Order ID: {{order.item_list_id}}</div>
                    <div class="order-status">Order has been prepared</div>
                </div>
                <div class="order-container" v-for="(item, index) in this.findItems(order.item_list_id)" :key="index">
                    <div class="order-content">
                        <div class="product-image">
                            <img :src="getImgUrl(item.image_name1)">
                        </div>
                        <div class="name-quantity">
                            <div class="name">{{item.product_name}}</div>
                            <div class="quantity">x{{item.quantity}}</div>
                        </div>
                    </div>
                    <div class="price">RM {{item.product_price}}</div>
                </div>
            </div>
            <div class="bottom-container">
                <div class="subtotal">Subtotal:
                    <span>{{order.subtotal}}</span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import AccountService from "../../services/AccountService"
import ItemCartService from "../../services/ItemCartService"
import ProductService from "../../services/ProductService"
export default {
    async mounted() {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
        window.addEventListener("scroll", this.handleScroll)
        var currentAccount = await AccountService.checkCurrentUser()
        this.currentUserID = currentAccount.login_id
        var itemList = await ItemCartService.showPaidOrders(this.currentUserID)
        if (itemList.name != 'SequelizeDatabaseError') {
            this.itemList = itemList
        }
        for (let i = 0; i < 3; i++) {
            var subtotal = 0
            this.products = []
            this.items = await this.getAllItems(this.itemList[i].item_cart_id)
            for (let j = 0; j < this.items.length; j++) {
                var product = await ProductService.showProduct(this.items[j].product_id)
                this.products.push({
                    product_id: product.product_id,
                    product_name: product.product_name,
                    product_price: product.product_price,
                    quantity: this.items[j].quantity,
                    image_name1: product.image_name1
                })
                subtotal += product.product_price * this.items[j].quantity
            }
            this.itemsArray.push({
                item_list_id: this.itemList[i].item_cart_id,
                items: this.products,
                subtotal: subtotal
            })
        }
    },
    data() {
        return {
            currentUserID: null,
            itemList: [],
            itemsArray: [],
            items: [],
            products: [],
            testImage: null,
            orderCount: 3
        }
    },
    methods: {
        getImgUrl(picture) {
            return require("../../assets/productImages/" + picture)
        },
        async getAllItems(itemCartID) {
            var items = await ItemCartService.showAllItems(itemCartID)
            return items
        },
        findItems(itemCartID) {
            for (let i = 0; i < this.itemsArray.length; i++) {
                if (itemCartID == this.itemsArray[i].item_list_id) {
                    return this.itemsArray[i].items
                }
            }
        },
        handleScroll() {
            if ((document.getElementsByClassName('container')[0].offsetHeight + document.getElementsByClassName('main-navigation-bar')[0].offsetHeight) <= window.innerHeight + document.documentElement.scrollTop) {
                this.loadMore()
            }
        },
        async loadMore() {
            window.removeEventListener("scroll", this.handleScroll)
            if (this.orderCount - this.itemList.length < 3) {
                var untilCount = 0
                if (this.orderCount < this.itemList.length) {
                    untilCount = 3
                }
                else {
                    untilCount = this.orderCount - this.itemList.length 
                }
                for (let i = this.orderCount; i < this.orderCount + untilCount; i++) {
                    var subtotal = 0
                    this.products = []
                    this.items = await this.getAllItems(this.itemList[i].item_cart_id)
                    for (let j = 0; j < this.items.length; j++) {
                        var product = await ProductService.showProduct(this.items[j].product_id)
                        this.products.push({
                            product_id: product.product_id,
                            product_name: product.product_name,
                            product_price: product.product_price,
                            quantity: this.items[j].quantity,
                            image_name1: product.image_name1
                        })
                        subtotal += product.product_price * this.items[j].quantity
                    }
                    this.itemsArray.push({
                        item_list_id: this.itemList[i].item_cart_id,
                        items: this.products,
                        subtotal: subtotal
                    })
                    console.log("hi")
                }
                this.orderCount += 3
                window.addEventListener("scroll", this.handleScroll)
            }
        }
    }
}
</script>

<style scoped>
.empty-list {
    float: left;
    width: 940px;
    height: 600px;
    background: #fff;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 13%);
    border-radius: 0.125rem;
    margin-left: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.empty-list img {
    height: 205px;
    width: 200px
}

.text {
    width: 260px;
}

.main-container {
    display: block;
    position: relative;
    float: left;
    left: 0px;
    width: 940px;
    min-height: min-content;
    margin-left: 45px;
}

.navigation-header {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 100%;
    margin-bottom: 12px;
    display: flex;
    overflow: hidden;
    background: #fff;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    flex-wrap: nowrap;
    justify-content: center;
}

.navigation-button {
    width: 25%;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: rgba(0,0,0,.8);
    border-bottom: 2px solid rgba(0,0,0,.09);
    transition: 0.3s ease color;
}

.navigation-button:hover {
    color: rgba(197, 115, 99, 0.986);
    cursor: pointer;
}

.navigation-button-active {
    width: 25%;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    transition: 0.3s ease color;
    color: rgba(197, 115, 99, 0.986);
    border-bottom: 2px solid rgba(197, 115, 99, 0.986);
    cursor: pointer;
}

.order-list {
    min-height: 600px;
}

.order-item {
    margin: 12px 0;
    background: white;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
    border-radius: 0.125rem;
}

.top-container {
    padding: 12px 24px;
    padding-top: 24px;
}

.order-title {
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
}

.order-container {
    border-top: 1px solid rgba(0,0,0,.09);
    display: flex;
    padding-bottom: 15px;
}

.order-content {
    width: 80%;
    padding-top: 15px;
    display: flex;
}

.product-image {
    height: 120px;
    width: 120px;
    background: rgb(249, 226, 191);
}

.product-image img {
    height: 100%;
    width: 100%;
}

.name-quantity {
    padding-left: 15px;
}

.quantity {
    padding-top: 15px;
}

.price {
    width: 20%;
    display: flex;
    justify-content: right;
    align-items: center;
}

.bottom-container {
    border-top: 1px dotted rgba(0,0,0,.09);
    padding: 20px 25px;
    font-size: 20px;
}

.bottom-container span {
    margin-left: 10px;
    font-size: 28px;
    color: rgba(197, 115, 99, 0.986);
    font-weight: bold;
}
</style>