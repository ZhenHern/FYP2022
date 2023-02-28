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
                                    <vue3-autocounter :startAmount='0' :endAmount='215' :duration='2'/>
                                </div>
                            </li>
                            <li>
                                <div class="pending-order">
                                    Pending
                                </div>
                                <div class="pending-number">
                                    <vue3-autocounter :startAmount='0' :endAmount='25' :duration='2'/>
                                </div>
                            </li>
                            <li>
                                <div class="cancelled-order">
                                    Cancelled
                                </div>
                                <div class="cancelled-number">
                                    <vue3-autocounter :startAmount='0' :endAmount='113' :duration='2'/>
                                </div>
                            </li>
                            <li>
                                <div class="completed-order">
                                    Completed
                                </div>
                                <div class="completed-number">
                                    <vue3-autocounter :startAmount='0' :endAmount='187' :duration='2'/>
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
                            <div class="table-content">
                                <div class="order-item">
                                    <div class="item-image">
                                        <img src="../../assets/productImages/cake-1-600x600-removebg-preview.png">
                                    </div>
                                    <div class="item-name">Blackforest Cake</div>
                                    <div class="item-quantity">5</div>
                                    <div class="item-price">RM 55.70</div>
                                </div>
                                <div class="order-item">
                                    <div class="item-image">
                                        <img src="../../assets/productImages/cake-1-600x600-removebg-preview.png">
                                    </div>
                                    <div class="item-name">Blackforest Cake</div>
                                    <div class="item-quantity">5</div>
                                    <div class="item-price">RM 55.70</div>
                                </div>
                                <div class="order-item">
                                    <div class="item-image">
                                        <img src="../../assets/productImages/cake-1-600x600-removebg-preview.png">
                                    </div>
                                    <div class="item-name">Blackforest Cake</div>
                                    <div class="item-quantity">5</div>
                                    <div class="item-price">RM 55.70</div>
                                </div>
                            </div>
                        </div>
                        <div class="view-orders">
                            <div class="view-orders-button">
                                View All Orders
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-container">
                    <div class="total-revenue-container">
                        <div class="total-revenue-title">Total Revenue :</div>
                        <div class="total-revenue-value">
                            RM 5813.40
                        </div>
                    </div>
                    <div class="goals">
                        <div class="goals-top-container">
                            <div class="goals-title">Goals and Overview</div>
                            <div class="months-dropdown">
                                January 2023
                                <i class="fa-solid fa-chevron-down"></i>
                            </div>
                        </div>
                        <div class="goals-content">
                            <div class="revenue-title">
                                Revenue
                                <div>RM 100.50 / RM 10000</div>
                            </div>
                            <div class="revenue-bar">
                                <div class="revenue-progression"></div>
                            </div>
                            <div class="order-title">
                                Order
                                <div>10 / 30</div>
                            </div>
                            <div class="order-bar">
                                <div class="order-progression"></div>
                            </div>
                        </div>
                        <div class="edit-goals">
                            <div class="edit-goals-button">
                                <i class="fa-solid fa-pencil"></i>
                                Edit Goals
                            </div>
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
export default {
    components: {
        NavigationBar,
        WebsiteFooter
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

.item-head {
    width: 150px;
}

.name-head {
    width: 280px;
}

.quantity-head {
    width: 120px;
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
    color: rgb(139,139,139);
}

.months-dropdown i {
    font-size: 13px;
    margin-left: 1px;
}

.goals-content {
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
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
</style>