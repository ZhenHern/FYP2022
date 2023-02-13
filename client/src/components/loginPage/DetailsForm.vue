<template>
  <div class="container">
    <h2>Fill in your details</h2>
    <form action="" class="detail-form">
        <div class="first-name">
            <div class="first-name-label">
                <label for="first-name">First Name</label>
            </div>
            <div class="first-name-input">
                <input type="text" :class="`first-name-placeholder${firstNameValidity}`" placeholder="Enter your first name" v-model="firstName">
                <i class="fa fa-exclamation-triangle" aria-hidden="true" v-if="firstNameValidity === '-invalid'"></i>
                <i class="fa fa-check " aria-hidden="true" v-else-if="firstNameValidity === '-valid'"></i>
            </div>
        </div>
        <div class="last-name">
            <div class="last-name-label">
                <label for="last-name">Last Name</label>
            </div>
            <div class="last-name-input">
                <input type="text" :class="`last-name-placeholder${lastNameValidity}`" placeholder="Enter your last name" v-model="lastName">
                <i class="fa fa-exclamation-triangle" aria-hidden="true" v-if="lastNameValidity === '-invalid'"></i>
                <i class="fa fa-check " aria-hidden="true" v-else-if="lastNameValidity === '-valid'"></i>
            </div>
        </div>
        <div class="birthday">
            <div class="birthday-label">
                <label for="birthday">Date of Birth</label>
            </div>
            <div class="birthday-input">
                <input type="date" :class="`birthday-date${birthdayValidity}`" v-model="birthday">
            </div>
        </div>
    </form>
    <div class="bottom-box">
        <div class="button">
            <button @click="checkValidity()">Confirm</button>
        </div>
    </div>
  </div>
</template>

<script>
import AccountService from "../../services/AccountService"
export default {
    props: {
        email: String,
        password: String
    },
    data() {
        return {
            firstName: null,
            lastName: null,
            birthday: "",
            firstNameValidity: "",
            lastNameValidity: "",
            birthdayValidity: "",
            allValidity: true
        }
    },
    watch: {
        firstName(newFirstName) {
            this.checkFirstName(newFirstName)
        },
        lastName(newLastName) {
            this.checkLastName(newLastName)
        },
        birthday(newBirthday) {
           this.checkBirthday(newBirthday)
        }
    },
    methods: {
        checkFirstName(firstName) {
            if (firstName.length !== 0) {
                this.firstNameValidity = "-valid"
                return
            }
            this.firstNameValidity = "" 
        },
        checkLastName(lastName) {
            if (lastName.length !== 0) {
                this.lastNameValidity = "-valid"
                return
            }
            this.lastNameValidity = "" 
        },
        checkBirthday(birthday) {
            if (birthday !== "") {
                this.birthdayValidity = ""
            }
        },
        checkValidity() {
            this.allValidity = true
            if (this.firstNameValidity !== "-valid") {
                this.firstNameValidity = "-invalid"
                this.allValidity = false
            }
            if (this.lastNameValidity !== "-valid") {
                this.lastNameValidity = "-invalid"
                this.allValidity = false
            }
            if (this.birthday === "") {
                this.birthdayValidity = "-invalid"
                this.allValidity = false
            } 
            if (this.allValidity) {
                this.createAccount()
                this.changeComponent('VerificationComponent')
            }
        },
        changeComponent(component) {
            this.$emit("changeComponent", {component: component, email: null, password: null})
        },
        createAccount() {
            AccountService.createAccount({
                email: this.email,
                password: this.password,
                firstName: this.firstName,
                lastName: this.lastName,
                birthday: this.birthday
            })
        }
    }
}
</script>

<style scoped>
.container {
    position: relative;
    height: 600px;
    width: 480px;
    background-color: white;
    border: 1px solid #e3e3e3;    
    border-radius: 16px;
    padding: 48px;
    box-sizing: border-box;
    text-align: left;
}

form {
    display: block;
    height: 60%;
}

.first-name-label, .last-name-label {
    align-items: flex-end;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

label {
    display: inline-block;
    margin-top: 45px;
    font-weight: 600;
}

.first-name-input, .last-name-input {
    position: relative;
}

.first-name-placeholder, .last-name-placeholder, .birthday-date {
    height: 50px;
    width: 100%;
    border: 1px solid #ced4da;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 12px;
    padding: 14px;
}
.first-name-placeholder-valid, .last-name-placeholder-valid {
    height: 50px;
    width: 100%;
    border: 1px solid #ced4da;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 12px;
    padding: 14px;
}

.first-name-placeholder-invalid, .last-name-placeholder-invalid, .birthday-date-invalid {
    height: 50px;
    width: 100%;
    border: 1px solid #d9212c;
    box-shadow: 0 0 0 3.2px rgb(217 33 44 / 25%);
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 12px;
    padding: 14px;
}

.fa.fa-check {
    position: absolute;
    right: 15px;
    top: 28px;
    color: rgb(40,167,69);
}

.fa.fa-exclamation-triangle {
    position: absolute;
    right: 15px;
    top: 27px;
    color: #e74953;
}

.bottom-box {
    position: relative;
    box-sizing: border-box;
    height: 90px;
    margin-top: 130px;
}

button {
    cursor: pointer;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    font-size: 18px;
    color: white;
    background-color: rgba(198, 124, 54, 0.921);
    border-color: rgba(198, 124, 54, 0.921);
    border-style: none;
}

button:hover {
    background-color: rgba(173, 108, 47, 0.921);
}

button:active {
    background-color: rgba(116, 72, 32, 0.921);
}
</style>