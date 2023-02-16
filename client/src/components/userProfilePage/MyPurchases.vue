<template>
  <div class="main-container">
    <div class="navigation-header">
        <div class="navigation-button-active">All</div>
        <div class="navigation-button">To Collect</div>
        <div class="navigation-button">Completed</div>
        <div class="navigation-button">Cancelled</div>
    </div>
    <div class="order-list">
        <div class="order-item">
            <div class="top-container">
                <div class="order-title">
                    <div class="order-id">Order ID: 20198039</div>
                    <div class="order-status">Order has been prepared</div>
                </div>
                <div class="order-container">
                    <div class="order-content">
                        <div class="product-image">
                            <img src="../../assets/productImages/cake-1-600x600-removebg-preview.png">
                        </div>
                        <div class="name-quantity">
                            <div class="name">Blackforest Cake</div>
                            <div class="quantity">x1</div>
                        </div>
                    </div>
                    <div class="price">RM 55.50</div>
                </div>
                <div class="order-container">
                    <div class="order-content">
                        <div class="product-image">
                            <img src="../../assets/productImages/cake-1-600x600-removebg-preview.png">
                        </div>
                        <div class="name-quantity">
                            <div class="name">Blackforest Cake</div>
                            <div class="quantity">x1</div>
                        </div>
                    </div>
                    <div class="price">RM 55.50</div>
                </div>
                <div class="order-container">
                    <div class="order-content">
                        <div class="product-image">
                            <img src="../../assets/productImages/cake-1-600x600-removebg-preview.png">
                        </div>
                        <div class="name-quantity">
                            <div class="name">Blackforest Cake</div>
                            <div class="quantity">x1</div>
                        </div>
                    </div>
                    <div class="price">RM 55.50</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import AccountService from "../../services/AccountService"
// import ItemCartService from "../../services/ItemCartService"
import ProductService from "../../services/ProductService"
export default {
    async mounted() {
        var currentAccount = await AccountService.checkCurrentUser()
        this.currentUserID = currentAccount.login_id
        // this.itemList = await ItemCartService.showAllItems(2)

        // console.log(this.itemList[0].product_id)
        this.item = await ProductService.showProduct(1)
        this.testImage = this.item.image_name1
    },
    data() {
        return {
            currentUserID: null,
            itemList: [],
            item: null,
            testImage: null
        }
    },
    methods: {
        getImgUrl(picture) {
            console.log(picture)
            return require("../../assets/productImages/" + picture)
        },
    }
}
</script>

<style>
.main-container {
  position: relative;
  float: left;
  left: 0px;
  width: 940px;
  min-height: min-content;
  margin-left: 45px;
}

.navigation-header {
    width: 100%;
    margin-bottom: 12px;
    display: flex;
    overflow: hidden;
    background: #fff;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    flex-wrap: nowrap;
    justify-content: center;
    position: sticky;
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
</style>