<template>
  <div class="main-footer">
    <div class="top-footer">
      <div class="top-container">
        <div class="about-container">
          <div class="about-title">About</div>
          <div class="about-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem commodi doloribus quis veniam nesciunt ipsam impedit iste! Consequatur nihil amet recusandae maxime eveniet! Ipsam ad quidem aut!</div>
        </div>
        <div class="logo-image">
          <img src="../../assets/logo.png" alt="">
        </div>
        <div class="newsletter-container">
          <div class="newsletter-title">Newsletter</div>
          <div class="newsletter-content">Subscribe to get regular updates for new stuff and events.</div>
          <div class="newsletter-form">
            <input type="text" placeholder="Enter your email address here">
            <div class="subscribe-button">
              Subscribe
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bot-footer">
      <div class="bot-container">
        <div class="contact-container">
          <div class="contact-title">Contact Us</div>
          <div class="contact-content">
            <div class="phone-number">
              <div class="phone-icon">
                <i class="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div class="phone-number-content">
                016-9466650
              </div>
            </div>
            <div class="address">
              <div class="address-icon">
                <i class="fa fa-map-marker-alt" aria-hidden="true"></i>
              </div>
              <div class="address-content">
                10, Jalan Setia Villa 1, Setia Eco Glades, 63000 Cyberjaya
              </div>
            </div>
            <div class="email">
              <div class="email-icon">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <div class="email-content">
                bakeryshopfyp@gmail.com
              </div>
            </div>
            <div class="link">
              <div class="link-icon">
                <i class="fa-solid fa-earth-americas"></i>
              </div>
              <div class="link-content">
                www.bakeryshopfyp.com
              </div>
            </div>
          </div>
        </div>
        <div class="social-media-container">
          <div class="button">
            <i class="fab fa-facebook-f"></i>
          </div>
          <div class="button">
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div class="button">
            <i class="fa-brands fa-instagram"></i>
          </div>
          <div class="button">
            <i class="fa-brands fa-youtube"></i>
          </div>
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
.main-footer {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 565px;
}

.top-footer {
  width: 100%;
  height: 200px;
  background-color: rgb(48,49,51);
}

.bot-footer {
  width: 100%;
  height: 365px;
  background-color: rgb(40,41,43);
}

.top-container {
  width: 1085px;
  height: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
}

.about-container {
  float: left;
  position: relative;
  width: 450px;
  height: 140px;
  color: rgb(214,216,219);
}

.about-title {
  font-size: 19px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
}

.about-content {
  margin-top: 10px;
  font-size: 15px;
}

.logo-image {
  position: relative;
  margin-left: 30px;
  margin-right: 30px;
  float: left;
  width: 125px;
  height: 125px;
}

.logo-image img {
  width: 125px;
  height: 125px;
}

.newsletter-container {
  float: left;
  height: 140px;
  width: 450px;
  color: rgb(214,216,219);
}

.newsletter-title {
  font-size: 19px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
}

.newsletter-content {
  margin-top: 10px;
  font-size: 15px;
}

.newsletter-form {
  margin-top: 23px;
  width: 100%;
  height: 42px;
}

.newsletter-form input {
  float: left;
  background-color: rgba(255,255,255,0.15);
  border: 2px solid #ebeaea;
  width: 300px;
  height: 100%;
  padding: 6px 12px;
  outline: 0;
  color: #ebeaea;
}

.newsletter-form input::placeholder {
  color: rgb(158, 160, 158);
}

.subscribe-button {
  height: 100%;
  width: 140px;
  float: left;
  margin-left: 10px;
  background-color: white;
  border-color: white;
  color: rgb(48,49,51);
  font-weight: bold;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.6s ease-in-out, background-color 0.4s ease;
}

.subscribe-button:hover {
  cursor: pointer;
  color: white;
  background-color: rgb(48,49,51);
  border: 2px solid #ebeaea;
}

.bot-container {
  width: 1085px;
  height: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
}

.contact-container {
  width: 350px;
  height: 100%;
  color: white;
  float: left;
}

.contact-title {
  height: 30px;
  font-size: 19px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
}

.contact-content {
  margin-top: 25px;
  height: 250px;
  width: 100%;
  font-size: 15px;
}

.phone-number i{
  font-size: 13px;
  margin-right: 5px;
}

.phone-icon {
  float: left;
  width: 13px;
  margin-right: 9px;
}

.address {
  position: relative;
  height: 50px;
  margin-top: 15px;
}

.address i {
  position: relative;
  font-size: 13px;
  width: 13px;
}

.address-icon {
  width: 13px;
}

.address-content {
  width: 300px;
  position: absolute;
  top: 0px;
  left: 23px;
}

.email {
  margin-top: 15px;
}

.email i {
  font-size: 13px;
}

.email-icon {
  float: left;
  margin-right: 9px;
}

.link {
  margin-top: 15px;
}

.link i {
  font-size: 13px;
}

.link-icon {
  float: left;
  margin-right: 9px;
}

.social-media-container {
  float: left;
  height: 100%;
  width: 200px;
  margin-left: 90px;
  margin-right: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 90px;
}

.button {
  border-radius: 50%;
  background-color: #fdb822;
  color: white;
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s ease;
}

.button:hover {
  cursor: pointer;
  background-color: #684f40;
}






</style>