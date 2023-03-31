<template>
  <div class="viewport">
    <NavigationBar/>
    <div class="background-image">
      <div class="content">
        <Transition>
        <div class="text">
            Home
        </div>
        </Transition>
      </div>
    </div>
    <Transition :name="slideDirection">
      <div class="landing-page" v-if="!showDetails" @checkDetails="checkDetails">
        <div class="latest-product-top-container">
          <div class="latest-product-title">
              Latest Bakery Products
          </div>
          <div class="latest-product-content">
              Check some of our best products and feel the great passion for food
          </div>
        </div>
        <div class="product-grid">
          <TransitionGroup name="list">
          <div class="grid-item" v-for="(product, index) in products" :key="index">
            <img :src="getImgUrl(product.image_name1)">
            <div class="product-content">
              {{product.product_name}} <br> <span>RM {{product.product_price}}</span>
            </div>
            <div class="product-hover">
              <i class="fa fa-search" aria-hidden="true" @click="goToDetails(product.product_id,'slide-right')"></i>
              <br>
            </div>
          </div>
          </TransitionGroup>
        </div>
      </div>
      <ProductDetail v-else @checkDetails="checkDetails" :productID="productID"/>
    </Transition>
    <WebsiteFooter/>
  </div>
</template>

<script>
import NavigationBar from "../navigationBar/NavigationBar.vue"
import ProductDetail from '../productPage/ProductDetail.vue'
import WebsiteFooter from "../footer/WebsiteFooter.vue"
import ProductService from '../../services/ProductService'
export default {
    components: {
        NavigationBar,
        ProductDetail,
        WebsiteFooter
    },
    async mounted() {
        var products = await ProductService.showLatestProducts()
        this.products = products.slice(0,8)
        console.log(this.products)
    },
    data() {
        return {
            showDetails: false,
            products: null,
            productID: null,
            slideDirection: "slide-right",
        }
    },
    methods: {
        getImgUrl(picture) {
            return require("../../assets/productImages/" + picture)
        },
        goToDetails(productID, slideDirection) {
            this.productID = productID, 
            this.showDetails = true, 
            this.slideDirection = slideDirection
            window.scrollTo({top: 295, behavior: 'smooth'});
        },
        checkDetails({productID, showDetails, slideDirection}) {
          this.productID = productID
          this.showDetails = showDetails
          this.slideDirection = slideDirection
          window.scrollTo({top: 295, behavior: 'smooth'});
        }
    },
}
</script>

<style scoped>
.viewport {
  position: relative;
  background-color: rgb(247,247,247);
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

.latest-product-top-container {
    margin-top: 80px;
    margin-bottom: 80px;
    margin-left: auto;
    margin-right: auto;
    width: 1170px;
}

.latest-product-title {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 19px;
    line-height: 26px;
    text-transform: uppercase;
    color: #684f40;
    font-weight: bold;
    word-spacing: 2px;
    text-decoration: underline;
    text-underline-position: under;
}

.latest-product-content {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 15px;
    line-height: 25px;
    padding-top: 30px;
    color: #696969;
}

.product-grid {
  position: relative;
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: 240px 240px 240px 240px;
  grid-auto-rows: 400px;
  column-gap: 30px;
  row-gap: 80px;
  justify-items: center;
  justify-content: center;
}

.grid-item {
  position: relative;
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid rgb(104, 79, 64);
  width: 100%;
  height: 100%;
  padding: 5px;
  text-transform: uppercase; 
  text-align: center;
  color: #684f40;
  line-height: 30px;
  font-weight: 700;
}

img {
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
  width: 100%;
}

.grid-item:hover img {
  opacity: 0.5;
}

.grid-item:hover .product-hover {
  visibility: visible;
  opacity: 1;
}

.grid-item span {
  color: rgb(253,184,34);
}

.product-hover {
  transition: visibility 0s, opacity 0.5s linear;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70%;
  background: rgba(253,184,34,0.9);
}

.product-hover .fa {
  transition: background-color 0.6s ease-in-out, color 0.6s ease-in-out;
  font-size: 18px;
  position: relative;
  top: -25px;
  width: 56px;
  height: 56px;
  background-color: white;
  border-radius: 50%;
  color: #fdb822;
  border: 2px solid #fdb822;
  display: inline-block;
  line-height: 52px;
}

.product-hover .fa:hover {
  cursor: pointer;
  background-color: #684f40;
  border-color: #684f40;
  color: white;
}

.product-hover span {
  color: white;
  font-size: 25px;
  letter-spacing: 1px;
  word-spacing: 2px;
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
</style>