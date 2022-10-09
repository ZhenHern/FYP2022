<template>
    <div class="content">
        <div class="title">
            About Us
        </div>
        <div class="picture">
        </div>
        <div class="info">
            <p>ZH Homemade Bakery - a bakehouse that extends a warmth feeling that comes from the skilled hands of bread artisans. 
               We always emphasizes on never compromising on techniques and steps, differentiating ourselves through the textures and ingredients of our bakes.
               We are also known for using fresh, natural and healthy ingredients.
            </p>
        </div>
        <div class="icon">
            <img src="../../assets/organic.jpg">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.content {
    width: 100%;
    height: 1500px;
    min-height: 600px;
    display: flex;
}

.content .title  {
    position: relative;
    top: 70px;
    width: 100%;
    height: fit-content;
    margin-left: 43%;
    font-size: 40px;
    font-weight: 50%;
    text-transform: uppercase;
}

.picture {
    position: absolute;
    margin-top: 1%;
    top: 22%;
    width: 100%;
    height: 40%;
    display: flex;
    --bg-image: url(../../assets/landingpage.jpg);
    --bg-image-opacity: 65%;
    flex-direction: row;
    justify-content: flex-start;
}

.picture::after {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    opacity: var(--bg-image-opacity);
    background-image: var(--bg-image);
    background-size: cover;
    background-position: center;
}

.info {
    padding-left: 10%;
    padding-right: 15%;
    position: absolute;
    width: 50%;
    height: 400px;
    top: 70%;
    border-right: 3px solid rgba(155, 129, 124, 0.986);
}

p {
    font-size: 20px;
    text-align: justify;
    word-spacing: 2px;
    line-height: 200%;
    justify-content: center;
}

.icon {
    position: absolute;
    top: 68%;
    left: 50%;
}

img {
    margin-top: 5%;
    margin-left: 10%;
    width: 400px;
    height: 400px;
}




</style>