<template>
  <div class="main-footer">
    <div class="top-footer">
      <div class="top-container">
        <div class="about-container">
          <div class="about-title">About</div>
          <div class="about-content">Welcome to our bakery! We are a family-owned business dedicated to creating delicious treats and providing our customers with an exceptional experience.</div>
        </div>
        <div class="logo-image">
          <img src="../../assets/logo.png" alt="">
        </div>
        <div class="newsletter-container">
          <div class="newsletter-title">Newsletter</div>
          <div class="newsletter-content">Subscribe to get regular updates for new stuff and events.</div>
          <div class="newsletter-form">
            <input type="text" placeholder="Email address *">
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
                 4, Jalan PJS 9/4 Bandar Sunway, 46500 Petaling Jaya
              </div>
            </div>
            <div class="email">
              <div class="email-icon">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <div class="email-content">
                bakeryzh@gmail.com
              </div>
            </div>
            <div class="link">
              <div class="link-icon">
                <i class="fa-solid fa-earth-americas"></i>
              </div>
              <div class="link-content">
                zhenhern.github.io/FYP2022/index
              </div>
            </div>
          </div>
        </div>
        <div class="social-media-container">
          <div class="button" @click="goToFacebook()">
            <i class="fab fa-facebook-f"></i>
          </div>
          <div class="button" @click="goToTwitter()">
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div class="button" @click="goToInstagram()">
            <i class="fa-brands fa-instagram"></i>
          </div>
          <div class="button" @click="goToYoutube()">
            <i class="fa-brands fa-youtube"></i>
          </div>
        </div>
        <div class="opening-hours-container">
          <div class="opening-hours-title">Opening Hours</div>
          <div class="opening-hours-content">
            <div :class="currentDay == 1 ? 'active' : 'normal-day'">
              <div class="day">Monday</div>
              <div class="time">09:00 - 19:00</div>
            </div>
            <div :class="currentDay == 2 ? 'active' : 'normal-day'">
              <div class="day">Tuesday</div>
              <div class="time">09:00 - 19:00</div>
            </div>
            <div :class="currentDay == 3 ? 'active' : 'normal-day'">
              <div class="day">Wednesday</div>
              <div class="time">Closed</div>
            </div>
            <div :class="currentDay == 4 ? 'active' : 'normal-day'">
              <div class="day">Thursday</div>
              <div class="time">09:00 - 19:00</div>
            </div>
            <div :class="currentDay == 5 ? 'active' : 'normal-day'">
              <div class="day">Friday</div>
              <div class="time">09:00 - 19:00</div>
            </div>
            <div :class="currentDay == 6 ? 'active' : 'normal-day'">
              <div class="day">Saturday</div>
              <div class="time">11:00 - 19:00</div>
            </div>
            <div :class="currentDay == 0 ? 'active' : 'normal-day'">
              <div class="day">Sunday</div>
              <div class="time">11:00 - 19:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  mounted() {
    var currentDay = new Date()
    this.currentDay = currentDay.getDay()
  },
  data() {
    return {
      currentDay: 0
    }
  },
  methods: {
    goToFacebook() {
      window.location.href = "https://www.facebook.com/BLACKPINKOFFICIAL"
    },
    goToTwitter() {
      window.location.href = "https://twitter.com/BLACKPINK"
    },
    goToInstagram() {
      window.location.href = "https://www.instagram.com/blackpinkofficial/?hl=en"
    },
    goToYoutube() {
      window.location.href = "https://www.youtube.com/watch?v=YudHcBIxlYw&ab_channel=BLACKPINK"
    }
  }
}
</script>

<style scoped>
::selection {
  background: #fdb822;
  color: white;
}

.main-footer {
  position: relative;
  bottom: 0px;
  width: 100%;
  height: auto;
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
  margin-top: 28px;
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
  margin-top: 28px;
}

.email i {
  font-size: 13px;
}

.email-icon {
  float: left;
  margin-right: 9px;
}

.link {
  margin-top: 28px;
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
  padding-bottom: 40px;
}

.button {
  border-radius: 50%;
  background-color: #fdb822;
  color: white;
  width: 50px;
  height: 50px;
  display: flex;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s ease;
}

.button:hover {
  cursor: pointer;
  background-color: #684f40;
}

.opening-hours-container {
  float: left;
  width: 355px;
  height: 100%;
  color: white;
}

.opening-hours-title {
  height: 30px;
  font-size: 19px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
}

.opening-hours-content {
  margin-top: 25px;
  height: 250px;
  font-size: 15px;
}

.normal-day {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.active {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  color: #fdb822;
  margin-bottom: 8px;
}

@media (max-width: 1200px) {
  .main-footer {
    height: auto;
  }
  
  .top-footer {
    height: 280px;
  }

  .top-container {
    width: 850px;
    padding-top: 50px;
  }

  .about-container {
    width: 360px;
  }

  .about-content {
    font-size: 14px;
  }

  .newsletter-container {
    width: 305px;
  }

  .newsletter-content {
    font-size: 14px;
  }

  .newsletter-form {
    width: 305px;
  }

  .newsletter-form input {
    width: 60%;
  }

  .subscribe-button {
    width: 30%;
    font-size: 14px;
  }

  .bot-container {
    width: 850px;
  }

  .social-media-container {
    margin-left: 0px;
    margin-right: 0px;
  }

  .opening-hours-container {
    width: 300px;
  }
}

@media (max-width: 900px) {
  .top-footer {
    height: auto;
  }

  .top-container {
    width: 85%;
  }

  .about-container {
    height: auto;
    width: 100%;
    float: none;
  }

  .about-title {
    font-size: 20px;
  }

  .about-content {
    width: 100%;
    font-size: 16px;
  }

  .logo-image {
    float: none;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
  }

  .newsletter-container {
    height: 160px;
    margin-top: 50px;
    float: none;
    position: relative;
    width: 100%;
  }

  .newsletter-content {
    font-size: 16px;
  }

  .newsletter-form {
    width: 100%;
  }

  .subscribe-button {
    margin-left: 20px;
  }

  .bot-footer {
    height: auto;
  }

  .bot-container {
    width: 85%;
  }

  .contact-container {
    float: none;
    width: 90%;
  }
  
  .social-media-container {
    float: none;
    width: 95%;
    flex-direction: row;
    justify-content: space-between;
  }

  .contact-content {
    width: 100%;
  }

  .opening-hours-container {
    float: none;
    width: 95%;
  }
}


</style>