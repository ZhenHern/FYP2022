<template>
    <div class="top-container">
      <div :class="step == 1 ? 'product-details-top-active' : 'product-details-top'">
        1. Product Details
      </div>
      <div :class="step == 2 ? 'category-ingredients-top-active' : 'category-ingredients-top'">
        2. Category & Ingredients
      </div>
    </div>
    <div class="product-details" v-if="step == 1">
        <div class="product-details-1">
            <div class="product">
                <div class="product-title">
                    Product Name
                </div>
                <div class="product-input">
                    <input type="text" v-model="productName">
                </div>
            </div>
            <div class="product">
                <div class="product-title">
                    Product Price (RM)
                </div>
                <div class="product-input">
                    <input type="number" v-model="productPrice">
                </div>
            </div>
        </div>
        <div class="product-images">
            <div class="product-image-1">
                <div class="product-title">
                    Image 1
                </div>
                <div class="product-input-file">
                    <input type="file" name="image" accept="image/*" @change="uploadImage1()" ref="image1">
                </div>
            </div>
            <div class="product-image-2">
                <div class="product-title">
                    Image 2
                </div>
                <div class="product-input-file">
                    <input type="file" name="image"  accept="image/*" @change="uploadImage2()" ref="image2">
                </div>
            </div>
            <div class="product-image-3">
                <div class="product-title">
                    Image 3
                </div>
                <div class="product-input-file">
                    <input type="file" name="image"  accept="image/*" @change="uploadImage3()" ref="image3">
                </div>
            </div>
        </div>
        <div class="product-description">
            <div class="product-description-title">
                Product Description
            </div>
            <div class="product-description-input">
                <textarea cols="30" rows="10" v-model="productDesc"></textarea>
            </div>
        </div>
        <div class="buttons-1">
            <div class="previous-button">
                Previous Step
            </div>
            <div class="next-button" @click="nextStep()">
                Next Step
            </div>
        </div>
    </div>
    <div class="product-category" v-else>
        <div class="product-details-1">
            <div class="product">
                <div class="product-title">
                    Category
                </div>
                <div class="product-input">
                    <select v-model="category">
                        <option :value="category.category_name" v-for="(category, index) in categories" :key="index">{{category.category_name}}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="product-details-1">
            <div class="product">
                <div class="product-title">
                    Ingredient 1
                </div>
                <div class="product-input">
                    <input type="text" v-model="ingredient1">
                </div>
            </div>
            <div class="product">
                <div class="product-title">
                    Ingredient 2
                </div>
                <div class="product-input">
                    <input type="text" v-model="ingredient2">
                </div>
            </div>
            <div class="product">
                <div class="product-title">
                    Ingredient 3
                </div>
                <div class="product-input">
                    <input type="text" v-model="ingredient3">
                </div>
            </div>
        </div>
        <div class="product-details-1">
            <div class="product">
                <div class="product-title">
                    Ingredient 4
                </div>
                <div class="product-input">
                    <input type="text" v-model="ingredient4">
                </div>
            </div>
            <div class="product">
                <div class="product-title">
                    Ingredient 5
                </div>
                <div class="product-input">
                    <input type="text" v-model="ingredient5">
                </div>
            </div>
            <div class="product">
                <div class="product-title">
                    Ingredient 6
                </div>
                <div class="product-input">
                    <input type="text" v-model="ingredient6">
                </div>
            </div>
        </div>
        <div class="buttons-2">
            <div class="previous-button" @click="step = 1">
                Previous Step
            </div>
            <div class="finish-button" @click="finish()">
                Finish
            </div>
        </div>
    </div>
    <DisplayOverlay ref="overlay"/>
    <div>
    </div>
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
},
data() {
    return {
        productName: "",
        productPrice: "",
        productDesc: "",
        image1: null,
        image2: null,
        image3: null,
        categories: null,
        category: "",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        ingredient5: "",
        ingredient6: "",
        step: 1
    }
},
methods: {
    uploadImage1() {
        this.image1 = this.$refs.image1.files[0]
        console.log(this.image1)
    },
    uploadImage2() {
        this.image2 = this.$refs.image2.files[0]
        console.log(this.image2)
    },
    uploadImage3() {
        this.image3 = this.$refs.image3.files[0]
        console.log(this.image3)
    },
    async createProduct() {
        let data = new FormData();
        data.append("productName", this.productName)
        data.append("productDesc", this.productDesc)
        data.append("productPrice", this.productPrice)
        data.append("productCategory", this.category)
        data.append("image", this.image1)
        data.append("image", this.image2)
        data.append("image", this.image3)
        var ingredients = []
        ingredients.push(this.ingredient1)
        if (this.ingredient2 != "") {
            ingredients.push(this.ingredient2)
        }
        if (this.ingredient3 != "") {
            ingredients.push(this.ingredient3)
        }
        if (this.ingredient4 != "") {
            ingredients.push(this.ingredient4)
        }
        if (this.ingredient5 != "") {
            ingredients.push(this.ingredient5)
        }
        if (this.ingredient6 != "") {
            ingredients.push(this.ingredient6)
        }
        var product = await ProductService.createProduct(data)
        await ProductService.createIngredients({
            productID: product.product_id,
            ingredientName: ingredients
        })
    },
    nextStep() {
        if (this.productName != "" && this.productDesc != "" && this.productPrice != "" && this.image1 != null && this.image2 != null && this.image3 != null) {
            this.step = 2
        }
        else {
            this.$refs.overlay.openErrorOverlay("Please enter everything")
        }
    },
    async finish() {
        if (this.category != "" && this.ingredient1 != "") {
            await this.createProduct()
            this.step = 1
            this.productName = ""
            this.productDesc = ""
            this.productPrice = ""
            this.image1 = null
            this.image2 = null
            this.image3 = null
            this.category = ""
            this.ingredient1 = ""
            this.ingredient2 = ""
            this.ingredient3 = ""
            this.ingredient4 = ""
            this.ingredient5 = ""
            this.ingredient6 = ""
            this.$refs.overlay.openOverlay("Successfully created.")
        }
        else {
            this.$refs.overlay.openErrorOverlay("Please enter everything")
        }
    }
}
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

.top-container {
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

.product-details-top {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 100%;
    float: left;
    border-right: 2px solid #e7e7e7;
}

.product-details-top-active {
    background: #3F3F3F;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 100%;
    float: left;
    border-right: 2px solid #e7e7e7;
}

.category-ingredients-top {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 100%;
  float: left;
  border-right: 2px solid #e7e7e7;
}

.category-ingredients-top-active {
    background: #3F3F3F;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 100%;
    float: left;
    border-right: 2px solid #e7e7e7;
}

.product-details {
    display: block;
    position: relative;
    padding: 40px 120px;
    margin-top: 3px;
    height: 570px;
    width: 1530px;
    margin-left: auto;
    margin-right: auto;
    background-color: #fff;
    color: #000;
    border-radius: 4px;
    box-shadow: 0px 2px 15px rgb(0 0 0 / 17%);
}

.product {
    float: left;
    margin-right: 100px;
    width: 200px;
}

.product-details-1 {
    width: 100%;
    height: 70px;
    margin-bottom: 40px;
}

.product-images {
    width: 100%;
    height: 60px;
    margin-bottom: 45px;
}

.product-image-1 {
    float: left;
    margin-right: 20px;
    width: 280px;
}

.product-image-2 {
    float: left;
    margin-right: 20px;
    width: 280px;
}

.product-image-3 {
    float: left;
    margin-right: 20px;
    width: 280px;
}

.product-title {
    margin-bottom: 7px;
}

.product-description-title {
    margin-bottom: 7px;
}

.product-input input {
    padding: 7px;
    width: 200px;
    border: 1px solid #d3d7db;
}

.product-input select {
    padding: 7px;
    width: 200px;
    border: 1px solid #d3d7db;
}

.product-input input:focus {
    outline: none;
    border: 1px solid black;
}

.product-input select:focus {
    outline: none;
    border: 1px solid black;
}

textarea {
    padding: 12px 15px;
    width: 100%;
    height: 150px;
    border: 1px solid #d3d7db;
    resize: none;
    margin-bottom: 30px;
}

textarea:focus {
    outline: none;
    border: 1px solid black;
}

.buttons-1 {
    position: relative;
    left: 960px;
}

.buttons-2 {
    margin-top: 144px;
    position: relative;
    left: 960px;
}

.previous-button {
    width: 150px;
    height: 40px;
    background: #EAEEF4;
    color: #848485;
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    margin-right: 30px;
    border-radius: 4px;
}

.previous-button:hover {
    cursor: not-allowed;
}

.buttons-2 .previous-button {
    background: rgb(63, 63, 63);
    color: white;
}

.buttons-2 .previous-button:hover {
    cursor: pointer;
}

.next-button {
    width: 150px;
    height: 40px;
    background: rgb(63, 63, 63);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    border-radius: 4px;
    position: relative;
}

.next-button:hover {
    cursor: pointer;
}

.finish-button {
    width: 150px;
    height: 40px;
    background: rgb(97, 216, 42);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    border-radius: 4px;
    position: relative;
}

.finish-button:hover {
    cursor: pointer;
}

.product-category {
    position: relative;
    padding: 40px 120px;
    margin-top: 3px;
    height: 570px;
    width: 1530px;
    margin-left: auto;
    margin-right: auto;
    background-color: #fff;
    color: #000;
    border-radius: 4px;
    box-shadow: 0px 2px 15px rgb(0 0 0 / 17%);
}

</style>