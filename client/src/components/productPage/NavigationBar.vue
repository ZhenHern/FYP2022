<template>
  <div class="main-navigation-bar">
      <div class="logo">
        <a href="index" class="logo">Bakery Shop</a>
      </div>
      <input type="checkbox" id="check">
      <div class="navigation-bar">
        <ul>
          <li @click="changeCategory(category.category_id)" v-for="(category, index) in categories" :key="index" :class="{ active: index + 1 === categoryID}">{{category.category_name}}</li>
        </ul>
      </div>
      <div class="buttons">
          <a href="login" class="log-in">Log in</a>
      </div>
      <div class="responsive-nav">
        <label for="check">
          <i class="fas fa-bars menu-btn"></i>
          <i class="fas fa-times close-btn"></i>
        </label>
      </div>
    </div>
</template>

<script>
import { ref,onMounted } from '@vue/runtime-core'
import ProductService from '../../services/ProductService'
export default {
  props: {
    activeComponent: String,
  },
  setup() {
    var categories = ref(null)
    onMounted(async() => {
      categories.value = await ProductService.showAllCategories()
    })
    return {
      categories
    }
  },
  data() {
    return {
      categoryID: 1
    }
  },
  methods: {
    changeCategory(categoryID) {
      this.categoryID = categoryID
      this.$emit("changeCategory", categoryID);
    }
  }
}
</script>

<style scoped>
::selection {
  background: #fdb822;
  color: white;
}

.main-navigation-bar {
  height: 120px;
  display: flex;
  justify-content: space-between;
}

.logo {
  height: 100%;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
}

.logo a {
  color: #000;
  font-size: 30px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1px;
}

.navigation-bar {
  width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navigation-bar ul {
  list-style-type: none;
}

.navigation-bar ul li {
  float: left;
  display: block;
  text-align: center;
  padding: 30px;
  text-decoration: none;
  font-size: 25px;
  color: black;
  transition: color 0.3s ease-in-out;
}

a {
  text-decoration: none;
  text-transform: uppercase;
}

.navigation-bar ul li:hover {
  color: rgba(160, 97, 84, 0.986);
  cursor: pointer;
}

.navigation-bar ul .active {
  color: rgba(160, 97, 84, 0.986);
}

.buttons {
  width: 17%;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 120%;
  white-space: nowrap;
  align-items: center;
}

.log-in {
  background-color: white;
  color: black;
  line-height: 1.5;
  padding: 8px 30px;
  border: 1px solid rgb(187, 186, 186);
}

.log-in:hover {
  background-color: rgb(235,236,237);
}

.responsive-nav {
  position: absolute;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

label {
  display: none;
}

#check {
  display: none;
}

@media (max-width: 1200px) {
  .responsive-nav {
    position: relative;
  }

  .navigation-bar {
    display: none;
  }

  .log-in {
    display: none;
  }

  label {
    display: block;
    font-size: 25px;
    cursor: pointer;
  }

  .menu-btn {
    color: black;
    transition: color 0.3s ease-in;
  }

  .menu-btn:hover {
    color: rgba(160, 97, 84, 0.986);
  }
  
  .close-btn:hover {
    color: #fff;
  }

  label .close-btn {
    display: none;
  }

  #check:checked ~ .navigation-bar {
    width: 100%;
    z-index: 2;
    position: fixed;
    background: #e9c26f;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #check:checked ~ .navigation-bar ul li {
    float: left;
    clear: left;
    display: block;
    text-align: center;
    padding: 30px;
    text-decoration: none;
    font-size: 25px;
    color: black;
    transition: color 0.3s ease-in-out;
  }

  #check:checked ~ .navigation-bar ul li:hover {
    color: white;
  }

  #check:checked ~ .navigation-bar ul .active {
    text-decoration: underline;
    text-underline-offset: 7px;
  }



  #check:checked ~ .responsive-nav label .close-btn {
    z-index: 2;
    display: block;
    position: fixed;
  }

}
</style>