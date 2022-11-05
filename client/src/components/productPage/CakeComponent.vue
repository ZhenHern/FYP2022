<template>
  <div class="background-image">
      <div class="content">
        <div class="text">
          Cakes
          <hr>
        </div>
      </div>
    </div>
    <div class="product-grid">
      <div class="grid-item">
        <img src="../../assets/cake1.jpg">
        Capp. Cheesecake <br> <span>RM 79.99</span>
        <div class="product-hover">
          <a href=""><i class="fa fa-search" aria-hidden="true"></i></a>
          <br>
          <span>Quantity: 0</span>
          <div class="edit-quantity">
            <i class="fa-solid fa-circle-minus"></i>
            <i class="fa-solid fa-circle-plus"></i>
          </div>
        </div>
      </div>
      <div class="grid-item">
        <img src="../../assets/cake2.jpg">
        Croissant <br> <span>RM 6.80</span>
        <div class="product-hover">
          <a href=""><i class="fa fa-search" aria-hidden="true"></i></a>
          <br>
          <span>Quantity: 0</span>
          <div class="edit-quantity">
            <i class="fa-solid fa-circle-minus"></i>
            <i class="fa-solid fa-circle-plus"></i>
          </div>
        </div>
      </div>
      <div class="grid-item">
        <img src="../../assets/cake3.jpg">
        Black Forest <br> <span>RM 73.90</span>
        <div class="product-hover">
          <a href=""><i class="fa fa-search" aria-hidden="true"></i></a>
          <br>
          <span>Quantity: 0</span>
          <div class="edit-quantity">
            <i class="fa-solid fa-circle-minus"></i>
            <i class="fa-solid fa-circle-plus"></i>
          </div>
        </div>
      </div>
      <div class="grid-item">
        <img src="../../assets/cake4.jpg">
        Maple Oat Muffin <br> <span>RM 4.20</span>
        <div class="product-hover">
          <a href=""><i class="fa fa-search" aria-hidden="true"></i></a>
          <br>
          <span>Quantity: 0</span>
          <div class="edit-quantity">
            <i class="fa-solid fa-circle-minus"></i>
            <i class="fa-solid fa-circle-plus"></i>
          </div>
        </div>
      </div>
      <div class="grid-item">
        <img src="../../assets/cake4.jpg">
        Maple Oat Muffin <br> <span>RM 4.20</span>
        <div class="product-hover">
          <a href=""><i class="fa fa-search" aria-hidden="true"></i></a>
          <br>
          <span>Quantity: 0</span>
          <div class="edit-quantity">
            <i class="fa-solid fa-circle-minus"></i>
            <i class="fa-solid fa-circle-plus"></i>
          </div>
        </div>
      </div>
      <div class="grid-item">
        <img src="../../assets/cake4.jpg">
        Maple Oat Muffin <br> <span>RM 4.20</span>
        <div class="product-hover">
          <a href=""><i class="fa fa-search" aria-hidden="true"></i></a>
          <br>
          <span>Quantity: 0</span>
          <div class="edit-quantity">
            <i class="fa-solid fa-circle-minus"></i>
            <i class="fa-solid fa-circle-plus"></i>
          </div>
        </div>
      </div>
      <div class="grid-item">
        <img src="../../assets/cake4.jpg">
        Maple Oat Muffin <br> <span>RM 4.20</span>
        <div class="product-hover">
          <a href=""><i class="fa fa-search" aria-hidden="true"></i></a>
          <br>
          <span>Quantity: 0</span>
          <div class="edit-quantity">
            <i class="fa-solid fa-circle-minus"></i>
            <i class="fa-solid fa-circle-plus"></i>
          </div>
        </div>
      </div>
      <div class="grid-item">
        <img src="../../assets/cake4.jpg">
        Maple Oat Muffin <br> <span>RM 4.20</span>
        <div class="product-hover">
          <a href=""><i class="fa fa-search" aria-hidden="true"></i></a>
          <br>
          <span>Quantity: 0</span>
          <div class="edit-quantity">
            <i class="fa-solid fa-circle-minus"></i>
            <i class="fa-solid fa-circle-plus"></i>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.background-image {
  width: 100%;
  border-top: 3px solid rgb(104,79,64);
  border-bottom: 3px solid rgb(104,79,64);
  height: 300px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.content {
  min-height: 100%;
  filter: brightness(100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.content::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image: url("../../assets/product1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  filter: brightness(50%);
  opacity: 0.9;
}

.text {
  font-size: 70px;
  font-weight: 700;
  letter-spacing: 4px;
  color: white;
  text-transform: uppercase;
}

hr {
  width: 60%;
  margin: auto;
  height: 5px;
  background-color: white;
}

.product-grid {
  position: relative;
  height: 1400px;
  width: 100%;
  display: grid;
  grid-template-columns: 240px 240px 240px 240px;
  grid-template-rows: 400px 400px 400px 400px;
  column-gap: 30px;
  row-gap: 80px;
  padding-top: 150px;
  justify-items: center;
  justify-content: center;
}

.grid-item {
  position: relative;
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid rgb(104, 79, 64);
  width: 100%;
  height: 100%;
  padding: 5px;
  text-transform: uppercase; 
  text-align: center;
  color: #684f40;
  line-height: 30px;
  font-weight: 700;
}

img {
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
  width: 100%;
}

.grid-item:hover img {
  opacity: 0.5;
}

.grid-item:hover .product-hover {
  visibility: visible;
  opacity: 1;
}

.grid-item span {
  color: rgb(253,184,34);
}

.product-hover {
  transition: visibility 0s, opacity 0.5s linear;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70%;
  background: rgba(253,184,34,0.9);
}

.product-hover a {
  transition: background-color 0.6s ease-in-out, color 0.6s ease-in-out;
  font-size: 18px;
  position: relative;
  top: -25px;
  width: 56px;
  height: 56px;
  background-color: white;
  border-radius: 50%;
  color: #fdb822;
  border: 2px solid #fdb822;
  display: inline-block;
  line-height: 52px;
}

.product-hover a:hover {
  background-color: #684f40;
  border-color: #684f40;
  color: white;
}

.product-hover span {
  color: white;
  font-size: 25px;
  letter-spacing: 1px;
  word-spacing: 2px;
}

.edit-quantity {
  padding-top: 55px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: space-around;
  font-size: 50px;
}

.edit-quantity i {
  background-color: #fdb822;
  color: white;
  transition: background-color 0.6s ease-in-out, color 0.6s ease-in-out;
  border-radius: 50%;
}

.edit-quantity i:hover {
  cursor: pointer;
  color: #684f40;
  border-color: #684f40;
  background-color: white;
}

@media (max-width: 1200px) {
  .product-grid {
    position: relative;
    height: 1400px;
    width: 100%;
    display: grid;
    grid-template-columns: 190px 190px 190px 190px;
    grid-template-rows: 360px 360px 360px 360px;
    column-gap: 30px;
    row-gap: 60px;
    padding-top: 150px;
    justify-items: center;
    justify-content: center;
  }

  .grid-item {
    position: relative;
    background-color: rgba(255, 255, 255, 0.8);
    border: 2px solid rgb(104, 79, 64);
    width: 100%;
    height: 100%;
    padding: 5px;
    text-transform: uppercase; 
    text-align: center;
    color: #684f40;
    line-height: 30px;
    font-weight: 700;
  }
}
</style>