<template>
  <div class="viewport">
    <NavigationBar/>
    <div class="background-image">
      <div class="content">
        <Transition>
        <div class="text" data-test="product-action">
            {{title}}
        </div>
        </Transition>
      </div>
    </div>
    <div class="main-container">
      <DeleteProduct v-if="component == 'DeleteProduct'"/>
      <CreateProduct v-else/>
    </div>
    <WebsiteFooter/>
  </div>
</template>

<script>
import NavigationBar from "../navigationBar/NavigationBar.vue"
import WebsiteFooter from "../footer/WebsiteFooter.vue"
import CreateProduct from "./CreateProduct.vue"
import DeleteProduct from './DeleteProduct.vue'
export default {
    components: {
        NavigationBar,
        WebsiteFooter,
        CreateProduct,
        DeleteProduct
    },
    mounted() {
      this.component = this.$storage.getStorageSync("editProducts")
      if (this.component == "CreateProduct") {
        this.title = "Create Product"
      }
      else {
        this.title = "Delete Product"
      }
    },
    data() {
      return {
        component: null,
        title: null
      }
    }
}
</script>

<style scoped>
.viewport {
  position: relative;
  background-color: rgb(250,250,250);
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

.main-container {
  margin-bottom: 100px;
}
</style>