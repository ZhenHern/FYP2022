<template>
  <div>
    <div class="background-image">
      <div class="content">
        <Transition>
        <div class="text" data-test="product-category">
            {{productCategory}}
        </div>
        </Transition>
      </div>
    </div>
    <Transition :name="slideDirection">
      <ProductGrid :category="categoryID" v-if="!showDetails" @checkDetails="checkDetails"/>
      <ProductDetail v-else @checkDetails="checkDetails" :productID="productID"/>
    </Transition>
  </div>
</template>

<script>
import ProductService from "../../services/ProductService"
import ProductGrid from "./ProductGrid.vue"
import ProductDetail from "./ProductDetail.vue"

export default {
  async mounted() {
    this.categoryID = this.$storage.getStorageSync("categoryID")
    var productCategory = null
    productCategory = await ProductService.showCategory(this.categoryID)
    this.productCategory = productCategory.category_name
    this.categoryID = this.$storage.getStorageSync("categoryID")
  },
  components: {
    ProductGrid,
    ProductDetail
  },
  data () {
    return {
      slideDirection: "slide-right",
      showDetails: false,
      productID: null,
      productCategoryID: null,
      productCategory: null,
      categoryID: 1
    }
  },
  methods: {
    checkDetails({productID, showDetails, slideDirection}) {
      this.productID = productID
      this.showDetails = showDetails
      this.slideDirection = slideDirection
      window.scrollTo({top: 295, behavior: 'smooth'});
    }
  }
}
</script>

<style scoped>
::selection {
  background: #fdb822;
  color: white;
}

.background-image {
  position: relative;
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

@supports (-webkit-overflow-scrolling: touch) {
  .content::after {
    background-attachment: scroll;
  }
}

.text {
  font-size: 70px;
  font-weight: 700;
  letter-spacing: 4px;
  color: white;
  text-transform: uppercase;
}

hr {
  width: 60%;
  margin: auto;
  height: 5px;
  background-color: white;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.75s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>