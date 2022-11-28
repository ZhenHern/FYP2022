<template>
    <input type="checkbox" id="check">
    <header>
        <h2><a href="#" class="logo">Bakery Shop</a></h2>
        <div class="navigation">
          <NavigationRadios @changeComponent="activeComponent = $event"/>
        </div>
        <div class="buttons">
          <a href="login" class="log-in">Log in</a>
        </div>
        <label for="check">
            <i class="fas fa-bars menu-btn"></i>
            <i class="fas fa-times close-btn"></i>
        </label>
    </header>
</template>


<script>
import NavigationRadios from "./NavigationRadios.vue"

export default {
  components: {NavigationRadios}, 
  data() {
    return {
      activeComponent: "Home"
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
header {
  position: relative;
  top: 0%;
  width: 100%;
  padding: 30px 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header .logo {
  position: relative;
  color: #000;
  font-size: 30px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1px;
}

label {
  display: none;
}

#check {
  display: none;
}

.buttons {
  position: relative;
  left: 2%;
  width: 17%;
  display: inline-block;
  font-size: 120%;
  white-space: nowrap;
  align-items: center;
}

a {
  text-decoration: none;
  text-transform: uppercase;
}

.log-in {
  background-color: white;
  color: black;
  line-height: 1.5;
  padding: 8px 30px;
  border: 1px solid rgb(187, 186, 186);
}

.log-in:hover {
  background-color: rgb(235,236,237);
}

@media (max-width: 960px) {
  .log-in {
    display: none;
  }
  header .navigation {
    display: none;
  }

  label {
    display: block;
    font-size: 25px;
    cursor: pointer;
    transition: 0.3s;
  }

  .menu-btn:hover {
    color: rgba(160, 97, 84, 0.986);
  }
  
  .close-btn:hover {
    color: #fff;
  }

  label .close-btn {
    display: none;
  }

  #check:checked ~ header .navigation {
    z-index: 2;
    position: fixed;
    background: rgba(160, 97, 84, 0.986);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #check:checked ~ header .buttons .log-in {
    position: fixed;
    left: 10%;
    display: block;
    z-index: 2;
    background-color: rgba(160, 97, 84, 0.986);
  }

  #check:checked ~ header .buttons .log-in:hover {
    color: white;
  }
  #check:checked ~ header label .menu-btn {
    display: none;
  }
  
  #check:checked ~ header label .close-btn {
    z-index: 2;
    display: block;
    position: fixed;
  }

  label .menu-btn {
    position: absolute;
    top: 40px;
  }
}

</style>