<template>
  <div class="menu-container" v-if="renderComponent">
    <div class="username">{{firstName}}</div>
    <div class="menu-buttons">
        <div class="button" @click="showAccountDropdown()">
            <i class="fa fa-user" aria-hidden="true"></i>
            <div class="buttons-title">
                My Account
            </div>
        </div>
        <div class="account-dropdown" ref="account">
            <div :class="component === 'MyProfile' ? 'account-dropdown-content-active' : 'account-dropdown-content'" @click="changeComponent('MyProfile')">
                Profile
            </div>
            <i :class="component === 'MyProfile' ? 'a fa-regular fa-edit' : 'fa-regular fa-edit'" @click="changeComponent('MyProfile')"></i>
            <div :class="component === 'MyPayment' ? 'account-dropdown-content-active' : 'account-dropdown-content'" @click="changeComponent('MyPayment')">
                Payment Methods
            </div>
            <i :class="component === 'MyPayment' ? 'a fa-regular fa-credit-card' : 'fa-regular fa-credit-card'" @click="changeComponent('MyPayment')"></i>
            <div :class="component === 'ChangePassword' ? 'account-dropdown-content-active' : 'account-dropdown-content'" @click="changeComponent('ChangePassword')">
                Change Password
            </div>
            <i :class="component === 'ChangePassword' ? 'a fa-solid fa-key' : 'fa-solid fa-key'" @click="changeComponent('ChangePassword')"></i>
        </div>
        <div :class="component == 'MyPurchases' ? 'button-active' : 'button'" @click="changeComponent('MyPurchases')">
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            <div class="buttons-title">
                My Purchases
            </div>
        </div>
        <div :class="component == 'MyNotifications' ? 'button-active' : 'button'" @click="changeComponent('MyNotifications')">
            <i class="fa-solid fa-bell"></i>
            <div class="buttons-title">
                My Notifications
            </div>
        </div>
        <div :class="component == 'MyVouchers' ? 'button-active' : 'button'" @click="changeComponent('MyVouchers')">
            <i class="fa-solid fa-barcode"></i>
            <div class="buttons-title">
                My Vouchers
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import AccountService from "../../services/AccountService"
export default {
    async mounted() {
        this.component = this.$storage.getStorageSync("userProfile")
        this.currentUserID = this.$storage.getStorageSync("loginID")
        var currentUser = await AccountService.showCurrentUser(this.currentUserID)
        this.firstName = currentUser.first_name
    },
    data() {
        return {
            currentUserID: null,
            firstName: null,
            component: "",
            renderComponent: true,
        }
    },
    methods: {
        showAccountDropdown() {
            this.showTab = "account"
        },
        changeComponent(component) {
            this.component = component
            this.$emit("component", component)
        },
        async forceRerender() {
            var currentUser = await AccountService.showCurrentUser(this.currentUserID)
            this.firstName = currentUser.first_name
        }
    },
    watch: {
        showTab(newShowTab) {
            if (newShowTab == "account") {
                this.$refs.account.style.visibility = "visible"
                this.$refs.account.style.opacity = "100%"
                this.$refs.account.style.height = "fit-content"
            }
            else {
                this.$refs.account.style.visibility = "hidden"
                this.$refs.account.style.opacity = "0%"
                this.$refs.account.style.height = "0px"
            }
        }
    }
}
</script>

<style scoped>
.menu-container {
    width: 180px;
    height: 100%;
    float: left;
}

.username {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #cecece;
    font-weight: 600;
}

.menu-buttons {
    width: 100%;
    height: 250px;
    padding-top: 25px;
    padding-left: 15px;
}

.button {
    font-weight: 600;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    transition: 0.25s ease color;
}

.button:hover {
    cursor: pointer;
    color: rgba(160, 97, 84, 0.986);
}

.button-active {
    font-weight: 600;
    display: flex;
    align-items: center;
    margin-bottom: 15px;  
    cursor: pointer;
    color: rgba(160, 97, 84, 0.986);
}

.buttons-title {
    margin-left: 15px;
}

.account-dropdown {
    color: #000000A6;
    height: fit-content;
    padding-left: 30px;
    font-size: 14px;
    opacity: 100%;
    visibility: visible;
    display: block;
    transition: 0.6s ease opacity, 0.6s ease visibility, 0.6s ease height;
}

.account-dropdown-content {
    margin-bottom: 7px;
    transition: 0.25s ease color;
}

.account-dropdown-content:hover {
    cursor: pointer;
    color: rgba(160, 97, 84, 0.986);
}

.account-dropdown-content-active {
    font-weight: 600;
    margin-bottom: 7px;
    color: rgba(160, 97, 84, 0.986);
    cursor: pointer;
}

.fa-edit {
    display: none;
}

.fa-credit-card {
    display: none;
}

.fa-key {
    display: none;
}

@media (max-width: 900px) {
    .menu-container {
        width: 130px;
    }

    .username {
        font-size: 14px;
    }

    .button {
        font-size: 14px;
    }
}

@media (max-width: 600px) {
    .menu-container {
        width: 10%;
    }

    .username {
        display: none;
    }

    .menu-buttons {
        padding-left: 0px;
    }

    .buttons-title {
        display: none;
    }

    .button {
        font-size: 20px;
        justify-content: center;
    }

    .button-active {
        font-size: 20px;
        justify-content: center;
    }

    .account-dropdown-content {
        display: none;
    }

    .account-dropdown-content-active {
        display: none;
    }

    .fa-edit {
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
        transition: 0.25s ease color;
    }

    .fa-edit:hover {
        cursor: pointer;
        color: rgba(160, 97, 84, 0.986);
    }

    .fa-credit-card {
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
        transition: 0.25s ease color;
    }

    .fa-credit-card:hover {
        cursor: pointer;
        color: rgba(160, 97, 84, 0.986);
    }

    .a {
        color: rgba(160, 97, 84, 0.986);
    }

    .fa-key {
        display: flex;
        justify-content: center;
        margin-bottom: 15px;
        transition: 0.25s ease color;
    }

    .fa-key:hover {
        cursor: pointer;
        color: rgba(160, 97, 84, 0.986);
    }

    .account-dropdown {
        padding-left: 0px;
    }


}

</style>