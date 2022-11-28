<template>
  <div>
    <div class="background-image">
      <div class="content">
        <div class="text" v-for="(cat, index) in categories" :key="index">
          <div v-show="index === category - 1">
            {{cat.category_name}}
            <hr>
          </div>
        </div>
      </div>
    </div>
    <Transition :name="slideDirection">
      <ProductGrid :category="category" v-if="!showDetails" @checkDetails="checkDetails"/>
      <ProductDetail v-else @checkDetails="checkDetails" :productID="productID"/>
    </Transition>
  </div>
</template>

<script>
import {ref, onMounted} from '@vue/runtime-core'
import ProductService from "../../services/ProductService"
import ProductGrid from "./ProductGrid.vue"
import ProductDetail from "./ProductDetail.vue"

export default {
  props: {
    category: Number
  },
  setup() {
    var categories = ref(null)

    onMounted(async () => {
      categories.value = await ProductService.showAllCategories()
    })

    return {
      categories
    }
  },
  components: {
    ProductGrid,
    ProductDetail
  },
  data () {
    return {
      slideDirection: "slide-right",
      showDetails: false,
      productID: null
    }
  },
  methods: {
    checkDetails({productID, showDetails, slideDirection}) {
      this.productID = productID
      this.showDetails = showDetails
      this.slideDirection = slideDirection
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

</style>