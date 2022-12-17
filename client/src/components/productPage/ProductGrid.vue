<template>
  <div>
    <div class="product-grid">
      <TransitionGroup name="list">
      <div class="grid-item" v-for="(product, index) in products" :key="index">
        <img :src="getImgUrl(product.image_name1)">
        <div class="product-content">
          {{product.product_name}} <br> <span>RM {{product.product_price}}</span>
        </div>
        <div class="product-hover">
          <i class="fa fa-search" aria-hidden="true" @click="$emit('checkDetails', {productID: index + 1, showDetails: true, slideDirection: 'slide-right'})"></i>
          <br>
          <span>Quantity: {{quantity[index]}}</span>
          <div class="edit-quantity">
            <i class="fa-solid fa-circle-minus" @click="minusQuantity(index)"></i>
            <i class="fa-solid fa-circle-plus" @click="addQuantity(index)"></i>
          </div>
        </div>
      </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from '@vue/runtime-core'
import ProductService from "../../services/ProductService"

export default {
  props: {
    category: Number
  },
  setup(props) {
    var quantityArray = []
    var length = 0
    var products = ref(null)

    onMounted(async () => {
      products.value = await ProductService.showProducts(props.category)
      length = Object.keys(products.value).length
      for(var i = 0; i < length; i++) {
        quantityArray.push(0)
      }
    })

    return {
      products, quantityArray
    }
  },
  data () {
    return {
      quantity: this.quantityArray
    }
  },
  methods: {
    getImgUrl(picture) {
      return require("../../assets/productImages/" + picture)
    },
    minusQuantity(index) {
      if (this.quantity[index] !== 0) {
        this.quantity[index] -= 1
      }
    },
    addQuantity(index) {
      this.quantity[index] += 1
    }
  }
}
</script>

<style scoped>
::selection {
  background: #fdb822;
  color: white;
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
  padding-top: 150px;
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

.edit-quantity {
  padding-top: 55px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: space-around;
  font-size: 50px;
}

.edit-quantity i {
  background-color: #fdb822;
  color: white;
  transition: background-color 0.6s ease-in-out, color 0.6s ease-in-out;
  border-radius: 50%;
}

.edit-quantity i:hover {
  cursor: pointer;
  color: #684f40;
  border-color: #684f40;
  background-color: white;
}

@media (max-width: 1200px) {
  .product-grid {
    position: relative;
    height: auto;
    width: 100%;
    display: grid;
    grid-template-columns: 190px 190px 190px 190px;
    grid-auto-rows: 330px;
    column-gap: 30px;
    row-gap: 60px;
    padding-top: 150px;
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
}

@media (max-width: 900px) {

  .product-grid {
    position: relative;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 90%;
    grid-auto-rows: var(--width);
    column-gap: 30px;
    row-gap: 60px;
    padding-top: 150px;
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

  .product-content {
    font-size: 25px;
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.75s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>