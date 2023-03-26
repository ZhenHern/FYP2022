<template>
  <div class="main-container">
    <div class="navigation-header">
        <div :class="showing == 'All' ? 'navigation-button-active' : 'navigation-button'" @click="showAll()">All</div>
        <div :class="showing == 'Preparing' ? 'navigation-button-active' : 'navigation-button'" @click="showPreparing()">Preparing</div>
        <div :class="showing == 'To Collect' ? 'navigation-button-active' : 'navigation-button'" @click="showToCollect()">To Collect</div>
        <div :class="showing == 'Completed' ? 'navigation-button-active' : 'navigation-button'" @click="showCompleted()">Completed</div>
        <div :class="showing == 'Cancelled' ? 'navigation-button-active' : 'navigation-button'" @click="showCancelled()">Cancelled</div>
    </div>
    <div class="navigation-container">
        <div class="navigation-dropdown" @click="toggleDropdown()">
            {{showing}}
            <i class="fa-solid fa-caret-down"></i>
            <div class="dropdown-selections" ref="dropdown">
                <div class="selection" @click="showAll()">All</div>
                <div class="selection" @click="showPreparing()">Preparing</div>
                <div class="selection" @click="showToCollect()">To Collect</div>
                <div class="selection" @click="showCompleted()">Completed</div>
                <div class="selection" @click="showCancelled()">Cancelled</div>
            </div>
        </div>
    </div>
    <div class="loading" v-if="loading">
        <i class="fas fa-spinner fa-spin"></i>
    </div>
    <div class="order-list" ref="scrollComponent" v-else-if="!loading && itemList.length != 0">
        <div class="order-item" v-for="(order, index) in itemsArray" :key="index">
            <div class="top-container">
                <div class="order-title">
                    <div class="order-id">Order ID: {{order.item_list_id}}</div>
                    <div class="order-status">
                        <div class="prepared" v-if="order.status == 'Completed'">
                            <i class="fa-solid fa-clipboard-check"></i>
                            Order is completed
                        </div>
                        <div class="cancelled" v-else-if="order.status == 'Cancelled'">
                            <i class="fa-solid fa-circle-exclamation"></i>
                            Order is cancelled
                        </div>
                        <div class="prepared" v-else-if="order.status == 'Collect'">
                            <i class="fa-solid fa-store"></i>
                            Order is ready for collection
                        </div>
                        <div class="preparing" v-else-if="order.status == 'Preparing'">
                            <i class="fa-solid fa-spinner"></i>
                            Preparing order
                        </div>
                    </div>
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
    <div class="empty-list" v-else>
        <img src="../../assets/order.png" alt="">
        <div class="text">Please place your orders first.</div>
    </div>
  </div>
</template>

<script>
import ItemCartService from "../../services/ItemCartService"
import ProductService from "../../services/ProductService"
export default {
    async mounted() {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
        window.addEventListener("scroll", this.handleScroll)
        this.currentUserID = this.$storage.getStorageSync("loginID")
        this.paidOrders = await ItemCartService.showPaidOrders(this.currentUserID)
        if (this.paidOrders.name != 'SequelizeDatabaseError') {
            this.itemList = this.paidOrders
        }
        await this.pushArray()
        this.loading = false
    },
    data() {
        return {
            showing: "All",
            currentUserID: null,
            paidOrders: [],
            itemList: [],
            itemsArray: [],
            items: [],
            products: [],
            testImage: null,
            orderCount: 3,
            loading: true
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
        async pushArray() {
            var itemsArray = []
            var untilCount = 3
            if (this.itemList.length < untilCount) {
                untilCount = this.itemList.length
            }
            for (let i = 0; i < untilCount; i++) {
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
                itemsArray.push({
                    item_list_id: this.itemList[i].item_cart_id,
                    status: this.itemList[i].status,
                    items: this.products,
                    subtotal: subtotal
                })
            }
            this.itemsArray = itemsArray
        },
        async showAll() {
            this.loading = true
            this.showing = "All"
            this.itemList = this.paidOrders
            await this.pushArray()
            this.loading = false
        },
        async showPreparing() {
            this.loading = true
            this.showing = "Preparing"
            this.itemList = []
            for (let i = 0; i < this.paidOrders.length; i++) {
                if (this.paidOrders[i].status == "Preparing") {
                    this.itemList.push(this.paidOrders[i])
                }
            }
            await this.pushArray()
            this.loading = false
        },
        async showToCollect() {
            this.loading = true
            this.showing = "To Collect"
            this.itemList = []
            for (let i = 0; i < this.paidOrders.length; i++) {
                if (this.paidOrders[i].status == "Collect") {
                    this.itemList.push(this.paidOrders[i])
                }
            }
            await this.pushArray()
            this.loading = false
        },
        async showCompleted() {
            this.loading = true
            this.showing = "Completed"
            this.itemList = []
            for (let i = 0; i < this.paidOrders.length; i++) {
                if (this.paidOrders[i].status == "Completed") {
                    this.itemList.push(this.paidOrders[i])
                }
            }
            await this.pushArray()
            this.loading = false
        },
        async showCancelled() {
            this.loading = true
            this.showing = "Cancelled"
            this.itemList = []
            for (let i = 0; i < this.paidOrders.length; i++) {
                if (this.paidOrders[i].status == "Cancelled") {
                    this.itemList.push(this.paidOrders[i])
                }
            }
            await this.pushArray()
            this.loading = false
        },
        toggleDropdown() {
            if (this.$refs.dropdown.style.display == "block"){
                this.$refs.dropdown.style.display = "none"
            }
            else {
                this.$refs.dropdown.style.display = "block"
            }
        },
        handleScroll() {
            if ((document.getElementsByClassName('container')[0].offsetHeight) <= window.innerHeight + document.documentElement.scrollTop) {
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
                        status: this.itemList[i].status,
                        items: this.products,
                        subtotal: subtotal
                    })
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
    width: 100%;
    height: 600px;
    background: #fff;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 13%);
    border-radius: 0.125rem;
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

.navigation-container {
    display: none;
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
    width: 20%;
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
    width: 20%;
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

.loading {
    width: 100%;
    display: flex;
    margin-top: 15px;
    justify-content: center;
    font-size: 30px;
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

.order-status {
    display: flex;
    justify-content: right;
}

.prepared {
    color: #26aa99;
    font-weight: bold;
}

.prepared i {
    margin-right: 10px;
}

.cancelled {
    color: rgb(255, 83, 83);
    font-weight: bold;
}

.cancelled i {
    margin-right: 10px;
}

.preparing {
    color: rgb(237, 209, 68);
    font-weight: bold;
}

.preparing i {
    margin-right: 10px;
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

@media (max-width: 1200px) {
  .main-container {
    width: 575px;
  }
  
  .navigation-button {
    font-size: 15px;
  }
  .navigation-button-active {
    font-size: 15px;
  }
}

@media (max-width: 900px) {
    .main-container {
        width: 375px;
    }

    .navigation-button {
        font-size: 12px;
    }

    .navigation-button-active {
        font-size: 12px;
    }

    .top-container {
        font-size: 14px;
    }

    .product-image {
        display: none;
    }

    .name-quantity {
        padding-left: 0px;
    }

    .subtotal {
        font-size: 16px;
    }

    .subtotal span {
        font-size: 20px;
    }
}

@media (max-width: 600px) {
    .main-container {
        padding-top: 20px;
        margin-left: 5px;
        width: 80%;
    }

    .navigation-header {
        display: none;
    }

    .navigation-container {
        display: block;
        width: 80%;
        margin-left: 24px;
    }

    .navigation-dropdown {
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(0, 0, 0, 0.20);
        cursor: pointer;
    }

    .dropdown-selections {
        display: none;
        margin-top: 32px;
        position: absolute;
        width: 80%;
        height: 200px;
        background: white;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
    }

    .selection {
        width: 100%;
        height: 20%;
        padding-left: 26px;
        display: flex;
        align-items: center;
    }

    .selection:hover {
        background: rgb(239,239,239);
    }
}

@media (max-width: 480px) {
    .top-container {
        font-size: 10px;
    }
}
</style>