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
          <i class="fa-sharp fa-solid fa-cart-shopping" @click="openItemCart()"></i>
          <a v-if="currentUserID === undefined || currentUserID === null" href="login" class="log-in">Log in</a>
          <div class="user-div" v-else>
            <div class="user-icon">
              <i class="fa fa-user" aria-hidden="true"></i>
            </div>
            <div class="dropdown">
              <div class="dropdown-header" @click="toggleDropdown()">
                <div class="username">{{firstName}}</div>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
              <div class="dropdown-content" ref="dropdown">
                <div class="my-account" @click="goToAccount()">
                  My Account
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
                <div class="my-purchases" @click="goToPurchase()">
                  My Purchases
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
                <div class="logout" @click="logout()">
                  Logout
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div class="responsive-cart">
        <i class="fa-sharp fa-solid fa-cart-shopping" @click="openItemCart()"></i>
      </div>
      <div class="responsive-nav">
        <label for="check">
          <i class="fas fa-bars menu-btn"></i>
          <i class="fas fa-times close-btn"></i>
        </label>
      </div>
      <ItemCart ref="itemCart"/>
    </div>
</template>

<script>
import AccountService from "../../services/AccountService"
import ProductService from '../../services/ProductService'
import ItemCart from "../productPage/ItemCart.vue"

export default {
  props: {
    activeComponent: String,
  },
  components: {
    ItemCart
  },
  async mounted() {
    this.currentUserID = this.$storage.getStorageSync("loginID")
    var currentUser = await AccountService.showCurrentUser(this.currentUserID)
    this.firstName = currentUser.first_name
    this.categories = await ProductService.showAllCategories()
  },
  data() {
    return {
      currentUserID: null,
      categories: null,
      categoryID: 1,
      showDropdown: false,
      firstName: ""
    }
  },
  methods: {
    changeCategory(categoryID) {
      this.categoryID = categoryID
      this.$emit("changeCategory", categoryID);
    },
    openItemCart() {
      this.$refs.itemCart.showItemCart = true
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
      if (this.showDropdown) {
        this.$refs.dropdown.style.visibility = "visible"
        this.$refs.dropdown.style.opacity = "100%"
      }
      else {
        this.$refs.dropdown.style.visibility = "hidden"
        this.$refs.dropdown.style.opacity = "0%"
      }
    },
    goToAccount() {
      this.$storage.setStorageSync("userProfile", "MyProfile")
      window.location.href = "userProfile"
    },
    goToPurchase() {
      this.$storage.setStorageSync("userProfile", "MyPurchases")
      window.location.href = "userProfile"
    },
    logout() {
      this.$storage.removeStorageSync("loginID")
      this.$storage.removeStorageSync("userProfile")
      window.location.href = "products"
    },
    async forceRerender() {
      var currentUser = await AccountService.showCurrentUser(this.currentUserID)
      this.firstName = currentUser.first_name
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
  justify-content: space-evenly;
  align-content: center;
  font-size: 120%;
  white-space: nowrap;
  align-items: center;
}

.buttons i.fa-sharp.fa-solid.fa-cart-shopping {
  transition: color 0.3s ease-in;
}

.buttons i.fa-sharp.fa-solid.fa-cart-shopping:hover {
  cursor: pointer;
  color: rgba(160, 97, 84, 0.986);
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

.responsive-cart {
  display: none;
}

#check {
  display: none;
}

.user-div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dropdown-header {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.3s ease-in;
}

.dropdown-header:hover {
  cursor: pointer;
  color: rgba(160, 97, 84, 0.986);
}

.dropdown-content {
  display: block;
  visibility: hidden;
  position: absolute;
  margin-top: 20px;
  right: 20px;
  height: 165px;
  width: 200px;
  background: white;
  z-index: 1;
  border: #e0dede solid 1px;
  font-size: 17px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 15px;
  opacity: 0%;
  transition: 0.3s linear ease-in, 0.3s opacity ease-in;
}

.user-icon {
  float: left;
  margin-right: 10px;
  margin-left: 20px;
}

.user-icon i.fa {
  display: inline-block;
  border-radius: 60px;
  box-shadow: 0 0 2px #888;
  padding: 0.5em 0.6em;
}

.username {
  margin-right: 8px;
}

.fa-solid.fa-chevron-down {
  font-size: 13px;
}

.my-account {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.25s ease-in color;
}

.my-account i{
  font-size: 15px;
  color: #777777;
  transition: 0.25s ease-in color;
}

.my-account:hover {
  cursor: pointer;
  color: rgba(160, 97, 84, 0.986);
}

.my-account:hover i {
  color: rgba(160, 97, 84, 0.986);
}

.my-account::before {
  content: "";
  position: absolute;
  top: 30px;
  bottom: 0;
  left: 0%;
  width: 100%; 
  border-bottom: 1px solid rgb(206, 206, 206); 
}

.my-purchases {
  position: relative;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: 0.25s ease-in color;
}

.my-purchases i{
  font-size: 15px;
  color: #777777;
  transition: 0.25s ease-in color;
}

.my-purchases:hover {
  cursor: pointer;
  color: rgba(160, 97, 84, 0.986);
}

.my-purchases:hover i {
  color: rgba(160, 97, 84, 0.986);
}

.my-purchases::before {
  content: "";
  position: absolute;
  top: 30px;
  bottom: 0;
  left: 0%;
  width: 100%; 
  border-bottom: 1px solid rgb(206, 206, 206); 
}

.logout {
  position: relative;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: 0.25s ease-in color;
}

.logout i{
  font-size: 15px;
  color: #777777;
  transition: 0.25s ease-in color;
}

.logout:hover {
  cursor: pointer;
  color: rgba(160, 97, 84, 0.986);
}

.logout:hover i {
  color: rgba(160, 97, 84, 0.986);
}

.logout::before {
  content: "";
  position: absolute;
  top: 30px;
  bottom: 0;
  left: 0%;
  width: 100%; 
  border-bottom: 1px solid rgb(206, 206, 206); 
}

@media (max-width: 1400px) {
  .responsive-cart {
    cursor: pointer;
    margin-left: 45%;
    transition: color 0.3s ease-in;
  }

  .responsive-cart:hover {
    color: rgba(160, 97, 84, 0.986);
  }
}

@media (max-width: 1200px) {
  .responsive-cart {
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .responsive-nav {
    position: relative;
  }

  .navigation-bar {
    display: none;
  }

  .buttons {
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

@media (max-width: 900px) {
  .responsive-cart {
    margin-left: 25%;
  }
}

@media (max-width: 600px) {
  .responsive-cart {
    margin-left: 10%;
  }
}

@media (max-width: 500px) {
  .logo {
    width: 220px;
  }

  .logo a {
    font-size: 25px;
  }
}
</style>