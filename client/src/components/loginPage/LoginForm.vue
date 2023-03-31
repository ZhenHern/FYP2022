<template>
  <div class="container">
            <h1>Log in</h1>
            <form action="" class="login-form">
                <div class="email">
                    <div class="email-label">
                        <label for="email">Email</label>
                        <span>
                            Need an account?
                            <span @click="changeComponent('SignupForm')">Sign up</span>
                        </span>
                    </div>
                    <div class="email-input">
                        <input type="text" :class="`email-placeholder${emailValidity}`" v-model="email" @keyup.enter="checkValidity">
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
                        <input :type="input" class="password-placeholder" v-model="password" @keyup.enter="checkValidity">
                    </div>
                </div>
            </form>
            <Transition>
                <div class="error" v-show="error !== null">
                    <i class="fa fa-exclamation-circle" aria-hidden="true"/>
                    {{error}}
                </div>   
            </Transition>
            <div class="bottom-box">
                <div class="button">
                    <button @click="checkValidity">Log in</button>
                </div>
                <div class="forgot-password">
                    <div class="link" @click="changeComponent('ResetPasswordForm')">
                        Forgot password?
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import AccountService from "../../services/AccountService"
export default {
    data() {
        return {
            input: "password",
            email: "",
            password: "",
            emailValidity : "",
            error: null,
        }
    },
    watch: {
        email(newEmail) {
            this.checkEmail(newEmail);
            this.error = null
        },
        password() {
            this.error = null
        }
    },
    methods: {
        show() {
            if (this.input === "password") {
                this.input = "text";
                return
            }
            this.input = "password";
        },
        changeComponent(component) {
            this.$emit("changeComponent", {component: component, email: null, password: null})
        },
        checkEmail(email) {
            if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
                this.emailValidity = "-valid"
                return
            } 
            this.emailValidity = ""
        },
        async checkValidity() {
            if (this.email === "") {
                this.emailValidity = "-empty"
                return
            }
            if (this.emailValidity !== "-valid") {
                this.emailValidity = "-invalid"
                return
            }
            try {
                var account = await AccountService.login({
                    email: this.email,
                    password: this.password
                })
                this.loginAccount(account.data.login_id)
            }
            catch (error) {
                this.error = error.response.data
            }
        },
        async loginAccount(loginID) {
            this.$storage.setStorageSync("loginID", loginID);
            var currentUserID = this.$storage.getStorageSync("loginID")
            var currentAccount = await AccountService.showCurrentAccount(currentUserID)
            if (currentAccount.owner) {
                window.location.href = "dashboard"
            }
            else {
                window.location.href = "home"
            }
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

span {
    font-size: 14px;
}

span span {
    margin-left: 6px;
    color: rgba(198, 124, 54, 0.921);
    cursor: pointer;
    font-weight: 600;
}

.email-input, .password-input {
    position: relative;
}

.email-placeholder, .email-placeholder-valid, .password-placeholder {
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
}

.error-message {
    margin-top: 6px;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    color: #d9212c;;
}

.bottom-box {
    position: relative;
    box-sizing: border-box;
    height: 90px;
    margin-top: 20px;
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

.forgot-password {
    margin-top: 20px;
    text-align: center;
}

link {
    cursor: pointer;
}

.link:hover {
    color: rgba(198, 124, 54, 0.921);
    cursor: pointer;
}

.error {
    position: relative;
    background-color: #f2b5b5;
    border-radius: 4px;
    box-sizing: border-box;
    color: #282a35;
    display: block;
    padding: 15px;
}

.fa.fa-exclamation-circle {
    color: #f8212f;
}

.v-enter-active {
    transition: opacity 2s ease;
}

.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>