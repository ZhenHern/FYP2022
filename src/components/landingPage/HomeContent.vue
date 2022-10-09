<template>
    <div class="content">
        <div class="info">
          <p>Home Page</p>
        </div>
      </div>
</template>

<script>
export default {
    name: "HomeContent"
}
</script>

<style scoped>
.content {
  width: 100%;
}

.content .info p {
  position: relative;
  margin-left: 30%;
  color: black;
  font-size: 55px;
  text-transform: uppercase;
  font-weight: 50;
  letter-spacing: 2px;
  line-height: 60px;
  margin-bottom: 30px;
}
</style>