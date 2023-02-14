<template>
  <DisplayOverlay ref="overlay"/>
  <div class="main-container">
    <div class="header">
      <div class="title">Change Password</div>
        For your account's security, do not share your password with anyone else
      </div>
    <div class="form">
      <div class="row-container">
        <div class="label">
          Current Password
        </div>
        <div :class="currentPasswordValidity ? 'input' : 'error'">
            <input :type="hideCurrentPassword ? 'password' : 'placeholder'" v-model="currentPassword">
            <div class="toggle-hide">
              <i class="fa-solid fa-eye" v-if="hideCurrentPassword" @click="toggleHideCurrentPassword()"></i>
              <i class="fa-solid fa-eye-slash" v-else @click="toggleHideCurrentPassword()"></i>
            </div>
        </div>
      </div>
      <div class="error-text" v-show="!currentPasswordValidity">Password should at least contain 8 characters.</div>
      <div class="row-container">
        <div class="label">
          New Password
        </div>
        <div :class="newPasswordValidity ? 'input' : 'error'">
            <input :type="hideNewPassword ? 'password' : 'placeholder'" v-model="newPassword">
            <div class="toggle-hide">
              <i class="fa-solid fa-eye" v-if="hideNewPassword" @click="toggleHideNewPassword()"></i>
              <i class="fa-solid fa-eye-slash" v-else @click="toggleHideNewPassword()"></i>
            </div>
        </div>
      </div>
      <div class="error-text" v-show="!newPasswordValidity">Password should at least contain 8 characters, one uppercase and one lowercase characters, one number and one symbol.</div>
      <div class="row-container">
        <div class="label">
          Confirm Password
        </div>
        <div :class="confirmPasswordValidity ? 'input' : 'error'">
            <input :type="hideConfirmPassword ? 'password' : 'placeholder'" v-model="confirmPassword">
            <div class="toggle-hide">
              <i class="fa-solid fa-eye" v-if="hideConfirmPassword" @click="toggleHideConfirmPassword()"></i>
              <i class="fa-solid fa-eye-slash" v-else @click="toggleHideConfirmPassword()"></i>
            </div>
        </div>
      </div>
      <div class="error-text" v-show="!confirmPasswordValidity">Password entered is different.</div>
    </div>
    <div class="confirm-button-container">
        <div class="confirm-button" @click="checkValidity()">Confirm</div>
    </div>
  </div>
</template>

<script>
import AccountService from "../../services/AccountService"
import DisplayOverlay from "./DisplayOverlay.vue"

export default {
  components: {
    DisplayOverlay
  },
  data() {
    return {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      hideCurrentPassword: true,
      hideNewPassword: true,
      hideConfirmPassword: true,
      currentPasswordValidity: true,
      newPasswordValidity: true,
      confirmPasswordValidity: true
    }
  },
  methods: {
    toggleHideCurrentPassword() {
      this.hideCurrentPassword = !this.hideCurrentPassword
    },
    toggleHideNewPassword() {
      this.hideNewPassword = !this.hideNewPassword
    },
    toggleHideConfirmPassword() {
      this.hideConfirmPassword = !this.hideConfirmPassword
    },
    checkValidity() {
      if (this.currentPassword.length < 8) {
        this.currentPasswordValidity = false
      }
      if (this.newPassword.length < 8 || !/\d/.test(this.newPassword) || !/[ `!@`[`#$%^&*()_+\-={};':"\\|\],.<>`/`?~]/.test(this.newPassword) 
         || !(this.newPassword !== this.newPassword.toUpperCase())
         || !(this.newPassword !== this.newPassword.toLowerCase())) {
        this.newPasswordValidity = false
      }
      if (this.confirmPassword != this.newPassword) {
        this.confirmPasswordValidity = false
      }
      else {
        this.confirmPasswordValidity = true
      }

      if (this.currentPasswordValidity && this.newPasswordValidity && this.confirmPasswordValidity) {
        this.changePassword ()
      }
    },
    async changePassword() {
      var currentAccount = await AccountService.checkCurrentUser()
      if (currentAccount.password == this.currentPassword) {
        await AccountService.changePassword({
          loginID: currentAccount.login_id,
          password: this.newPassword
        })
        this.$refs.overlay.openOverlay("Password changed")
      }
      else {
        this.$refs.overlay.openErrorOverlay("Incorrect password")
      }
      this.currentPassword = ""
      this.newPassword = ""
      this.confirmPassword = ""
    }
  },
  watch: {
    currentPassword() {
      this.currentPasswordValidity = true
    },
    newPassword() {
      this.newPasswordValidity = true
    },
    confirmPassword() {
      this.confirmPasswordValidity = true
    }
  }
}
</script>

<style scoped>
.main-container {
  position: relative;
  float: left;
  left: 0px;
  width: 940px;
  background: #FFFFFF;
  height: 100%;
  margin-left: 45px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 13%);
  border-radius: 0.125rem;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 10px;
}

.header {
  padding-top: 18px;
  padding-bottom: 18px;
  color: #555555;
  letter-spacing: -1px;
  word-spacing: 1px;
  border-bottom: 0.0625rem solid #efefef;
}

.title {
  font-size: 20px;
  font-weight: bold;
  color: black;
  letter-spacing: 0px;
  margin-bottom: 5px;
}

.form {
  position: relative;
  padding-top: 30px;
  padding-left: 25px;
}

.row-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.label {
  position: relative;
  color: rgba(85,85,85,.8);
  float: left;
  width: 150px;
  margin-right: 40px;
}

.input {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 40px;
  border: 1px solid rgba(0,0,0,.14);
  border-radius: 2px;
  width: 330px;
}

.input input {
  width: 100%;
  background: none;
  padding: 12px;
  outline: none;
  border: 0;
  filter: none;
}

.confirm-button-container {
  position: relative;
  left: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 60px;
}

.confirm-button {
  color: white;
  background: rgb(145, 75, 75);
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
}

.confirm-button:hover {
  cursor: pointer;
  background: rgb(171, 88, 88);
}

.confirm-button:active {
  background: rgb(118, 61, 61);
}

.toggle-hide {
  position: relative;
  right: 12px;
  font-size: 14px;
  color: rgb(145, 75, 75);
}

.toggle-hide i:hover {
  cursor: pointer;
}

.error {
  background: #fff9fa;
  border: 1px solid #ff424f;
  border-radius: 2px;
  width: 330px;
  height: 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.error-text {
  width: 330px;
  color: #ff424f;
  font-size: 14px;
  margin-left: 190px;
  position: relative;
  top: -18px;
}

.error input {
  width: 100%;
  background: none;
  padding: 12px;
  outline: none;
  border: 0;
  filter: none; 
}

@media (max-width: 1200px) {
  .main-container {
    width: 70%;
  }

  .error-text {
    font-size: 12px;
    width: 300px;
    margin-left: 176px;
  }
  
  .confirm-button-container {
    bottom: 35px;
  }
}

@media (max-width: 900px) {
  .main-container {
    width: 370px;
  }

  .form {
    padding-left: 0px;
  }

  .error-text {
    font-size: 11px;
    width: 185px;
    margin-left: 125px;
  }

  .confirm-button-container {
    bottom: 15px;
  }
}

@media (max-width: 600px) {
  .main-container {
    width: 80%;
    margin-left: 10%;
    padding-left: 8%;
    padding-right: 4%;
  }

  .header {
    font-size: 13px;
  }

  .form {
    padding: 15px 0px 0px 0px;
  }

  .label {
    margin-right: 5%;
    width: 20%;
    font-size: 10px;
  }

  input {
    font-size: 10px;
  }

  .error-text {
    width: 75%;
    font-size: 9px;
    margin-left: 25%;
  }

  .confirm-button-container {
    bottom: 25px;
  }

  .confirm-button {
    height: 40px;
    width: 65px;
    font-size: 12px;
  }
}
</style>