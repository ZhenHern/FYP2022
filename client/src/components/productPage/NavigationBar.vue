<template>
  <div class="main-navigation-bar">
      <div class="logo">
        <a href="#" class="logo">Bakery Shop</a>
      </div>
      <div class="navigation-bar">
        <ul>
          <li>Cakes</li>
          <li>Cookies</li>
          <li>Breads</li>
        </ul>
      </div>
      <div class="buttons">
          <a href="login" class="log-in">Log in</a>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main-navigation-bar {
  height: 120px;
  display: flex;
  justify-content: space-between;
}

.logo {
  height: 100%;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
}

.logo a {
  color: #000;
  font-size: 30px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1px;
}

.navigation-bar {
  width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navigation-bar ul {
  list-style-type: none;
}

.navigation-bar ul li {
  float: left;
  display: block;
  text-align: center;
  padding: 30px;
  text-decoration: none;
  font-size: 25px;
}

a {
  text-decoration: none;
  text-transform: uppercase;
}

.navigation-bar ul li:hover {
  color: rgba(160, 97, 84, 0.986);
  cursor: pointer;
}

.buttons {
  width: 17%;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 120%;
  white-space: nowrap;
  align-items: center;
}

.log-in {
  background-color: white;
  color: black;
  line-height: 1.5;
  padding: 8px 30px;
  border: 1px solid;
}

.log-in:hover {
  background-color: rgb(235,236,237);
}
</style>