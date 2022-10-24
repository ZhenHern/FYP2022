<template>
    <div class="container">
        <div class="content">
           <h2>Reset your password</h2>
           <p>We'll email you instructions to reset the password.</p>
        </div>
        <form action="">
            <div class="email">
                <label for="email">Email</label>
                <div class="email-input">
                    <input type="text" class="email-placeholder" v-model="email">
                    <i class="fa fa-check " aria-hidden="true" v-show="emailValidity"></i>
                </div>
            </div>
        </form>
        <div class="bottom-box">
            <div class="button">
                <button @click="checkValidity" :disabled="!emailValidity">Reset password</button>
            </div>
            <div class="login">   
                <div class="link" @click="changeComponent('LoginForm')">Return to login</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            emailValidity: false,
        }
    },
    watch: {
        email(newEmail) {
            this.checkEmail(newEmail);
        }
    },
    methods: {
        checkEmail(email) {
             if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
                this.emailValidity = true
                return
            } 
            this.emailValidity = false         
        },
        changeComponent(component) {
            this.$emit("changeComponent", {component: component, email: null, password: null})
        }
    }
}
</script>

<style scoped>
.container {
    position: relative;
    height: 480px;
    width: 480px;
    background-color: white;
    border: 1px solid #e3e3e3;    
    border-radius: 16px;
    padding: 48px;
    box-sizing: border-box;
    text-align: left;
}

p {
    margin-top: 35px;
    font-size: 15px;
}

form {
    padding-top: 55px;
    display: block;
    height: 150px;
}

label {
    font-weight: 600;
}

.email-placeholder {
    height: 50px;
    width: 100%;
    border: 1px solid #ced4da;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 12px;
    padding: 14px;
}

.email-input {
    position: relative;
}

.fa.fa-check {
    position: absolute;
    color: rgb(40,167,69);
    right: 15px;
    top: 27px;
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

button:disabled {
    cursor: not-allowed;
    background-color: #e2e8ea;
    color: #798488; 
}

.login {
    margin-top: 20px;
    text-align: center;
}

.link {
    cursor: pointer;
}

.link:hover {
    color: rgba(198, 124, 54, 0.921);
    cursor: pointer;
}
</style>