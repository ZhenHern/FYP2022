<template>
    <div class="content">
        <div class="info">
          <p>One of the most famous online bakery shop</p>
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
    max-width: 2000px;
    margin: 150px 100px;
    margin-left: 300px;
}

.content .info p {
  color: black;
  font-size: 55px;
  text-transform: uppercase;
  font-weight: 50;
  letter-spacing: 2px;
  line-height: 60px;
  margin-bottom: 30px;
}
</style>