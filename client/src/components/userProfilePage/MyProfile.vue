<template>
  <DisplayOverlay ref="overlay"/>
  <div class="main-container">
    <div class="header">
      <div class="title">My Profile</div>
      Manage and protect your account
    </div>
    <div class="form">
      <div class="row-container">
        <div class="label">
          Email
        </div>
        <div class="email-input">
            {{email}}
        </div>
      </div>
      <div class="row-container">
        <div class="label">
          First Name
        </div>
        <div :class="firstNameValidity ? 'name-input' : 'error'">
          <input type="placeholder" v-model="firstName">
        </div>
      </div>
      <div class="error-text" v-show="!firstNameValidity">First name cannot be empty.</div>
      <div class="row-container">
        <div class="label">
          Last Name
        </div>
        <div :class="lastNameValidity ? 'name-input' : 'error'">
          <input type="placeholder" v-model="lastName">
        </div>
      </div>
      <div class="error-text" v-show="!lastNameValidity">Last name cannot be empty.</div>
      <div class="row-container">
        <div class="label">
          Date of birth
        </div>
        <div :class="birthdayValidity ? 'name-input' : 'error'">
          <input type="date" max="9999-12-31" v-model="birthday">
        </div>
      </div>
      <div class="error-text" v-show="!birthdayValidity">Date of birth cannot be empty.</div>
    </div>
    <div class="save-button-container">
        <div class="save-button" @click="checkValidity()">Save</div>
    </div>
  </div>
</template>

<script>
import AccountService from "../../services/AccountService"
import DisplayOverlay from "./DisplayOverlay.vue"
export default {
  async mounted() {
      this.currentUserID = this.$storage.getStorageSync("loginID")
      var currentAccount = await AccountService.showCurrentAccount(this.currentUserID)
      this.email = currentAccount.email
      var currentUser = await AccountService.showCurrentUser(this.currentUserID)
      this.firstName = currentUser.first_name
      this.lastName = currentUser.last_name
      this.birthday = currentUser.birthday
  },
  components: {
    DisplayOverlay
  },
  data() {
    return {
      currentUserID: null,
      email: null,
      firstName: null,
      lastName: null,
      birthday: null,
      firstNameValidity: true,
      lastNameValidity: true,
      birthdayValidity: true
    }
  },
  methods: {
    checkValidity() {
      if (this.firstName === "") {
        this.firstNameValidity = false
      }
      if (this.lastName === "") {
        this.lastNameValidity = false
      }
      if (this.birthday === "") {
        this.birthdayValidity = false
      }
      if (this.firstNameValidity && this.lastNameValidity && this.birthdayValidity) {
        this.saveProfile()
      }
    },
    async saveProfile() {
      var status = await AccountService.saveProfile({
        loginID: this.currentUserID,
        firstName: this.firstName,
        lastName: this.lastName,
        birthday: this.birthday
      })
      if (status.data == "Profile Saved") {
        this.$refs.overlay.openOverlay("Profile saved")
        this.$emit("save")
      }
      else {
        this.$refs.overlay.openErrorOverlay("Fail to save profile")
      }
    }
  },
  watch: {
    firstName() {
      this.firstNameValidity = true
    },
    lastName() {
      this.lastNameValidity = true
    },
    birthday() {
      this.birthdayValidity = true
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
  height: 540px;
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
  width: 100px;
  margin-right: 40px;
}

.email-input {
  position: relative;
}

.name-input {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 40px;
  border: 1px solid rgba(0,0,0,.14);
  border-radius: 2px;
  width: 300px;
}

.error {
  background: #fff9fa;
  border: 1px solid #ff424f;
  border-radius: 2px;
  width: 300px;
  height: 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.error-text {
  color: #ff424f;
  font-size: 14px;
  margin-left: 142px;
  position: relative;
  top: -18px;
}

.name-input input {
  width: 100%;
  background: none;
  padding: 12px;
  outline: none;
  border: 0;
  filter: none;
}

.error input {
  width: 100%;
  background: none;
  padding: 12px;
  outline: none;
  border: 0;
  filter: none; 
}

.date-input {
  display: flex;
  justify-content: space-between;
}

.save-button-container {
  position: absolute;
  left: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 60px;
}

.save-button {
  color: white;
  background: rgb(145, 75, 75);
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
}

.save-button:hover {
  cursor: pointer;
  background: rgb(171, 88, 88);
}

.save-button:active {
  background: rgb(118, 61, 61);
}

@media (max-width: 1200px) {
  .main-container {
    width: 70%;
  }
}

@media (max-width: 900px) {
  .main-container {
    width: 370px;
  }

  .form {
    padding-left: 10px;
  }
  
  .label {
    font-size: 13px;
    width: 140px;
  }

  .email-input {
    font-size: 13px;
    padding-right: 24px;
  }

  .error-text {
    font-size: 10px;
    margin-left: 124px;
  }

  .input {
    font-size: 13px;
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

  .email-input {
    width: 80%;
    word-wrap: break-word;
    padding-right: 0px;
    font-size: 10px;
  }

  input {
    font-size: 10px;
  }

  .error-text {
    font-size: 9px;
    margin-left: 20%;
  }

  .save-button {
    height: 40px;
    width: 65px;
    font-size: 14px;
  }
}



</style>