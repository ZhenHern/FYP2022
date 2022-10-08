<template>
    <input type="checkbox" id="check">
    <header>
        <h2><a href="#" class="logo">Bakery Shop</a></h2>
          <div class="navigation">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Info</a>
            <a href="#">Contact Us</a>
            <a href="#" class="login">Login</a>
          </div>
          <label for="check">
            <i class="fas fa-bars menu-btn"></i>
            <i class="fas fa-times close-btn"></i>
          </label>
    </header>
</template>

<script>
export default {
    
}
</script>

<style scoped>
  header {
    position: relative;
    top: 0%;
    width: 100%;
    padding: 30px 100px;
    display: flex;
    justify-content: space-between;
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
  
header .navigation a {
  color: #000;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 2px 15px;
  border-radius: 20px;
  transition: 0.3s;
}

header .navigation a:not(:last-child) {
    margin-right: 30px;
}

header .navigation a:hover {
    background: #fff;
}

label {
    display: none;
}

#check {
    display: none;
}

@media (max-width: 960px) {
    header .navigation {
        display: none;
    }

    label {
        display: block;
        font-size: 25px;
        cursor: pointer;
        transition: 0.3s;
        transition-property: ;
    }

    label:hover {
        color: #fff;
    }

    label .close-btn {
        display: none;
    }

    #check:checked ~ header .navigation {
        z-index: 2;
        position: fixed;
        background: rgb(243, 200, 215);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    #check:checked ~ header .navigation a {
        font-weight: 700;
        margin-right: 0;
        margin-bottom: 50px;
        letter-spacing: 2px;
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