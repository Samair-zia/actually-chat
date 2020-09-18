<template>
  <footer class="text-center">
    <section class="footer_sec1">
      <div class="containter">
        <img src="@/assets/images/logo.png" class="img-fluid foot-logo" data-aos="zoom-in-down" data-aos-duration="1300">
      </div>
    </section>
    <section class="footer_sec3">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="footer_sec3_colum2">
              <h6>Get Social with Us</h6>
              <div class="social_link">
                <a href="javascript:void(0)" data-aos="zoom-in-down" data-aos-duration="1300"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
                <a href="javascript:void(0)" data-aos="zoom-in-down" data-aos-duration="1300"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
                <a href="javascript:void(0)" data-aos="zoom-in-down" data-aos-duration="1300"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
                <a href="javascript:void(0)" data-aos="zoom-in-down" data-aos-duration="1300"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="footer_sec4">
      <p> Copyright 2020. Actually Health Chat. All Rights Reserved | <router-link to="/privacy-policy">Privacy Policy</router-link> | <router-link to="/cookie-policy">Cookie Policy</router-link> </p>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data(){
    return{
      
    }
  }
}
</script>

<style scoped>
footer {
  background: #f4f4f4;
  color: #000;
  background-size: cover;
  background-position: center;
}
section.footer_sec1 {
  padding: 90px 0 40px 0;
}
.footer_sec2 {
  max-width: 68%;
  margin: 0 auto;
  display: block;
  font-size: 14px;
}
.footer_sec3 {
  padding: 70px 0;
}
.footer_sec3_colum1 input {
  width: 100%;
  max-width: 373px;
  min-height: 40px;
  padding: 0 15px;
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
}
.footer_sec3_colum2 {
  text-align: center;
}
.letter_txt {
  max-width: 68%;
  width: 100%;
}
.footer_sec3 h6 {
  font-size: 21px;
  padding: 0 0 20px 0;
}
.footer_sec4 p {
  font-size: 14px;
}
.social_link {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.social_link a {
  border-radius: 50%;
  border: 1px solid;
  color: #000;
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  position: relative;
  z-index: 2;
}
.social_link a:hover:before{
width: 40px;
height: 40px
}
.social_link a:before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  text-align: center;
  background-color: #d30000;
  border: 1px solid #fff;
  border-radius: 50%;
  opacity: 0.5;
  transition: all ease 0.5s;
  z-index: -1;
}
.footer_sec4 {
  padding: 0 0 30px 0;
}
.foot-logo{
  max-width: 300px;
}
</style>