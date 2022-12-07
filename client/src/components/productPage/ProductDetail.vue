<template>
  <div class="container">
    <div class="details">
        <div class="back-button">
            <i class="fa fa-chevron-circle-left" aria-hidden="true" @click="$emit('checkDetails', {showDetails: false, slideDirection: 'slide-left'})"></i>
        </div>
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
  </div>
</template>

<script>
import ProductService from "../../services/ProductService"
export default {
    props: {
        productID: Number
    },
    async mounted() {
        var productDetails = null
        var productIngredients = null

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
            productIngredients: null
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
    height: 1500px;
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

.details {
    position: relative;
    width: 1200px;
    height: 700px;
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
}

.information {
    float: left;
    padding: 50px;
    width: 600px;
    height: auto
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

img {
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

img {
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

    img {
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

    img {
        height: 100%;
        width: 100%;
    }

    .top-information {
        font-size: 17px;
    }
}

@media (max-width: 900px) {

    .information {
        margin-top: 50px;
    }

    .back-button {
        height: auto;
        left: 0px;
        top: -40px;
    }
}

@media (max-width: 500px) {
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