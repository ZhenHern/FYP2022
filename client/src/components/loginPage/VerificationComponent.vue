<template>
  <div class="container">
    <h1>Please verify your email</h1>
    <div class="image">
        <img src="../../assets/verify-email.jpg" alt="">
    </div>
    <Transition name="fade" mode="out-in">
        <div class="alert" v-if="!resend">
            <i class="fa fa-check-circle" aria-hidden="true"></i>
                We've sent an verification email to {{email}} with instructions.          
        </div>
        <div class="alert" v-else-if="resend">
            <i class="fa fa-check-circle" aria-hidden="true"></i>
                Verification email has been resent to {{email}}.          
        </div>
    </Transition>
    <div class="bottom-box">
        <div class="button">
            <button class="submit" @click="changeComponent('LoginForm')">I have clicked the link</button>
        </div>
        <div class="resend-email">
            <button class="resend-button" @click="resendVerification" :disabled="resend">Resend verification email</button>
        </div>
    </div>
  </div>
</template>

<script>
import AccountService from '../../services/AccountService'
export default {
    props: {
        email: String,
    },
    data() {
        return {
            resend: false,
        }
    },
    methods: {
        changeComponent(component) {
            this.$emit("changeComponent", {component: component, email: null, password: null})
        },
        resendVerification() {
            AccountService.resendVerification({
                email: this.email
            })
            this.resend = true
            this.message = `Verification email has been resent to ${this.email}`
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

.image {
    display: flex;
    margin-top: 20px;
    height: 40%;
    justify-content: center;
}

img {
    max-width: 100%;
    max-height: 100%;
}

.alert {
    border-radius: 4px;
    padding: 15px;
    background-color: #d9eee1;
    word-spacing: 1px;
}

.fa {
    color: rgb(4, 170, 109);
    margin-right: 8px;
}

.bottom-box {
    margin-top: 30px;
    padding-top: 40px;
    height: 30%;
}

.submit {
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

.submit:hover {
    background-color: rgba(173, 108, 47, 0.921);
}

.submit:active {
    background-color: rgba(116, 72, 32, 0.921);
}

.resend-email {
    margin-top: 22px;
    display: flex;
    justify-content: center;
}

.resend-button {
    all: unset;
    width: fit-content;
}

.resend-button:hover {
    color: rgba(173, 108, 47, 0.921);   
    cursor: pointer;
}

.resend-button:disabled {
    color:#cccccc;
    cursor: not-allowed;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}

.fade-enter-from {
    transform: translateX(-100px);
    opacity: 0;
}


.fade-leave-to {
    transition: 1s;
    transform: translateX(100px);
    opacity: 0;
}

</style>