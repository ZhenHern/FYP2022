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
                <select v-model="productID">
                    <option :value="product.product_id" v-for="(product, index) in products" :key="index">{{product.product_id}} - {{product.product_name}}</option>
                </select>
            </div>
        </div>
    </div>
    <div class="bot-container" v-if="product != null">
        <div class="product-details">
            <div class="image-container">
                <img :src="getImgUrl(product.image_name1)">
            </div>
            <div class="product-information">
                <div class="product-top">
                    <div class="product-name">{{product.product_name}}</div>
                    <div class="product-price">RM {{product.product_price}}</div>
                </div>
                <div class="product-description">
                    {{product.product_description}}
                </div>
                <div class="ingredients">
                    <div class="ingredients-title">Ingredients:</div>
                    <ul class="ingredients-content">
                        <li v-for="(ingredient, index) in ingredients" :key="index">{{ingredient.ingredient_name}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="delete-button" @click="openDeleteOverlay()">
            Delete
        </div>
    </div>
  </div>
  <div class="delete-overlay" ref="deleteOverlay">
        <div class="delete-container">
            <div class="delete-text">
                Are you sure you want to delete this product?
            </div>
            <div class="delete-buttons">
                <div class="yes-button" @click="deleteProduct()">
                    Yes
                </div>
                <div class="no-button" @click="closeDeleteOverlay()">
                    No
                </div>
            </div>
        </div>
    </div>
  <DisplayOverlay ref="overlay"/>
</template>

<script>
import ProductService from "../../services/ProductService"
import DisplayOverlay from '../userProfilePage/DisplayOverlay.vue'
export default {
    components: {
        DisplayOverlay
    }, 
    async mounted() {
        this.categories = await ProductService.showAllCategories()
        this.products = await ProductService.showAllProducts()
    },
    data() {
        return {
            categories: [],
            category: "",
            products: [],
            productID: "",
            product: null,
            ingredients: null
        }
    },
    methods: {
        getImgUrl(picture) {
            return "https://13.211.124.167/images/" + picture
        },
        openDeleteOverlay() {
            this.$refs.deleteOverlay.style.display = "block"
        },
        closeDeleteOverlay() {
            this.$refs.deleteOverlay.style.display = "none"
        },
        async deleteProduct() {
            try {
                await ProductService.deleteProduct({
                    productID: this.productID
                })
                this.rerender()
                this.$refs.deleteOverlay.style.display = "none"
                this.$refs.overlay.openOverlay("Item is deleted")
            }
            catch { 
                this.$refs.deleteOverlay.style.display = "none"
                this.$refs.overlay.openErrorOverlay("Item cannot be deleted")
            }
        },
        async rerender() {
            this.category = ""
            this.productID = ""
            this.product = null
            this.products = await ProductService.showAllProducts()
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
        },
        async productID(newProductID) {
            this.product = await ProductService.showProduct(newProductID)
            this.ingredients = await ProductService.showIngredients(newProductID)
        }
    }
}
</script>

<style scoped>
.top-container {
    padding: 15px 40px;
    margin-top: 50px;
    height: 120px;
    width: 90%;
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

.bot-container {
    display: block;
    position: relative;
    padding: 40px 120px;
    margin-top: 3px;
    height: 570px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    background-color: #fff;
    color: #000;
    border-radius: 4px;
    box-shadow: 0px 1px 2px rgb(0 0 0 / 17%);
}

.product-details {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.image-container {
    height: 400px;
    width: 400px;
}

.image-container img {
    height: 400px;
    width: 400px;
}

.product-information {
    width: 800px;
    height: 400px;
}

.product-top {
    font-size: 22px;
    display: flex;
    justify-content: space-between;
}

.product-price {
    color: rgb(233, 165, 18);
}

.product-description {
    margin-top: 25px;
}

.ingredients {
    margin-top: 80px;
    font-size: 18px;
}

ul {
    margin-top: 5px;
    list-style-position: inside;
    font-size: 15px;
    column-count: 3;
}

.delete-button {
    position: absolute;
    right: 50px;
    bottom: 50px;
    width: 150px;
    height: 40px;
    background: rgb(233, 90, 71);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    border-radius: 4px;
}

.delete-button:hover {
    cursor: pointer;
}

.delete-overlay {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: none;
    z-index: 2;
}

.delete-container {
    width: 500px;
    height: 300px;
    background: white;
    border-radius: 5%;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 40px;
}

.delete-text {
    position: relative;
    top: 25px;
    font-size: 20px;
    text-align: center;
}

.delete-buttons {
    position: relative;
    top: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.yes-button {
    height: 40px;
    width: 80px;
    border-radius: 4px;
    background: #5b6468;
    color: white;
    box-shadow: 0 3px 10px #616262;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 100px;
}


.yes-button:active {
    background: #3f4547;
}

.no-button:active {
    background: #3f4547;
}


.no-button  {
    height: 40px;
    width: 80px;
    border-radius: 4px;
    background: #5b6468;
    color: white;
    box-shadow: 0 3px 10px #616262;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 100px;
}

</style>