<template>
    <div class="viewport">
        <NavigationBar/>
        <div class="background-image">
            <div class="content">
                <div class="text">
                    About Us
                </div>
            </div>
        </div>
        <div class="introduction-container">
            <div class="introduction">
                <div class="introduction-picture">
                    <img src="../../assets/about_us_picture1.jpg">
                </div>
                <div class="introduction-content">
                    <div class="our-business">
                        <div class="our-business-title">
                            Our Business
                        </div>
                        <div class="our-business-content">
                            <p>
                                At our business, we're passionate about delivering exceptional products and services. We're committed to providing personalized attention to each and every customer and ensuring that their experience with us is a positive one.
                            </p>
                            <p>
                                We take pride in the quality of our work and our commitment to ethical and sustainable practices. Whether you're a first-time customer or a long-time supporter, we're dedicated to making sure that you feel valued and appreciated.
                            </p>
                        </div>
                    </div>
                    <div class="our-team">
                        <div class="our-team-title">
                            Our Team
                        </div>
                        <div class="our-team-content">
                            <p>
                                Our team is made up of skilled and experienced professionals who are dedicated to delivering personalized attention to each and every customer. We are committed to using sustainable and ethical practices, and we take pride in our contribution to creating a better world. We strive to be a positive influence in our community and beyond, and we're committed to making a difference one customer at a time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="background">
            <div class="background-content">
                <div class="timeline">
                    <div class="year">
                        2010
                    </div>
                    <div class="description">
                        In our early years, we focused on perfecting our classic recipes and building a loyal customer base.
                    </div>
                </div>
                <div class="timeline">
                    <div class="year">
                        2016
                    </div>
                    <div class="description">
                        We had expanded our offerings to include a wider range of sweets and savories.
                    </div>
                </div>
                <div class="timeline">
                    <div class="year">
                        2022
                    </div>
                    <div class="description">
                        We launched our very own bakery website that allow us to connect with even more customers.
                    </div>
                </div>
            </div>
            <div class="background-picture">
                <img src="../../assets/about_us_picture2.jpg">
            </div>
        </div>
        <WebsiteFooter/>
    </div>
</template>

<script>
import NavigationBar from '../navigationBar/NavigationBar.vue'
import WebsiteFooter from '../footer/WebsiteFooter.vue'
export default {
    components: {
        NavigationBar,
        WebsiteFooter
    },
    methods: {
    }
}
</script>

<style scoped>
.viewport {
  position: relative;
  background-color: rgb(247,247,247);
  height: fit-content;
  width: 100%;
}

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
  letter-spacing: 2px;
  color: white;
  text-transform: uppercase;
}

.introduction-container {
    background: white;
}

.introduction {
    width: 1170px;
    height: 550px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 50px;
}

.introduction-picture {
    float: left;
    width: 354px;
    height: 450px;
}

.introduction-picture img {
    width: 100%;
    height: 100%;
    opacity: 70%;
    background-color: white;
}

.introduction-content {
    float: left;
    width: 650px;
    height: 450px;
    margin-left: 80px;
}

.our-business-title {
    font-size: 22px;
    font-weight: bold;
    text-transform: uppercase;
    color: #8b6a55;
    margin-bottom: 20px;
    letter-spacing: 1px;
}

.our-business-content {
    color: #575757;
    font-size: 15px;
    word-spacing: 2px;
}

.our-business-content p {
    margin-bottom: 15px;
}

.our-team-title {
    font-size: 22px;
    font-weight: bold;
    text-transform: uppercase;
    color: #8b6a55;
    margin-top: 40px;
    margin-bottom: 20px;
    letter-spacing: 1px;
}

.our-team-content {
    color: #575757;
    font-size: 15px;
    word-spacing: 2px; 
}

.background {
    position: relative;
    width: 1170px;
    height: 560px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 50px;
}

.background-content {
    float: left;
    width: 555px;
    height: fit-content
}

.timeline {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 150px;
    padding-top: 20px;
    padding-bottom: 20px;
}

.year {
    width: 130px;
    height: 40px;
    font-size: 17px;
    font-weight: bold;
    letter-spacing: 1px;
    background-color: #684f40;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.description {
    width: 350px;
    padding: 25px;
    border: 1px solid #f1f1f1;
    background-color: #ffffff;
    color: #696969;
    font-size: 15px;
    text-align: left;
}

.background-picture {
    float: left;
    width: 345px;
    height: 420px;
}

.background-picture img {
    width: 100%;
    height: 100%;
    opacity: 60%;
    background-color: white;
    margin-top: 15px;
    margin-left: 180px;
}
</style>