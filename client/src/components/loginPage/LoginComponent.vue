<template>
    <div class="viewport">
        <Transition name="slide-fade" mode="out-in">
            <component @changeComponent="changeComponent" :is="activeComponent" :email="email" :password="password"></component>           
        </Transition>
        <a href="index"><i class="fa fa-times fa-2xl" aria-hidden="true"></i></a>
    </div>
</template>


<script>
import LoginForm from "./LoginForm.vue"
import SignupForm from "./SignupForm.vue"
import ResetPasswordForm from "./ResetPasswordForm.vue"
import DetailsForm from "./DetailsForm.vue"
import VerificationComponent from "./VerificationComponent.vue"

export default {
    components: {
        LoginForm,
        SignupForm,
        ResetPasswordForm,
        DetailsForm,
        VerificationComponent
    },
    data() {
        return {
            activeComponent: "LoginForm",
            email: null,
            password: null
        }
    },
    methods: {
        changeComponent({component, email, password}) {
            if (component === "DetailsForm") {
                this.activeComponent = component
                this.email = email
                this.password = password
                return
            } 
            this.activeComponent = component
        }
    }
}
</script>

<style scoped>
.viewport {
    background-color: rgb(247,247,247);
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

i {
    position: absolute;
    top: 10%;
    right: 10%;
    color: rgb(77, 77, 77)
}

i:hover {
    color: rgba(198, 124, 54, 0.921);
    cursor: pointer;    
}
</style>