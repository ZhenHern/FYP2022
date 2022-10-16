<template>
    <div class="viewport">
        <component @changeComponent="activeComponent=$event" :is="activeComponent"></component>
    </div>
</template>


<script>
import LoginForm from "./LoginForm.vue"
import SignupForm from "./SignupForm.vue"

export default {
    components: {
        LoginForm,
        SignupForm
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
</style>