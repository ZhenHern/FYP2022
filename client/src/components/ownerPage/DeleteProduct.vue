<template>
  <div>
    <div class="top-container">
        <div class="category-dropdown">
            <div class="category-title">
                Category
            </div>
            <div class="category-input">
                <select v-model="category">
                    <option :value="category.category_name" v-for="(category, index) in categories" :key="index">{{category.category_name}}</option>
                </select>
            </div>
        </div>
        <div class="product-dropdown">
            <div class="product-title">
                Product
            </div>
            <div class="product-input">
                <select v-model="product">
                    <option :value="category.category_name" v-for="(product, index) in products" :key="index">{{product.product_id}} - {{product.product_name}}</option>
                </select>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import ProductService from "../../services/ProductService"
export default {
    async mounted() {
        this.categories = await ProductService.showAllCategories()
        this.products = await ProductService.showAllProducts()
    },
    data() {
        return {
            categories: [],
            category: "",
            products: [],
            product: ""
        }
    },
    watch: {
        async category(newCategory) {
            for(let i = 0; i < this.categories.length; i++) {
                if (this.categories[i].category_name == newCategory) {
                    var categoryID = this.categories[i].category_id
                    break
                }
            }
            this.products = await ProductService.showProducts(categoryID)
        }
    }
}
</script>

<style scoped>
.top-container {
  padding: 15px 40px;
  margin-top: 50px;
  height: 120px;
  width: 1530px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  color: #000;
  border-radius: 4px;
  box-shadow: 0px 2px 15px rgb(0 0 0 / 17%);
  font-size: 17px;
  position: relative;
}

.category-dropdown {
    float: left;
    margin-right: 200px;
}

.category-title {
    margin-bottom: 7px;
}

.category-input select {
    padding: 7px;
    width: 200px;
    border: 1px solid #d3d7db;
}

.category-input select:focus {
    outline: none;
    border: 1px solid black;
}

.product-title {
    margin-bottom: 7px;
}

.product-input select {
    padding: 7px;
    width: 200px;
    border: 1px solid #d3d7db;
}

.product-input select:focus {
    outline: none;
    border: 1px solid black;
}

</style>