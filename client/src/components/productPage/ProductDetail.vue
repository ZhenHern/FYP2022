<template>
  <div class="container">
    <DisplayOverlay ref="overlay"/>
    <div class="details">
        <div class="back-button">
            <i class="fa fa-chevron-circle-left" aria-hidden="true" @click="$emit('checkDetails', {showDetails: false, slideDirection: 'slide-left'})"></i>
        </div>
        <div class="top-container">
            <div class="information">
                <div class="top-information">
                    <div class="name">
                        {{productName}}
                    </div>
                    <div class="price">
                        RM {{productPrice}}
                    </div>
                </div>
                <hr>
                <div>
                    <p>{{productDesc}}</p>
                </div>
                <div class="ingredients">
                    Ingredients:
                    <div class="ingredients-list">
                        <ul>
                            <li v-for="(item, index) in productIngredients" :key="index">{{item.ingredient_name}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="carousel">
                <div class="slide">
                    <div class="prev-button" @click="prevSlide">
                        <i class="fa fa-arrow-left" aria-hidden="true"></i>
                    </div>
                    <div class="images" v-for="(slide, index) in image" :key="index">
                        <Transition :name="slideDirection">
                            <img v-show="index === currentSlide" :src="getImgUrl(index)" alt="">                        
                        </Transition>
                    </div>
                    <div class="next-button" @click="nextSlide">
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </div>
                    <div class="slider">
                        <div :class="[index === currentSlide ? 'slider-button-active' : 'slider-button']" v-for="(item, index) in 3" :key="index" @click="goSlide(index)">
                            <div :class="{active: index === currentSlide}"></div>
                            <div class="hover"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="order-top-container">
            <div class="order-title">Order Now</div>
        </div>
        <div class="order-bottom-container">
            <div class="order-container">
                <div class="order-image" v-for="(slide, index) in image.slice(0,1)" :key="index">
                    <img v-if="index === 0" :src="getImgUrl(index)" alt=""> 
                </div>
                <div class="order-right-container">
                    <div class="order-name-price">
                        <div class="order-name">
                            {{productName}}
                        </div>
                        <div class="order-price">
                            RM {{productPrice}}
                        </div>
                    </div>
                    <div class="quantity-container">
                        <div class="order-price-2">
                            RM {{productPrice}}
                        </div>
                        <div class="change-quantity">
                            <div class="minus-quantity" @click="minusQuantity()">
                                <i class="fa-solid fa-minus"></i>
                            </div>
                            <div class="quantity">
                                {{quantity}}
                            </div>
                            <div class="add-quantity" @click="addQuantity()">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="order-button-container">
            <div class="order-button" @click="addCart()">
                Place Order
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import ProductService from "../../services/ProductService"
import DisplayOverlay from '../userProfilePage/DisplayOverlay.vue'
import ItemCartService from '../../services/ItemCartService'
export default {
    props: {
        productID: Number
    },
    components: {
        DisplayOverlay
    },
    async mounted() {
        var productDetails = null
        var productIngredients = null
        this.currentUserID = this.$storage.getStorageSync("loginID")

        productDetails = await ProductService.showDetails(this.productID)
        productIngredients = await ProductService.showIngredients(this.productID)

        this.productName = productDetails.product_name
        this.productPrice = productDetails.product_price
        this.productDesc = productDetails.product_description
        this.image = [productDetails.image_name1, productDetails.image_name2, productDetails.image_name3]
        this.productIngredients = productIngredients
    },
    data() {
        return {
            image: [],
            currentSlide: 0,
            slideDirection: null,
            productName: null,
            productPrice: null,
            productDesc: null,
            productIngredients: null,
            quantity: 1,
            currentUserID: null
        }
    },
    methods: {
        getImgUrl(index) {
            return require('../../assets/productImages/'+ this.image[index])
        },
        prevSlide() {
            if (this.currentSlide != 0) {
                this.currentSlide -= 1
                this.slideDirection = "slide-left"
            }
            else {
                this.currentSlide = this.image.length - 1
                this.slideDirection = "slide-right"
            }
        },
        nextSlide() {
            if (this.currentSlide != this.image.length - 1) {
                this.currentSlide += 1
                this.slideDirection = "slide-right"
            }
            else {
                this.currentSlide = 0
                this.slideDirection = "slide-left"
            }
        },
        goSlide(index) {
            this.currentSlide = index
            this.slideDirection = "fade"
        },
        minusQuantity() {
            if (this.quantity != 1) {
                this.quantity -= 1
            }
        },
        addQuantity() {
            this.quantity += 1
        },
        async addCart() {
            if (this.$storage.getStorageSync("loginID") == undefined) {
                this.$refs.overlay.openErrorOverlay("Please login first")
            }
            else {
                await ItemCartService.addToCart({
                    userID: this.currentUserID,
                    productID: this.productID,
                    quantity: this.quantity
                })
            }
            this.quantity = 1
            this.$refs.overlay.openOverlay("Added into cart")
        }
    },
}
</script>

<style scoped>
::selection {
    background: #fdb822;
    color: white;
}

.container {
    width: 100%;
    height: fit-content;
}

.back-button {
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    left: -75px;
    margin-left: auto;
}

.back-button .fa {
    border-radius: 50%;
    font-size: 45px;
    transition: all 0.3s ease;
}

.back-button .fa:hover {
    cursor: pointer;
    color: #fdb822;
}

.top-container {
    width: auto;
    height: 700px;
}

.order-top-container {
    padding-left: 50px;
    padding-right: 50px;
}

.order-title {
    width: 100%;
    color: rgb(82, 62, 50);
    text-transform: uppercase;
    font-weight: bold;
    font-size: 22px;
    letter-spacing: 1px;
    word-spacing: 1px;
    padding-bottom: 20px;
    border-bottom: 2px solid #ddd;
}

.order-bottom-container {
    margin-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
}

.order-container {
    width: 100%;
    height: 82px;
    border: 1px solid #e1e1e1;
    padding: 12px;
    display: flex;
}

.order-image {
    width: 58px;
    height: 58px;
}

.order-image img {
    width: 100%;
    height: 100%;
}

.order-right-container {
    float: left;
    margin-left: 20px;
    height: 58px;
    flex-grow: 1;
}

.order-name-price {
    display: flex;
    justify-content: space-between;
}

.order-price {
    color: rgb(233, 165, 18);
}

.order-price-2 {
    display: none;
    color: rgb(233, 165, 18);
}

.quantity-container {
    display: flex;
    justify-content: end;
}

.change-quantity {
    display: flex;
    margin-top: 10px;
    position: relative;
    right: 0px;
}

.minus-quantity {
    width: 22px;
    height: 24px;
    line-height: 24px;
    font-size: 10px;
    color: #333333;
    cursor: pointer;
    border: 1px solid #e1e1e1;
    background-color: #f1f1f1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.quantity {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    width: 38px;
    height: 24px;
    line-height: 22px;
    font-size: 13px;
    font-weight: bold;
    color: #333333;
    padding: 0 2px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
}

.add-quantity {
    width: 22px;
    height: 24px;
    line-height: 24px;
    font-size: 10px;
    color: #333333;
    cursor: pointer;
    border: 1px solid #e1e1e1;
    background-color: #f1f1f1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.order-button-container {
    margin-top: 20px;
    padding-left: 50px;
    padding-right: 50px;
    display: flex;
    justify-content: end;
}

.order-button {
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 38px;
    color: #684f40;
    font-weight: bold;
    border: 2px solid #684f40;
    word-spacing: 1px;
    transition: 0.3s ease color, 0.3s ease background-color;
}

.order-button:hover {
    cursor: pointer;
    background: #684f40;
    color: white; 
}

.details {
    position: relative;
    width: 1200px;
    height: fit-content;
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 100px;
}

.information {
    float: left;
    padding: 50px;
    width: 600px;
    height: 700px;
}

.top-information {
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    font-size: 25px;
    font-weight: bold;
    letter-spacing: 1px;
}

.name {
    color: rgb(82, 62, 50);
}

.price {
    color: rgb(233, 165, 18);
}

hr {
  position: relative;
  margin: auto;
  height: 0px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-top: 1px solid #ccc;
}

p {
    margin-bottom: 20px;
    text-align: justify;
}

.ingredients {
    padding-top: 30px;
    height: 250px;
    color: rgb(82, 62, 50);
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    color: rgb(233, 165, 18);
}

.ingredients-list {
    text-transform: none;
    padding-top: 15px;
    font-size: 18px;
    color: black;
}

ul {
    column-count: 3;
    list-style-position: inside;
}

li {
    margin-bottom: 15px;
}

.carousel {
    position: relative;
    padding: 50px;
    float: right;
    width: 600px;
    height: 100%;
}

.slide {
    position: relative;
    width: 500px;
    height: 500px;
    background: rgb(250, 236, 205);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.images img {
    position: absolute;
}

.fa {
    color: #684f40;
    background: white;
    font-size: 20px;
}

.fa-arrow-left {
    color: #684f40;
    transition: color 0.3s ease;
}

.fa-arrow-right {
    color: #684f40;
    transition: color 0.3s ease;
}

.prev-button {
    display: flex;
    position: relative;
    left: 5px;
    width: 50px;
    height: 50px;
    border: 2px solid #684f40;
    border-radius: 50%;
    background-color: white;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease, left 0.3s ease, border-color 0.3s ease;
    z-index: 3;
}

.next-button {
    display: flex;
    position: relative;
    right: 5px;
    width: 50px;
    height: 50px;
    border: 2px solid #684f40;
    border-radius: 50%;
    background-color: white;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease, right 0.3s ease, border-color 0.3s ease;
    z-index: 3;
}

.images {
    width: 100%;
    height: 100%;
    position: absolute;
}

.images img {
    height: 100%;
    width: 100%;
}

.prev-button:hover { 
    border-color: #fdb822;
}

.next-button:hover {
    border-color: #fdb822;
}

.prev-button:hover .fa-arrow-left {
    color: #fdb822;
}

.next-button:hover .fa-arrow-right {
    color: #fdb822;
}

.slide:hover  {
    cursor: pointer;
}

.slide:hover .prev-button {
    opacity: 1;
    left: 25px;
}

.slide:hover .next-button {
    opacity: 1;
    right: 25px;
}

.slider {
    display: flex;
    position: absolute;
    width: 100%;
    height: 20%;
    bottom: 0px;
    justify-content: center;
    align-items: center;
}

.slider-button {
    position: relative;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid #684f40;
    margin-right: 10px;
    transition: border-color 0.3s ease;
}

.slider-button-active {
    position: relative;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid #fdb822;
    margin-right: 10px;
    transition: border-color 0.3s ease;
}

.active {
    opacity: 1;
    position: absolute;
    top: 2px;
    left: 2px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fdb822;
    transition: opacity 0.3s ease;
}

.hover {
    opacity: 0;
    position: absolute;
    top: 2px;
    left: 2px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fdb822;
    transition: opacity 0.3s ease;
}

@media (max-width: 1400px) {
    .slide {
        position: relative;
        width: 400px;
        height: 400px;
        background: rgb(250, 236, 205);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .images img {
        height: 100%;
        width: 100%;
    }

    .carousel {
        width: 500px;
    }

    .information {
        width: 500px;
    }

    .details {
        width: 1000px;
    }

    .prev-button {
        width: 40px;
        height: 40px;
    }

    .next-button {
        width: 40px;
        height: 40px;
    }

    .fa {
        font-size: 15px;
    }
}

@media (max-width: 1160px) {
    .details {
        width: 80%;
    }

    .top-container {
        height: fit-content;
        overflow: auto;
    }
    
    .information {
        width: 100%;
        padding: 0px;
    }

    .carousel {
        width: 100%;
        height: auto;
        padding: 0px;
    }

    .slide {
        position: relative;
        width: 100%;
        height: auto;
        background: rgb(250, 236, 205);
        padding-bottom: 100%;
    }

    .images {
        bottom: 0px;
    }

    .prev-button {
        position: absolute;
        width: 50px;
        height: 50px;
        top: 45%;
    }

    .next-button {
        position: absolute;
        width: 50px;
        height: 50px;
        top: 45%;
    }

    .images img {
        height: 100%;
        width: 100%;
    }

    .top-information {
        font-size: 17px;
    }

    .order-top-container {
        padding: 0px;
        margin-top: 50px;
    }

    .order-bottom-container {
        padding: 0px;
    }

    .order-button-container {
        padding: 0px;
    }
}

@media (max-width: 900px) {
    .information {
        margin-top: 50px;
    }

    .top-container {
        height: fit-content;
        overflow: auto;
    }

    .back-button {
        height: auto;
        left: 0px;
        top: -40px;
    }
}

@media (max-width: 585px) {
    .prev-button {
        width: 32px;
        height: 32px;
    }

    .next-button {
        width: 32px;
        height: 32px;
    }

    .fa {
        font-size: 15px;
    }

    .order-container {
        font-size: 15px;
    }

    .quantity-container {
        display: flex;
        justify-content: space-between;
    }

    .order-price {
        display: none;
    }

    .order-price-2 {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .change-quantity {
        margin-top: 0px;
    }
}

.slider-button:hover {
    border-color: #fdb822;;
}

.slider-button:hover .hover {
    opacity: 1;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease-out;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(60px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-60px);
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease-out;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(-60px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(60px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>