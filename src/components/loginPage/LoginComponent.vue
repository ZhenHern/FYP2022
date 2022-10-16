<template>
    <div class="viewport">
        <Transition name="slide-fade" mode="out-in">
            <component @changeComponent="activeComponent=$event" :is="activeComponent"></component>           
        </Transition>
        <a href="landingpage"><i class="fa fa-times fa-2xl" aria-hidden="true"></i></a>
    </div>
</template>


<script>
import LoginForm from "./LoginForm.vue"
import SignupForm from "./SignupForm.vue"
import ResetPasswordForm from "./ResetPasswordForm.vue"

export default {
    components: {
        LoginForm,
        SignupForm,
        ResetPasswordForm
    },
    data() {
        return {
            activeComponent: "LoginForm"
        }
    }
}
</script>

<style scoped>
.viewport {
    background-color: rgb(247,247,247);
    height: 100vh;
    width: 100%;
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
}

i:hover {
    color: rgba(198, 124, 54, 0.921);
    cursor: pointer;    
}
</style>