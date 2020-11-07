<template>
  <div class="home">
    <section class="index-sec-1">
      <div class="container">
        <div class="main-inner-wrap">
          <h1 v-html="banner.bannerText"></h1>
        </div>
      </div>
    </section>
    <section class="index-sec-2">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-12 col-md-6 col-lg-6">
            <div class="index-2-left-wrap">
              <h3 >Our Vision</h3>
              <p
                v-html="vision.visionText"
              ></p>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6">
            <div class="index-2-img-wrap">
              <img
                src="@/assets/images/vision-img-1.png"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p
              class="para-text"
              v-html="vision.visionSubtext"
            ></p>
          </div>
        </div>
      </div>
    </section>
    <section class="index-sec-3">
      <div class="container">
        <h3>Our Team</h3>
        <OurTeam />
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import OurTeam from "@/components/OurTeam.vue";

export default {
  name: "Home",
  components: {
    OurTeam,
  },
  data() {
    return {
      axios: require("axios"),
      banner: {
        bannerImage: '',
        bannerText: ''
      },
      vision:{
        visionImage: '',
        visionText: '',
        visionSubtext: ''
      }
    };
  },
  mounted() {
    this.axios
      .get(process.env.VUE_APP_APIURL + 'homepage_api')
      .then((response) => {
        const res = response.data.Message;
        // console.log(res);
        this.banner.bannerText = res.Banner.BannerText;
        this.vision.visionText = res.Vision.VisionText;
        this.vision.visionSubtext = res.Vision.VisionSubText;
        // console.log(this.banner.bannerText)
      })
      .catch((error) => {
        console.log("Error", error);
      });
  },
};
</script>

<style scoped>
.index-sec-1 {
  background: url(~@/assets/images/banner.jpg) no-repeat;
  /* background: #f4f4f4; */
  min-height: 400px;
  background-size: cover;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-position: right;
}
.index-sec-1::before {
  /* content: ''; */
  position: absolute;
  background: #000000a6;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
}
.main-video-wrapper {
  position: absolute;
  width: 100%;
  min-height: 650px;
  top: -130px;
  left: 0;
  z-index: 1;
}
.main-video-wrapper video {
  display: block;
  position: relative;
  width: auto;
  min-width: 100%;
  height: auto;
}
.main-inner-wrap {
  max-width: 450px;
  z-index: 3;
  position: relative;
}
.main-inner-wrap h1 {
  /* font-family: 'Playball', cursive; */
  /* font-family: Arial, Helvetica, sans-serif; */
  font-size: 24px;
  font-weight: 500;
  color: #000;
  line-height: 1.2;
  margin-bottom: 15px;
  font-style: italic;
}
.index-sec-2 {
  padding: 100px 0;
}
.index-2-left-wrap {
}
.index-2-left-wrap h3 {
  font-size: 24px;
  font-weight: 700;
  color: #282828;
  line-height: 1.2;
  margin-bottom: 45px;
}
.index-2-left-wrap p {
  font-size: 16px;
  font-weight: 500;
  color: #282828;
  line-height: 26px;
  margin-bottom: 15px;
}
.index-2-left-wrap .btn-vision {
  display: inline-block;
  width: 145px;
  background-image: linear-gradient(
    to top,
    #ac0000,
    #c00000,
    #d40000,
    #e80000,
    #fd0000
  );
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
  height: 37px;
  border: none;
  text-align: center;
  padding: 5px 0;
}
.para-text {
  color: #000;
  font-size: 16px;
  line-height: 1.8;
  text-align: center;
  font-weight: 500;
  margin: 90px 90px 0;
}
.index-sec-3 h3 {
  font-size: 24px;
  font-weight: 700;
  color: #282828;
  line-height: 1.2;
  text-align: left;
  padding-left: 15px;
}
@media only screen and (max-width: 1380px) {
  .main-inner-wrap {
    max-width: 350px;
  }
  .main-inner-wrap h1 {
    font-size: 24px;
  }
}

@media only screen and (max-width:575px) {
  .index-sec-1{
    background-position: 88%;
    min-height: 240px;
  }
  .main-inner-wrap {
    max-width: 100%;
    background: rgb(255 255 255 / 85%);
    padding: 15px 10px;
  }
  .main-inner-wrap h1{
    font-size: 18px;
    margin-bottom: 0;
  }
  .index-sec-2 {
    padding: 40px 0;
  }
  .para-text {
    text-align: left;
    margin: 20px 0px 0;
  }
}
</style>
