<template>
  <div class="wrapper">
    <div class="main-container">
        <div class="responsive-navbar" @click="openMenuOverlay()">
            <i class="fas fa-bars"></i>
        </div>
        <div class="logo">
            <a href="dashboard" class="logo" v-if="owner">Bakery Shop</a>
            <a href="index" class="logo" v-else>Bakery Shop</a>
        </div>
        <div class="mid-container" v-if="owner">
            <div class="links" @click="goToDashboard()">Home</div>
            <div class="owner-products">
                <div class="product-title">
                    Edit
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                <ul class="owner-products-dropdown">
                    <li @click="goToEdit('CreateProduct')">Create Product</li>
                    <li @click="goToEdit('DeleteProduct')">Delete Product</li>
                    <li>Edit Voucher</li>
                </ul>
            </div>
            <div class="links" @click="goToOrders()">Orders</div>
        </div>
        <div class="mid-container" v-else-if="owner == 0">
            <div class="links" @click="goToHome()">Home</div>
            <div class="products">
                <div class="product-title">
                    Products
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                <ul class="products-dropdown">
                    <li v-for="(category, index) in categories" :key="index" @click="goToProduct(category.category_id)">
                        {{category.category_name}}
                    </li>
                </ul>
            </div>
            <div class="links" @click="goToAboutUs()">About Us</div>
        </div>
        <div class="right-container">
            <div class="item-cart-logo" v-if="owner">
            </div>
            <div class="item-cart-logo" @click="openItemCart()" v-else-if="owner == 0">
                <i class="fa-sharp fa-solid fa-cart-shopping"></i>
            </div>
            <div class="login" v-if="currentUserID === undefined" @click="login()">
                LOGIN
            </div>
            <div class="user" v-else>
                <div class="user-title">
                    <i class="fa fa-user" aria-hidden="true"></i>
                        {{firstName}}
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
                <ul class="user-dropdown" v-if="owner == 0">
                    <li @click="goToAccount()">My Profile</li>
                    <li @click="goToPurchase()">My Purchases</li>
                    <li @click="logout()">Logout</li>
                </ul>
                <ul class="user-dropdown" v-else-if="owner">
                    <li @click="logout()">Logout</li>
                </ul>
            </div>
        </div>
    </div>
    <ItemCart ref="itemCart"/>
  </div>
  <div class="responsive-menu" ref="menu" >
    <div class="top-container">
        <div class="close-button" @click="closeMenuOverlay()">
            <i class="fa-solid fa-xmark"></i>
        </div>
    </div>
    <ul class="menu-list" v-if="owner">
        <li class="responsive-selection" @click="goToDashboard()">Home</li>
        <li>
            <div class="responsive-selection" @click="toggleProductDropdown()">
                Edit
                <i class="fa-solid fa-caret-down" ref="arrowDown"></i>
                <i class="fa-solid fa-caret-up" ref="arrowUp"></i>
            </div>
            <ul class="responsive-products-dropdown" ref="productDropdown">
                <li @click="goToEdit('CreateProduct')">Create Product</li>
                <li @click="goToEdit('DeleteProduct')">Delete Product</li>
                <li>Edit Voucher</li>
            </ul>
        </li>
        <li class="responsive-selection" @click="goToOrders()">Orders</li>
        <li class="responsive-selection" v-if="currentUserID === undefined" @click="login()">Login</li>
        <li v-else>
            <div class="responsive-selection" @click="toggleUserDropdown()">
                {{firstName}}
                <i class="fa-solid fa-caret-down" ref="userArrowDown"></i>
                <i class="fa-solid fa-caret-up" ref="userArrowUp"></i>
            </div>
            <ul class="responsive-user-dropdown" ref="userDropdown">
                <li @click="goToAccount()">My Profile</li>
                <li @click="goToPurchase()">My Purchases</li>
                <li @click="logout()">Logout</li>
            </ul>
        </li>
    </ul>
    <ul class="menu-list" v-else>
        <li class="responsive-selection" @click="goToHome()">Home</li>
        <li>
            <div class="responsive-selection" @click="toggleProductDropdown()">
                Products
                <i class="fa-solid fa-caret-down" ref="arrowDown"></i>
                <i class="fa-solid fa-caret-up" ref="arrowUp"></i>
            </div>
            <ul class="responsive-products-dropdown" ref="productDropdown">
                <li v-for="(category, index) in categories" :key="index" @click="goToProduct(category.category_id)">
                    {{category.category_name}}
                </li>
            </ul>
        </li>
        <li class="responsive-selection" @click="goToAboutUs()">About Us</li>
        <li class="responsive-selection" v-if="currentUserID === undefined" @click="login()">Login</li>
        <li v-else>
            <div class="responsive-selection" @click="toggleUserDropdown()">
                {{firstName}}
                <i class="fa-solid fa-caret-down" ref="userArrowDown"></i>
                <i class="fa-solid fa-caret-up" ref="userArrowUp"></i>
            </div>
            <ul class="responsive-user-dropdown" ref="userDropdown">
                <li @click="goToAccount()">My Profile</li>
                <li @click="goToPurchase()">My Purchases</li>
                <li @click="logout()">Logout</li>
            </ul>
        </li>
    </ul>
  </div>
</template>

<script>
import AccountService from "../../services/AccountService"
import ProductService from "../../services/ProductService"
import ItemCart from "../productPage/ItemCart.vue"
export default {
    components: {
        ItemCart
    },
    async mounted() {
        this.currentUserID = this.$storage.getStorageSync("loginID")
        var currentAccount = await AccountService.showCurrentAccount(this.currentUserID)
        if (this.currentUserID == undefined) {
            this.owner = 0
        }
        else {
            this.owner = currentAccount.owner
        }
        var currentUser = await AccountService.showCurrentUser(this.currentUserID)
        this.firstName = currentUser.first_name
        this.categories = await ProductService.showAllCategories()
    },
    data() {
        return {
            firstName: "",
            currentUserID: undefined,
            productsToggle: false,
            userToggle: false,
            categories: [],
            owner: null,
            hihi: 1
        }
    },
    methods: {
        openItemCart() {
            this.$refs.itemCart.showItemCart = true
            document.body.style.overflow = "hidden"
        },
        openMenuOverlay() {
            this.$refs.menu.style.visibility = "visible"
            this.$refs.menu.style.opacity = "100%"
            document.body.style.overflow = "hidden"
        },
        closeMenuOverlay() {
            this.$refs.menu.style.visibility = "hidden"
            this.$refs.menu.style.opacity = "0%"
            document.body.style.overflow = "auto"
        },
        toggleProductDropdown() {
            this.productsToggle = !this.productsToggle
            this.hihi += 1
            if (this.productsToggle) {
                this.$refs.productDropdown.style.display = "block"
                this.$refs.arrowUp.style.display = "block"
                this.$refs.arrowDown.style.display = "none"
            }
            else {
                this.$refs.productDropdown.style.display = "none"
                this.$refs.arrowUp.style.display = "none"
                this.$refs.arrowDown.style.display = "flex"
            }
        },
        toggleUserDropdown() {
            this.userToggle = !this.userToggle
            if (this.userToggle) {
                this.$refs.userDropdown.style.display = "block"
                this.$refs.userArrowUp.style.display = "block"
                this.$refs.userArrowDown.style.display = "none"
            }
            else {
                this.$refs.userDropdown.style.display = "none"
                this.$refs.userArrowUp.style.display = "none"
                this.$refs.userArrowDown.style.display = "flex"
            }
        },
        goToHome() {
            window.location.href = "home"
        },
        goToProduct(categoryID) {
            this.$storage.setStorageSync("categoryID", categoryID)
            window.location.href = "products"
        },
        goToAboutUs() {
            window.location.href = "aboutUs"
        },
        goToAccount() {
            this.$storage.setStorageSync("userProfile", "MyProfile")
            window.location.href = "userProfile"
        },
        goToPurchase() {
            this.$storage.setStorageSync("userProfile", "MyPurchases")
            window.location.href = "userProfile"
        },
        goToDashboard() {
            window.location.href = "dashboard"
        },
        goToEdit(action) {
            this.$storage.setStorageSync("editProducts", action)
            window.location.href = "editProducts"
        },
        goToOrders() {
            window.location.href = "orders"
        },
        login() {
            window.location.href = "login"
        },
        logout() {
            this.$storage.removeStorageSync("loginID")
            this.$storage.removeStorageSync("userProfile")
            location.reload();
        },
        async forceRerender() {
            var currentUser = await AccountService.showCurrentUser(this.currentUserID)
            this.firstName = currentUser.first_name
        }
    },
}
</script>

<style scoped>
.wrapper {
    width: 100%;
    height: 120px;
    background: #FFFFFFF2;
    box-shadow: 0 0 15px rgb(0 0 0 / 15%);
    z-index: 3;
    position: sticky;
    top: 0px;
    padding-left: 25px;
    padding-right: 25px;
}

.main-container {
    margin: auto;
    max-width: 1470px;
    height: 100%;
    display: flex;
    justify-content: space-between;
}

.responsive-navbar {
    display: none;
}

.logo {
    height: 100%;
    width: auto;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo a {
    color: black;
    font-size: 30px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 1px;
}

.mid-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    font-size: 17px;
}

.links {
    padding: 35px;
    transition: 0.2s ease-in color;
}

.links:hover {
    color: rgba(160, 97, 84, 0.986);
    cursor: pointer;
}

.products {
    transition: 0.2s ease-in color;
    position: relative;
}

.owner-products {
    transition: 0.2s ease-in color;
    position: relative;
}


.products:hover {
    color: rgba(160, 97, 84, 0.986);
    cursor: pointer;
}

.products i {
    margin-left: 5px;
}

.product-title {
    padding-left: 30px;
    padding-right: 35px;
    padding-top: 35px;
    padding-bottom: 35px;
}

.products-dropdown {
    width: 130px;
    text-transform: none;
    display: none;
    position: absolute;
    top: 75px;
    left: 13px;
    text-align: left;
    z-index: 20;
    font-size: 14px;
    font-weight: normal;
    background-color: #fff;
    color: #000;
    border-radius: 4px;
    padding-top: 8px;
    padding-bottom: 8px;
    box-shadow: 0px 2px 15px rgb(0 0 0 / 17%);
    list-style-type: none;
}

.owner-products-dropdown {
    width: 150px;
    text-transform: none;
    display: none;
    position: absolute;
    top: 75px;
    left: 13px;
    text-align: left;
    z-index: 20;
    font-size: 14px;
    font-weight: normal;
    background-color: #fff;
    color: #000;
    border-radius: 4px;
    padding-top: 8px;
    padding-bottom: 8px;
    box-shadow: 0px 2px 15px rgb(0 0 0 / 17%);
    list-style-type: none;
}

.products:hover .products-dropdown {
    display: block;
}

.owner-products:hover .owner-products-dropdown {
    display: block;
}

.products-dropdown li {
    padding: 7px 20px 7px 17px;
}

.products-dropdown li:hover {
    background: rgb(245,245,245);
    cursor: pointer;
    text-decoration: underline;
}

.owner-products-dropdown li {
    padding: 7px 20px 7px 17px;
}

.owner-products-dropdown li:hover {
    background: rgb(245,245,245);
    cursor: pointer;
    text-decoration: underline;
}

.right-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.item-cart-logo {
    padding-right: 50px;
    transition: 0.2s ease-in color;
}

.item-cart-logo:hover {
    color: rgba(160, 97, 84, 0.986);
    cursor: pointer;
}

.user {
    position: relative;
}

.user:hover {
    cursor: pointer;
}

.user i.fa {
    margin-right: 10px;
    display: inline-block;
    border-radius: 60px;
    box-shadow: 0 0 2px #888;
    padding: 0.5em 0.6em;
}

.user-title {
    width: 160px;
    padding-top: 35px;
    padding-bottom: 35px;
}


.user-dropdown {
    width: 160px;
    text-transform: none;
    display: none;
    position: absolute;
    top: 85px;
    right: 1px;
    text-align: left;
    z-index: 20;
    font-size: 14px;
    font-weight: normal;
    background-color: #fff;
    color: #000;
    border-radius: 4px;
    padding-top: 8px;
    padding-bottom: 8px;
    box-shadow: 0px 2px 15px rgb(0 0 0 / 17%);
    list-style-type: none;
}

.user-dropdown li {
    padding: 7px 20px 7px 17px;
}

.user-dropdown li:hover {
    background: rgb(245,245,245);
    cursor: pointer;
    text-decoration: underline;
}

.user:hover .user-dropdown {
    display: block;
}

.login {
  background-color: white;
  color: black;
  line-height: 1.5;
  padding: 8px 30px;
  border: 1px solid rgb(187, 186, 186);
}

.login:hover {
  background-color: rgb(235,236,237);
  cursor: pointer;
}

.responsive-menu {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    z-index: 3;
    visibility: hidden;
    transition: opacity 0.5s ease, visibility 0.5s ease;
    opacity: 0%;
    overflow-y: scroll;
}

.top-container {
    position: relative;
    height: 100px;
    width: 100%;
    text-align: right;
    top: 0;
}

.close-button {
    display: inline-block;
    padding: 0;
    margin: 25px;
    width: 48px;
    height: 48px;
    font-size: 26px;
    line-height: 46px;
    color: #343434;
    text-align: center;
    border: 1px solid #e0e0e0;
    background-color: #fff;
    transition: 0.3s ease color, 0.3s ease background-color;
}

.close-button:hover {
    cursor: pointer;
    color: white;
    background-color: rgb(48,49,51);
}

.menu-list {
    position: relative;
    top: 30px;
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
}

.responsive-selection {
    font-size: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 20px 20px;
    border-top: 1px solid #f1f1f1;
    transition: 0.3s ease color, 0.3s ease background-color;
    position: relative;
}

.responsive-selection:hover {
    cursor: pointer;
    color: white;
    background-color: rgb(48,49,51);
}

.menu-list li i {
    display: flex;
    align-items: center;
    position: relative;
    left: 10px;
}

.menu-list li i.fa-solid.fa-caret-up{
    display: none;
    top: 5px;
}

.responsive-products-dropdown {
    display: none;
    text-align: center;
    position: relative;
    font-size: 18px;
    list-style-type: none;
}

.responsive-products-dropdown li {
    padding-top: 10px;
    padding-bottom: 10px;
    transition: 0.3s ease color, 0.3s ease background-color;
}

.responsive-products-dropdown li:hover {
    cursor: pointer;
    color: white;
    background-color: rgb(48,49,51);
}

.responsive-user-dropdown {
    display: none;
    text-align: center;
    position: relative;
    font-size: 18px;
    list-style-type: none;
}

.responsive-user-dropdown li {
    padding-top: 10px;
    padding-bottom: 10px;
    transition: 0.3s ease color, 0.3s ease background-color;
}

.responsive-user-dropdown li:hover {
    cursor: pointer;
    color: white;
    background-color: rgb(48,49,51);
}
@media (max-width: 950px) {
    .wrapper {
        padding-left: 15px;
        padding-right: 15px;
    }

    .mid-container {
        display: none;
    }

    .user {
        display: none;
    }

    .item-cart-logo {
        font-size: 23px;
    }

    .responsive-navbar {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        width: 100px;
        transition: 0.2s ease-in color;
    }

    .responsive-navbar:hover {
        cursor: pointer;
        color: rgba(160, 97, 84, 0.986);
    }

    .item-cart-logo {
        padding-right: 0px;
    }

    .right-container {
        width: 100px;
    }

    .login {
        display: none;
    }
}

@media (max-width: 550px) {
    .wrapper {
        padding-left: 0px;
        padding-right: 0px;    
    }

    a.logo {
        font-size: 20px;
    }
}
</style>