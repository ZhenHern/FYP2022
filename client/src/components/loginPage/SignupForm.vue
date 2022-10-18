<template>
  <div class="container">
    <h1>Sign up</h1>
    <form action="" class="signup-form">
        <div class="email">
            <div class="email-label">
                <label for="email">Email</label>
                <span>
                    Already have an account?
                    <span @click="changeComponent('LoginForm')">Log in</span>
                </span>
            </div>
            <div class="email-input">
                <input type="text" :class="`email-placeholder${emailValidity}`" v-model="email">
                <i class="fa fa-exclamation-triangle" aria-hidden="true" v-if="emailValidity === '-invalid' || emailValidity === '-empty'"></i>
                <i class="fa fa-check " aria-hidden="true" v-else-if="emailValidity === '-valid'"></i>
            </div>
            <div class="error-message" v-if="emailValidity === '-empty'">Please enter an email</div>
            <div class="error-message" v-else-if="emailValidity === '-invalid'">Enter again with a valid email</div>
        </div>
        <div class="password">
            <div class="password-label">
                <label for="password">Password</label>
                <span @click="show" >
                    <span v-if="input === 'password'">
                        <i class="fa fa-eye" aria-hidden="true"></i>
                        Show
                    </span>
                    <span v-else-if="input === 'text'">
                        <i class="fa fa-eye-slash" aria-hidden="true"></i>
                        Hide
                    </span>
                </span>
            </div>
            <div class="password-input">
                <input :type="input" :class="`password-placeholder${passwordValidity}`" v-model="password">
                <i class="fa fa-exclamation-triangle" aria-hidden="true" v-show="passwordValidity === '-invalid'"></i>
            </div>
        </div>
    </form>
    <div class="validation-checklist">
        <li :class="[hasLowercase ? 'active' : '']"><span>One lowercase character</span></li>
        <li :class="[hasUppercase ? 'active' : '']"><span>One uppercase character</span></li>
        <li :class="[hasNumber ? 'active' : '']"><span>One number</span></li>
        <li :class="[hasSymbols ? 'active' : '']"><span>One special character</span></li>
        <li :class="[hasMinLength ? 'active' : '']"><span>8 characters minimum</span></li>
    </div>
    <div class="bottom-box">
        <div class="button">
            <button @click="checkValidity() + signUp()">Sign up</button>
        </div>
        <Transition>
            <div class="error" v-show="error">
                <i class="fa fa-exclamation-circle" aria-hidden="true"/>
                {{error}}
            </div>      
        </Transition> 
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
    data() {
        return {
            input: "password",
            email: "",
            password: "",
            hasLowercase: false,
            hasUppercase: false,
            hasNumber: false,
            hasSymbols: false,
            hasMinLength: false,
            emailValidity: "",
            passwordValidity: "",
            error: null
        }
    },
    watch: {
        password(newPassword) {
            this.checkLowercase(newPassword);
            this.checkUppercase(newPassword);
            this.checkNumber(newPassword);
            this.checkSymbols(newPassword);
            this.checkLength(newPassword);
            if (this.hasLowercase && this.hasUppercase && this.hasNumber && this.hasSymbols && this.hasMinLength) {
                this.passwordValidity = "";
            }
        },
        email(newEmail) {
            this.checkEmail(newEmail);
        }
    },
    methods: {
        show() {
            if (this.input === "password") {
                this.input = "text"
                return
            }
            this.input = "password"
        },
        changeComponent(component) {
            this.$emit("changeComponent",component)
        },
        checkLowercase(password) {
            if (password !== password.toUpperCase()) {
                this.hasLowercase = true
                return
            }
            this.hasLowercase = false
        },
        checkUppercase(password) {
            if (password !== password.toLowerCase()) {
                this.hasUppercase = true
                return
            }
            this.hasUppercase = false
        },
        checkNumber(password) {
           this.hasNumber = /\d/.test(password)
        },
        checkSymbols(password) {
            this.hasSymbols = /[ `!@`[`#$%^&*()_+\-={};':"\\|\],.<>`/`?~]/.test(password)
        },
        checkLength(password) {
            if (password.length >= 8) {
                this.hasMinLength = true
                return            
            }
            this.hasMinLength = false
        },
        checkEmail(email) {
            if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
                this.emailValidity = "-valid"
                return
            } 
            this.emailValidity = ""
        },
        checkValidity() {
            if (this.email === "") {
                this.emailValidity = "-empty"
                return
            }
            if (this.emailValidity !== "-valid") {
                this.emailValidity = "-invalid"
                return
            }

            if (this.hasLowercase && this.hasUppercase && this.hasNumber && this.hasSymbols && this.hasMinLength) {
                this.passwordValidity = "-valid"
                return
            }
            this.passwordValidity = "-invalid"
        },
        async signUp() {
            if (this.emailValidity === "-valid" && this.passwordValidity === "-valid") {
                try {
                    await AuthenticationService.register({
                        email: this.email,
                        password: this.password,
                    })
                } catch (error) {
                    this.error = error.response.data.error
                }
            }
        }

    }
}
</script>

<style scoped>
.container {
    position: relative;
    height: 700px;
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
    height: 300px;
}

.email-label, .password-label{
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

.email-label span {
    font-size: 14px;
}

.email-label span span {
    margin-left: 6px;
    color: rgba(198, 124, 54, 0.921);
    cursor: pointer;
    font-weight: 600;
}

.email-input, .password-input {
    position: relative;
}

.email-placeholder, .email-placeholder-valid, .password-placeholder, .password-placeholder-valid {
    height: 50px;
    width: 100%;
    border: 1px solid #ced4da;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 12px;
    padding: 14px;
}

.fa.fa-exclamation-triangle {
    position: absolute;
    right: 15px;
    top: 27px;
    color: #e74953;
}

.fa.fa-check {
    position: absolute;
    right: 15px;
    top: 27px;
    color: rgb(40,167,69);
}

.email-placeholder-invalid, .email-placeholder-empty, .password-placeholder-invalid {
    height: 50px;
    width: 100%;
    border: 1px solid #d9212c;
    box-shadow: 0 0 0 3.2px rgb(217 33 44 / 25%);
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 12px;
    padding: 14px;
}


.password-label span {
    color: rgba(198, 124, 54, 0.921);
    font-weight: 600;
    cursor: pointer;
    font-size: 14px;
}

.error-message {
    margin-top: 6px;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    color: #d9212c;;
}

.validation-checklist {
    column-count: 2;
    display: block;
}

li {
    margin-left: 2px;
    margin-bottom: 4px;
    font-weight: 700;
    color: rgba(40,42,53,.3);
    font-size: 15px;
}

li span {
    font-size: 12px;
}

li.active {
    color: rgba(198, 124, 54, 0.921);
}

li.active span {
    color: black;
}

.bottom-box {
    position: relative;
    box-sizing: border-box;
    height: 90px;
    margin-top: 30px;
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

.error {
    background-color: #f2b5b5;
    border-radius: 4px;
    box-sizing: border-box;
    color: #282a35;
    display: block;
    padding: 15px;
    margin-top: 40px;
}

.fa.fa-exclamation-circle {
    color: #f8212f;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>