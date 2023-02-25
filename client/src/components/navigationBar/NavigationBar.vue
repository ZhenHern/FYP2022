<template>
  <div class="wrapper">
    <div class="main-container">
        <div class="logo">
            <a href="index" class="logo">Bakery Shop</a>
        </div>
        <div class="mid-container">
            <div class="links">Home</div>
            <div class="products">
                <div class="product-title">
                    Products
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                <ul class="products-dropdown">
                    <li>Cookies</li>
                    <li>Bread</li>
                    <li>Cakes</li>
                    <li>Mooncakes</li>
                </ul>
            </div>
            <div class="links">About Us</div>
        </div>
        <div class="right-container">
            <div class="item-cart-logo" @click="openItemCart()">
                <i class="fa-sharp fa-solid fa-cart-shopping"></i>
            </div>
            <div class="user">
                <div class="user-title">
                    <i class="fa fa-user" aria-hidden="true"></i>
                        Zhen Hern
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
                <ul class="user-dropdown">
                    <li @click="goToAccount()">My Profile</li>
                    <li @click="goToPurchase()">My Purchases</li>
                    <li @click="logout()">Logout</li>
                </ul>
            </div>
        </div>
    </div>
    <ItemCart ref="itemCart"/>
  </div>
</template>

<script>
import AccountService from "../../services/AccountService"
import ItemCart from "../productPage/ItemCart.vue"
export default {
    components: {
        ItemCart
    },
    async mounted() {
        this.currentUserID = this.$storage.getStorageSync("loginID")
        var currentUser = await AccountService.showCurrentUser(this.currentUserID)
        this.firstName = currentUser.first_name
    },
    data() {
        return {
            firstName: ""
        }
    },
    methods: {
        openItemCart() {
            this.$refs.itemCart.showItemCart = true
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

.products:hover .products-dropdown {
    display: block;
}

li {
    padding: 7px 20px 7px 17px;
}

li:hover {
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

.user:hover .user-dropdown {
    display: block;
}

</style>