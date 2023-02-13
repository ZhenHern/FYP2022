<template>
  <div class="menu-container">
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
            <div :class="component === 'MyPayment' ? 'account-dropdown-content-active' : 'account-dropdown-content'" @click="changeComponent('MyPayment')">
                Payment Methods
            </div>
            <div :class="component === 'ChangePassword' ? 'account-dropdown-content-active' : 'account-dropdown-content'" @click="changeComponent('ChangePassword')">
                Change Password
            </div>
        </div>
        <div class="button" @click="showPurchaseTab">
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            <div class="buttons-title">
                My Purchases
            </div>
        </div>
        <div class="button" @click="showNotificationTab">
            <i class="fa-solid fa-bell"></i>
            <div class="buttons-title">
                My Notifications
            </div>
        </div>
        <div class="button" @click="showVoucherTab">
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
        var currentAccount = await AccountService.checkCurrentUser()
        this.currentUserID = currentAccount.login_id
        var currentUser = await AccountService.showCurrentUser(this.currentUserID)
        this.firstName = currentUser.first_name
    },
    data() {
        return {
            currentUserID: null,
            firstName: null,
            showAccount: true,
            component: "MyProfile"
        }
    },
    methods: {
        showAccountDropdown() {
            this.showAccount = true
        },
        showPurchaseTab() {
            this.showAccount = false
        },
        showNotificationTab() {
            this.showAccount = false
        },
        showVoucherTab() {
            this.showAccount = false
        },
        changeComponent(component) {
            this.component = component
            this.$emit("component", component)
        }
    },
    watch: {
        showAccount(newShowAccount) {
            if (newShowAccount) {
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


</style>