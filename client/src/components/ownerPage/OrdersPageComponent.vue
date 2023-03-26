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
    <div>
        <div class="top-container">
            <div class="status-dropdown">
                <div class="status-title">
                    Order Status
                </div>
                <div class="status-input">
                    <select v-model="status">
                        <option value="prepared">Prepared</option>
                        <option value="collect">To Collect</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </div>
            </div>
            <div class="order-dropdown">
                <div class="order-title">
                    Order
                </div>
                <div class="order-input">
                    <select v-model="orderID">
                        <option :value="order.order_id" v-for="(order, index) in allOrders" :key="index">{{order.item_cart_id}} - {{user.first_name}}</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    <WebsiteFooter/>
  </div>
</template>

<script>
import NavigationBar from "../navigationBar/NavigationBar.vue"
import WebsiteFooter from "../footer/WebsiteFooter.vue"
import ItemCartService from '../../services/ItemCartService'
import AccountService from '../../services/AccountService'
export default {
    components: {
        NavigationBar,
        WebsiteFooter,
    },
    async mounted() {
        this.allOrders = await ItemCartService.showAllPaidOrders()
        this.user = await AccountService.showCurrentUser(1)
        console.log(this.allOrders)
    },
    data() {
        return {
            allOrders: null,
            user: "",
            status: "",
            orderID: null
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
</style>