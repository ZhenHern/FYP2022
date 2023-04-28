<template>
  <div class="viewport">
    <NavigationBar/>
    <div class="background-image">
      <div class="content">
        <Transition>
        <div class="text">
            Orders
        </div>
        </Transition>
      </div>
    </div>
    <div class="main-container">
        <div class="top-container">
            <div class="status-dropdown">
                <div class="status-title">
                    Order Status
                </div>
                <div class="status-input">
                    <select v-model="status">
                        <option value="Preparing" data-test="preparing-button">Preparing</option>
                        <option value="Collect">To Collect</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                </div>
            </div>
            <div class="order-dropdown">
                <div class="order-title">
                    Order
                </div>
                <div class="order-input">
                    <select v-model="orderID">
                        <option :value="order.item_cart_id" v-for="(order, index) in allOrders" :key="index" data-test="order-selection">{{order.item_cart_id}} - {{user.first_name}}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="order-container" v-if="orderID != null">
            <div class="order-top-container">
                <div class="order-id-name-title">
                    <div class="order-id-title">
                        Order ID: 5
                    </div>
                    <div class="order-name-title">
                        Ordered by: Zhen Hern
                    </div>
                </div>
                <div class="table-head">
                    <div class="item-head"></div>
                    <div class="name-head">Item</div>
                    <div class="quantity-head">Quantity</div>
                    <div class="price-head">Price</div>
                </div>
                <div class="loading" v-if="loading">
                    <i class="fas fa-spinner fa-spin"></i>
                </div>
                <div class="table-content" v-else>
                    <div class="order-item" v-for="(item, index) in items" :key="index">
                        <div class="item-image">
                            <img :src="getImgUrl(item.productImage)">
                        </div>
                        <div class="item-name">{{item.productName}}</div>
                        <div class="item-quantity">{{item.quantity}}</div>
                        <div class="item-price">{{item.price}}</div>
                    </div>
                </div>
            </div>
            <div class="order-bot-container">
                <div class="change-status">
                    <div class="view-orders-button">
                        Change Status:
                    </div>
                    <div class="status-input">
                        <select v-model="newStatus">
                            <option value="Preparing">Preparing</option>
                            <option value="Collect">To Collect</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                    </div>
                </div>
                <div class="done-button-container">
                    <div class="done-button" @click="openConfirmOverlay()">
                        Done
                    </div>
                </div>
            </div>
        </div>
        <div class="confirm-overlay" ref="confirmOverlay">
        <div class="confirm-container">
            <div class="confirm-text">
                Are you sure you want to change the status?
            </div>
            <div class="confirm-buttons">
                <div class="yes-button" @click="changeStatus()">
                    Yes
                </div>
                <div class="no-button" @click="closeConfirmOverlay()">
                    No
                </div>
            </div>
        </div>
    </div>
    <DisplayOverlay ref="overlay"/>
    </div>
    <WebsiteFooter/>
  </div>
</template>

<script>
import NavigationBar from "../navigationBar/NavigationBar.vue"
import WebsiteFooter from "../footer/WebsiteFooter.vue"
import DisplayOverlay from '../userProfilePage/DisplayOverlay.vue'
import ItemCartService from '../../services/ItemCartService'
import AccountService from '../../services/AccountService'
import ProductService from '../../services/ProductService'
export default {
    components: {
        NavigationBar,
        WebsiteFooter,
        DisplayOverlay
    },
    async mounted() {
        this.allOrders = await ItemCartService.showAllPaidOrders()
        this.user = await AccountService.showCurrentUser(1)
    },
    data() {
        return {
            allOrders: null,
            order: null,
            user: "",
            status: "",
            newStatus: "",
            orderID: null,
            items: [],
            loading: 0
        }
    },
    methods: {
        getImgUrl(picture) {
          if (process.env.NODE_ENV === 'production') {
            return "https://54.253.165.56/images/" + picture
          }
            return require("../../assets/productImages/" + picture)
        },
        openConfirmOverlay() {
            this.$refs.confirmOverlay.style.display = "block"
        },
        closeConfirmOverlay() {
            this.$refs.confirmOverlay.style.display = "none"
        },
        async changeStatus() {
            try {
                await ItemCartService.changeStatus({
                    itemCartID: this.orderID,
                    status: this.newStatus
                })
                this.rerender()
                this.$refs.confirmOverlay.style.display = "none"
                this.$refs.overlay.openOverlay("Status is changed")
            }
            catch {
                this.$refs.confirmOverlay.style.display = "none"
                this.$refs.overlay.openErrorOverlay("Fail to change status")
            }
        },
        async rerender() {
            this.status = ""
            this.orderID = null
            this.order = null
            this.allOrders = await ItemCartService.showAllPaidOrders()
        }
    },
    watch: {
        async status(newStatus) {
            this.allOrders = await ItemCartService.showStatusOrders(newStatus)
        },
        async orderID(newOrderID) {
            this.loading = 1
            this.items = []
            this.order = await ItemCartService.showOrder(newOrderID)
            var items = await ItemCartService.showAllItems(newOrderID)
            for(let i = 0; i < items.length; i++) {
                var product = await ProductService.showProduct(items[i].product_id)
                this.items.push({
                    productImage: product.image_name1,
                    productName: product.product_name,
                    quantity: items[i].quantity,
                    price: product.product_price
                })
            }
            this.newStatus = this.order.status
            this.loading = 0
        },
        newStatus(changedStatus) {
            this.newStatus = changedStatus
        }
    }
}
</script>

<style scoped>
.viewport {
  position: relative;
  background-color: rgb(250,250,250);
  height: fit-content;
  width: 100%;
}

.background-image {
  width: 100%;
  border-top: 3px solid rgb(104,79,64);
  border-bottom: 3px solid rgb(104,79,64);
  height: 300px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.content {
  min-height: 100%;
  filter: brightness(100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.content::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image: url("../../assets/product1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  filter: brightness(50%);
  opacity: 0.9;
}

.text {
  font-size: 70px;
  font-weight: 700;
  letter-spacing: 2px;
  color: white;
  text-transform: uppercase;
}

.top-container {
    padding: 15px 40px;
    margin-top: 50px;
    height: 120px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    background-color: #fff;
    color: #000;
    border-radius: 4px;
    box-shadow: 0px 2px 15px rgb(0 0 0 / 17%);
    font-size: 17px;
    position: relative;
}

.status-dropdown {
    float: left;
    margin-right: 200px;
}

.status-title {
    margin-bottom: 7px;
}

.status-input select {
    padding: 7px;
    width: 200px;
    border: 1px solid #d3d7db;
}

.status-input select:focus {
    outline: none;
    border: 1px solid black;
}

.order-title {
    margin-bottom: 7px;
}

.order-input select {
    padding: 7px;
    width: 200px;
    border: 1px solid #d3d7db;
}

.order-input select:focus {
    outline: none;
    border: 1px solid black;
}

.order-container {
    position: relative;
    margin-top: 3px;
    width: 90%;
    background: white;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 1px 2px rgb(0 0 0 / 17%);
    border-radius: 0.125rem;
}

.order-top-container {
    padding: 25px 40px;
}

.order-id-name-title {
    margin-bottom: 15px;
    font-size: 22px;
    display: flex;
    justify-content: space-between;
}

.order-name-title {
    font-size: 18px;
}

table {
    width: 100%;
}

.table-head {
    width: 100%;
    height: 50px;
    padding: 10px 10px;
    background: rgb(250,250,250);
    color: rgb(131,131,131);
    display: flex;
    justify-content: space-between;
}

.loading {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
}

.loading i {
    font-size: 20px;
}

.item-head {
    width: 150px;
}

.name-head {
    width: 280px;
}

.quantity-head {
    width: 120px;
    text-align: center;
}

.price-head {
    width: 80px;
}

.order-item {
    padding: 10px;
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
}

.item-image {
    height: 150px;
    width: 150px;
}

.item-name {
    width: 280px;
    display: flex;
    align-items: center;
}

.item-quantity {
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.item-price {
    width: 80px;
    display: flex;
    align-items: center;
}

img {
    height: 100%;
    width: 100%;
}

.order-bot-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-top: 2px solid #F5F5F5;
}

.change-status {
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 30px;
}

.done-button-container {
    width: 200px;
    padding: 15px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.done-button {
    width: 150px;
    height: 40px;
    background: rgb(97, 216, 42);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
}

.done-button:hover {
    cursor: pointer;
}

.confirm-overlay {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: none;
    z-index: 2;
}

.confirm-container {
    width: 500px;
    height: 300px;
    background: white;
    border-radius: 5%;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 40px;
}

.confirm-text {
    position: relative;
    top: 25px;
    font-size: 20px;
    text-align: center;
}

.confirm-buttons {
    position: relative;
    top: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.yes-button {
    height: 40px;
    width: 80px;
    border-radius: 4px;
    background: #5b6468;
    color: white;
    box-shadow: 0 3px 10px #616262;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 100px;
}

.yes-button:active {
    background: #3f4547;
}

.no-button:active {
    background: #3f4547;
}

.no-button  {
    height: 40px;
    width: 80px;
    border-radius: 4px;
    background: #5b6468;
    color: white;
    box-shadow: 0 3px 10px #616262;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 100px;
}

.main-container {
    margin-bottom: 100px;
}
</style>