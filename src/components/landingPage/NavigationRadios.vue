<template>
    <ul>
    <li>
        <input type='radio' v-model= "activeComponent" value='Home' name='radio' id='radio1'/>
        <label for='radio1'>Home</label>
    </li>
    <li>
        <input type='radio' v-model= "activeComponent" value='About' name='radio'  id='radio2'/>
        <label for='radio2'>About</label>
    </li>
    <li>
        <input type='radio' v-model= "activeComponent" value='ContactUs' name='radio'  id='radio3'/>
        <label for='radio3'>Contact Us</label>
    </li>
</ul>
</template>

<script>
export default {
    name: "NavigationRadios",
    data() {
        return {
            activeComponent: 'Home'
        }
    },
    watch: {
        activeComponent(newValue) {
            this.$emit("changeComponent",newValue);
    }
  }
}
</script>

<style scoped>
ul {
    list-style: none;
}
li {
    display: inline-block;
    margin-right: 40px;
}
input {
    visibility:hidden;
}
label {
    color: #000;
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 1px;
    padding: 2px 15px;
    border-radius: 20px;
    transition: 0.3s;
    transition-property: width;
}
input:checked + label {
    background: rgba(160, 97, 84, 0.986);
    color: white;
}

input:hover + label {
    background: white;
    color: black;
}

@media (max-width: 960px) {
    li {
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 2px;
        display: block;
        margin-bottom: 40px;
    }
}

</style>