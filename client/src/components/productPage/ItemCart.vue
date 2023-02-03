<template>
  <div class="overlay" ref="cart"
  >
    <div class="item-cart">
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
                    <tr>
                        <td>
                            <div class="product-image">
                                <img src="../../assets/cake1.png" alt="">
                            </div>
                        </td>
                        <td>Black Forest Cake</td>
                        <td>$ 99.99</td>
                        <td>
                            <div class="minus">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </div>
                                    1
                            <div class="plus">
                                <i class="fa fa-plus" aria-hidden="true"></i>
                            </div>
                        </td>
                        <td>$ 99.99 <i class="fa fa-times" aria-hidden="true"></i></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="product-image">
                                <img src="../../assets/cake1.png" alt="">
                            </div>
                        </td>
                        <td>Black Forest Cake</td>
                        <td>$ 99.99</td>
                        <td>
                            <div class="minus">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </div>
                                    1
                            <div class="plus">
                                <i class="fa fa-plus" aria-hidden="true"></i>
                            </div>
                        </td>
                        <td>$ 99.99 <i class="fa fa-times" aria-hidden="true"></i></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="product-image">
                                <img src="../../assets/cake1.png" alt="">
                            </div>
                        </td>
                        <td>Black Forest Cake</td>
                        <td>$ 99.99</td>
                        <td>
                            <div class="minus">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </div>
                                    1
                            <div class="plus">
                                <i class="fa fa-plus" aria-hidden="true"></i>
                            </div>
                        </td>
                        <td>$ 99.99 <i class="fa fa-times" aria-hidden="true"></i></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="product-image">
                                <img src="../../assets/cake1.png" alt="">
                            </div>
                        </td>
                        <td>Black Forest Cake</td>
                        <td>$ 99.99</td>
                        <td>
                            <div class="minus">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </div>
                                    1
                            <div class="plus">
                                <i class="fa fa-plus" aria-hidden="true"></i>
                            </div>
                        </td>
                        <td>$ 99.99 <i class="fa fa-times" aria-hidden="true"></i></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="product-image">
                                <img src="../../assets/cake1.png" alt="">
                            </div>
                        </td>
                        <td>Black Forest Cake</td>
                        <td>$ 99.99</td>
                        <td>
                            <div class="minus">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </div>
                                    1
                            <div class="plus">
                                <i class="fa fa-plus" aria-hidden="true"></i>
                            </div>
                        </td>
                        <td>$ 99.99 <i class="fa fa-times" aria-hidden="true"></i></td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="checkout">
            <div class="left-checkout">
                <div class="subtotal">Subtotal <span>$ 249.49</span></div>
                <div class="tnc">
                    <input type="checkbox">
                    I agree to <span>Terms & Condition</span>
                </div>
            </div>
            <div class="checkout-button">Checkout</div>
            <div class="close-button" @click="closeCart">Close Cart</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            showItemCart: false
        }
    },
    methods: {
        closeCart() {
            this.showItemCart = false
        }
    },
    watch: {
        showItemCart(newShow) {
            if (newShow == false) {
                this.$refs.cart.style.opacity = "0%";
                this.$refs.cart.style.visibility = "hidden";
            }
            else if (newShow == true) {
                this.$refs.cart.style.opacity = "100%";
                this.$refs.cart.style.visibility = "visible";
            }
        }
    }
}
</script>

<style scoped>
    .overlay {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(-45deg, #fdb822, #FFE7C9);
        z-index: 1;
        visibility: hidden;
        transition: opacity 0.5s ease, visibility 0.5s ease;
        opacity: 0%;
    }

    .item-cart {
        width: 1200px;
        height: 850px;
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
        height: 80%;
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
        width: 20%;
        background: #FAFAFA;
    }

    table th:nth-child(2) {
        padding-right: 10%;
        padding-left: 5%;
        text-align: left;
        width: 40%;
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
        .overlay {
            background: cadetblue;
        }
    }
</style>