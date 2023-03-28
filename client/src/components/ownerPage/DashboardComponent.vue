<template>
    <div class="viewport">
        <NavigationBar/>
        <div class="background-image">
            <div class="content">
                <Transition>
                <div class="text">
                    Dashboard
                </div>
                </Transition>
            </div>
        </div>
        <div class="main-container">
            <div class="main-wrapper">
                <div class="left-container">
                    <div class="number-container">
                        <ul class="order-stats">
                            <li>
                                <div class="total-order">
                                    Total Orders
                                </div>
                                <div class="total-number">
                                    <vue3-autocounter :startAmount='0' :endAmount=totalOrder :duration='2'/>
                                </div>
                            </li>
                            <li>
                                <div class="pending-order">
                                    Pending
                                </div>
                                <div class="pending-number">
                                    <vue3-autocounter :startAmount='0' :endAmount=totalPending :duration='2'/>
                                </div>
                            </li>
                            <li>
                                <div class="cancelled-order">
                                    Cancelled
                                </div>
                                <div class="cancelled-number">
                                    <vue3-autocounter :startAmount='0' :endAmount=totalCancelled :duration='2'/>
                                </div>
                            </li>
                            <li>
                                <div class="completed-order">
                                    Completed
                                </div>
                                <div class="completed-number">
                                    <vue3-autocounter :startAmount='0' :endAmount=totalCompleted :duration='2'/>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="latest-order-container">
                        <div class="latest-order-top-container">
                            <div class="latest-order-title">
                                Latest Order
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
                                <div class="order-item" v-for="(item, index) in latestOrder" :key="index">
                                    <div class="item-image">
                                        <img :src="getImgUrl(item.productImage)">
                                    </div>
                                    <div class="item-name">{{item.productName}}</div>
                                    <div class="item-quantity">{{item.quantity}}</div>
                                    <div class="item-price">{{item.price}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="view-orders">
                            <div class="view-orders-button" @click="goToOrders()">
                                View All Orders
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-container">
                    <div class="total-revenue-container">
                        <div class="total-revenue-title">Total Revenue :</div>
                        <div class="total-revenue-value">
                            RM
                            <vue3-autocounter RM :startAmount='0' :endAmount=totalRevenue :duration='2' :decimals='2'/>
                        </div>
                    </div>
                    <div class="goals">
                        <div class="goals-top-container">
                            <div class="goals-title">Goals and Overview</div>
                            <div class="months-dropdown">
                                <div class="months-title">
                                    {{displayMonth}}
                                    <i class="fa-solid fa-chevron-down"></i>
                                </div>
                                <ul class="months-dropdown-content" ref="monthsDropdown">
                                    <li v-for="(month, index) in previousMonths" :key="index" @click="changeMonth(month)">
                                        {{month}}
                                    </li>
                                    <li  @click="changeMonth(currentMonth)">{{currentMonth}}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="goals-content">
                            <div class="revenue-title">
                                Revenue
                                <div>RM {{revenue}} / RM 10000</div>
                            </div>
                            <div class="revenue-bar">
                                <div class="revenue-progression" :style="{width: revenueProgression + '%'}"></div>
                            </div>
                            <div class="order-title">
                                Order
                                <div>{{order}} / 30</div>
                            </div>
                            <div class="order-bar">
                                <div class="order-progression" :style="{width: orderProgression + '%'}"></div>
                            </div>
                        </div>
                        <div class="edit-goals">
                            <div class="edit-goals-button">
                                <i class="fa-solid fa-pencil"></i>
                                Edit Goals
                            </div>
                        </div>
                    </div>
                    <div class="edit-container">
                        <div class="edit-products" @click="goToProduct('CreateProduct')">
                            Create Products
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                        <div class="edit-products" @click="goToProduct('DeleteProduct')">
                            Delete Products
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                        <div class="edit-vouchers">
                            Edit Vouchers
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
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
import ProductService from '../../services/ProductService'
export default {
    components: {
        NavigationBar,
        WebsiteFooter
    },
    async mounted() {
        var paidItems = await ItemCartService.showAllPaidOrders()
        this.totalOrder = paidItems.length
        this.calculatePending(paidItems)
        this.calculateCancelled(paidItems)
        this.calculateCompleted(paidItems)
        this.calculateRevenue(paidItems)
        this.getLatestOrder(paidItems)
        this.getCurrentMonth()
        this.getPreviousMonths()
    },
    data() {
        return {
            loading: true,
            totalOrder: 0,
            totalPending: 0,
            totalCancelled: 0,
            totalCompleted: 0,
            totalRevenue: 0,
            latestSubtotal: 0,
            revenue: 0,
            order: 0,
            orderProgression: 0,
            revenueProgression: 0,
            latestOrder: [],
            currentMonth: "",
            displayMonth: "",
            previousMonths: []
        }
    },
    methods: {
        goToOrders() {
            window.location.href = "orders"
        },
        goToProduct(action) {
            this.$storage.setStorageSync("editProducts", action)
            window.location.href = "editProducts"
        },
        calculatePending(allOrders) {
            var total = 0
            for (let i = 0; i < allOrders.length; i++) {
                if (allOrders[i].status == "Preparing") {
                    total += 1 
                }
            }
            this.totalPending = total
        },
        calculateCancelled(allOrders) {
            var total = 0
            for (let i = 0; i < allOrders.length; i++) {
                if (allOrders[i].status == "Cancelled") {
                    total += 1 
                }
            }
            this.totalCancelled = total
        },
        calculateCompleted(allOrders) {
            var total = 0
            for (let i = 0; i < allOrders.length; i++) {
                if (allOrders[i].status == "Completed") {
                    total += 1 
                }
            }
            this.totalCompleted = total
        },
        calculateRevenue(allOrders) {
            var total = 0
            for (let i = 0; i < allOrders.length; i++) {
                total += parseFloat(allOrders[i].subtotal)
            }
            this.totalRevenue = total
        },
        async getLatestOrder(allOrders) {
            var orderID = allOrders[0].item_cart_id
            this.latestSubtotal = allOrders[0].subtotal
            var items = await ItemCartService.showAllItems(orderID)
            for(let i = 0; i < items.length; i++) {
                var product = await ProductService.showProduct(items[i].product_id)
                this.latestOrder.push({
                    productImage: product.image_name1,
                    productName: product.product_name,
                    quantity: items[i].quantity,
                    price: product.product_price
                })
            }
            this.loading = false
        },
        getImgUrl(picture) {
            return require("../../assets/productImages/" + picture)
        },
        calculateRevenueProgression(allOrders) {
            var totalRevenue = 0
            for (let i = 0; i < allOrders.length; i++) {
                console.log(totalRevenue)
            }
            console.log(totalRevenue)
        },
        getCurrentMonth() {
            const monthNames = ["January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"
                                ];
            const d = new Date();
            this.currentMonth = monthNames[d.getMonth()] + " " + d.getFullYear()      
            this.displayMonth = this.currentMonth            
        },
        getPreviousMonths() {
            const monthNames = ["January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"
                                ];
            const d = new Date();
            var year = d.getFullYear()
            var previousMonth
            var j = 11
            for (let i = 1; i < 12; i++) {
                if ((d.getMonth() - i) < 0) {
                    year = d.getFullYear() - 1
                    previousMonth = monthNames[j]
                    this.previousMonths.push(previousMonth + " " + year)
                    j -= 1
                }
                else {
                    previousMonth = monthNames[d.getMonth() - i]
                    this.previousMonths.push(previousMonth + " " + year)
                }
            }
            this.previousMonths = this.previousMonths.reverse()
        },
        changeMonth(newMonth) {
            this.displayMonth = newMonth
        },
        calculateProgression() {
            if (this.revenue > 10000) {
                this.revenueProgression = 100
            }
            else {
                this.revenueProgression = this.revenue / 10000 * 100
            }
            if (this.order > 30) {
                this.orderProgression = 100
            }
            else {
                this.orderProgression = this.order / 30 * 100
            }
        }
    },
    watch: {
        async displayMonth(newMonth) {
            this.revenue = 0
            const monthNames = ["January", "February", "March", "April", "May", "June",
                                    "July", "August", "September", "October", "November", "December"
                                    ];
            var stringArray = newMonth.split(/(\s+)/);             
            var month = monthNames.indexOf(stringArray[0]) + 1
            var year = stringArray[2]
            var orders = await ItemCartService.showMonthOrders(month, year)
            this.order = orders.length
            for (let i = 0; i < orders.length; i++) {
                this.revenue += parseFloat(orders[i].subtotal)
            }
            this.revenue = this.revenue.toFixed(2)
            this.calculateProgression()
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

.main-container {
    padding: 40px 50px 10px;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}

.main-wrapper {
    width: 1230px;
    margin-left: auto;
    margin-right: auto;
}

.left-container {
    width: 800px;
    float: left;
}

.right-container {
    width: 400px;
    float: right;
}

.latest-order-container {
    position: relative;
    width: 800px;
    background: white;
    box-shadow: 0px 1px 2px rgb(0 0 0 / 17%);
    border-radius: 0.125rem;
}

.latest-order-top-container {
    padding: 25px 30px;
}

.latest-order-title {
    font-size: 22px;
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
    width: 220px;
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
    width: 220px;
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

.view-orders {
    width: 100%;
    padding: 15px 30px;
    border-top: 2px solid #F5F5F5;
    color: rgb(139,139,139);
}

.view-orders-button:hover {
    cursor: pointer;
    width: fit-content;
}

.number-container {
    width: 800px;
}

.order-stats {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    margin-bottom: 20px;
}

.order-stats li {
    width: 22%;
    height: 150px;
    border-radius: 2px;
    box-shadow: 0px 1px 2px rgb(0 0 0 / 17%);
    border-radius: 0.125rem;
}

.total-order {
    background: rgb(230,155,122);
    color: white;
    width: 100%;
    height: 60px;
    padding: 15px 15px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}

.pending-order {
    background: rgb(248,215,103);
    color: white;
    width: 100%;
    height: 60px;
    padding: 15px 15px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}

.cancelled-order {
    background: rgb(244,81,108);
    color: white;
    width: 100%;
    height: 60px;
    padding: 15px 15px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}

.completed-order {
    background: rgb(63, 229, 146);
    color: white;
    width: 100%;
    height: 60px;
    padding: 15px 15px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}

.total-number {
    color: rgb(228, 121, 74);
    font-size: 35px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.pending-number {
    color: rgb(255, 196, 1);
    font-size: 35px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cancelled-number {
    color: rgb(245, 61, 92);
    font-size: 35px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.completed-number {
    color: rgb(34, 228, 131);
    font-size: 35px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.total-revenue-container {
    position: relative;
    width: 100%;
    height: 200px;
    background: white;
    box-shadow: 0px 1px 2px rgb(0 0 0 / 17%);
    border-radius: 0.125rem;
    margin-bottom: 15px;
}

.total-revenue-title {
    width: 100%;
    padding: 20px 30px 30px;
    font-size: 22px;
}

.total-revenue-value {
    width: 100%;
    padding-top: 30px;
    padding-left: 30px;
    font-size: 40px;   
    font-weight: bold;
    letter-spacing: 1px;
}

.goals {
    position: relative;
    width: 100%;
    height: 300px;
    background: white;
    box-shadow: 0px 1px 2px rgb(0 0 0 / 17%);
    border-radius: 0.125rem;
    margin-bottom: 15px;
}

.goals-top-container {
    width: 100%;
    padding: 20px 30px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.goals-title {
    font-size: 18px;
}

.months-dropdown {
    font-size: 15px;
    height: 35px;
    color: rgb(139,139,139);
}

.months-title {
    padding-top: 6px;
}

.months-dropdown i {
    font-size: 13px;
    margin-left: 1px;
    position: relative;
}

.goals-content {
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
}

.months-dropdown-content {
    height: 155px;
    width: 170px;
    text-transform: none;
    display: none;
    position: absolute;
    top: 55px;
    right: 5px;
    text-align: center;
    z-index: 20;
    font-size: 14px;
    font-weight: normal;
    background-color: #fff;
    color: #000;
    border-radius: 4px;
    padding-top: 8px;
    padding-bottom: 8px;
    box-shadow: 0px 2px 15px rgb(0 0 0 / 17%);
    list-style-type: none;
    overflow-y: scroll;
}

ul::-webkit-scrollbar-thumb {
    background-color: rgb(216, 216, 216);
    border: 5px solid transparent;
    border-radius: 8px;
    background-clip: padding-box;  
}

ul::-webkit-scrollbar {
  width: 16px;
}

.months-dropdown:hover {
    cursor: pointer;
}

.months-dropdown:hover .months-dropdown-content {
    display: block;
}

.months-dropdown-content li {
    padding: 7px 20px 7px 17px;
}

.months-dropdown-content li:hover {
    background: rgb(245,245,245);
    cursor: pointer;
    text-decoration: underline;
}

.revenue-title {
    display: flex;
    justify-content: space-between;
}

.revenue-bar {
    margin-top: 12px;
    width: 100%;
    height: 3px;
    background: rgb(241, 241, 241);
}

.revenue-progression {
    width: 30%;
    height: 100%;
    background: rgb(255,69,0);
}

.order-title {
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
}

.order-bar {
    margin-top: 12px;
    width: 100%;
    height: 3px;
    background: rgb(241, 241, 241);
}

.order-progression {
    width: 50%;
    height: 100%;
    background: rgb(255,69,0);
}

.edit-goals {
    margin-top: 50px;
    padding: 15px 30px;
    width: 100%;
    border-top: 2px solid #F5F5F5;
    color: rgb(139,139,139);
}

.edit-goals i {
    font-size: 14px;
    margin-right: 2px;
}

.edit-goals-button {
    width: fit-content;
}

.edit-goals-button:hover {
    cursor: pointer;
}

.edit-container {
    position: relative;
    width: 100%;
    height: 220px;
    background: white;
    box-shadow: 0px 1px 2px rgb(0 0 0 / 17%);
    border-radius: 0.125rem;
    margin-bottom: 15px;
    color: rgb(139,139,139);
}

.edit-products {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px;
    font-size: 22px;
    transition: color 0.3s ease;
}

.edit-vouchers {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px;
    font-size: 22px;
    transition: color 0.3s ease;
}

.edit-products:hover {
    color: black;
    cursor: pointer;
}

.edit-vouchers:hover {
    color: black;
    cursor: pointer;
}
</style>