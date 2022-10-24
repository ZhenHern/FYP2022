<template>
  <div class="container">
    <h1>Please verify your email</h1>
    <div class="image">
        <img src="../../assets/verify-email.jpg" alt="">
    </div>
    <div class="alert">
        <i class="fa fa-check-circle" aria-hidden="true"></i>
        We've sent an verification email to you with instructions.
    </div>
    <div class="bottom-box">
        <div class="button">
            <button class="submit" @click="changeComponent('LoginForm')">I have clicked the link</button>
        </div>
        <div class="resend-email">
            <div class="resend-button" @click="resendVerification">Resend verification email</div>
        </div>
    </div>
  </div>
</template>

<script>
import UserService from '@/services/UserService'
export default {
    props: {
        email: String,
    },
    methods: {
        changeComponent(component) {
            this.$emit("changeComponent", {component: component, email: null, password: null})
        },
        resendVerification() {
            UserService.resendVerification({
                email: this.email
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
    width: fit-content;
}

.resend-button:hover {
    color: rgba(173, 108, 47, 0.921);   
    cursor: pointer;
}
</style>