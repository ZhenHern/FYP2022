<template>
  <div>
    <div class="product-grid">
      <TransitionGroup name="list">
      <div class="grid-item" v-for="(product, index) in currentProducts" :key="index">
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
    <div class="pagination" v-if="totalPage >= 10">
      <div :class="currentPage == 1 ? 'page-active' : 'page-button'" @click="changePage(1)">1</div>
      <div v-if="currentPage - 1 >= 5">...</div>
      <div :class="currentPage == page ? 'page-active' : 'page-button'" v-for="(page, index) in [currentPage - 1, currentPage, currentPage + 1]" :key="index" @click="changePage(page)" v-show="currentPage - 1 >=5 && totalPage - currentPage >= 5">{{page}}</div>
      <div :class="currentPage == page + 1 ? 'page-active' : 'page-button'" v-for="(page, index) in 6" :key="index" @click="changePage(page+1)" v-show="currentPage - 1 < 5">{{page + 1}}</div>
      <div :class="currentPage == totalPage - page ? 'page-active' : 'page-button'" v-for="(page, index) in [6, 5 , 4, 3, 2, 1]" :key="index" @click="changePage(totalPage - page)" v-show="totalPage - currentPage < 5 ">{{totalPage - page}}</div>
      <div v-if="totalPage - currentPage >= 5">...</div>
      <div :class="currentPage == totalPage ? 'page-active' : 'page-button'" @click="changePage(totalPage)">{{totalPage}}</div>
    </div>
    <div class="pagination" v-else>
      <div :class="currentPage == page ? 'page-active' : 'page-button'" v-for="(page, index) in totalPage" :key="index" @click="changePage(page)">{{page}}</div>
    </div>
  </div>
</template>

<script>
import ProductService from "../../services/ProductService"

export default {
  props: {
    category: Number
  },
  async mounted() {
    this.products = await ProductService.showProducts(this.category)
    for(var i = 0; i < Object.keys(this.products).length; i++) {
      this.quantity.push(0)
    }
    this.currentProducts = this.products.slice((this.currentPage - 1) * 8, (this.currentPage - 1) * 8 + 8)
    this.totalPage = Math.ceil(Object.keys(this.products).length / 8)
  },
  data() {
    return {
      quantity: [],
      totalPage: 10,
      products: null,
      currentProducts: null,
      currentPage: 1
    }
  },
  watch: { 
    currentPage(newPage) {
      this.currentProducts = this.products.slice((newPage - 1) * 8, (newPage - 1) * 8 + 8)
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
    },
    changePage(page) {
      this.currentPage = page
      window.scrollTo({ top: 0, behavior: 'smooth'})
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

.pagination {
  position: relative;
  top: 50px;
  width: 30%;
  margin-left: 35%;
  margin-right: 35%;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
}

.page-button {
  color: black;
  transition: color 0.3s ease-in-out;
}

.page-button:hover {
  cursor: pointer;
  color: #fdb822;
}

.page-active {
  color: white;
  border-radius: 50%;
  background-color: #303133;
  height: 25px;
  width: 25px;
  line-height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.6s ease-in-out, background-color 0.6s ease-in-out;
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