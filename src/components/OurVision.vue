<template>
  <div class="our-vision">
    <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-12 col-md-6 col-lg-6">
            <div class="index-2-left-wrap">
              <p v-html="visionText"></p>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6">
            <div class="index-2-img-wrap">
              <img src="@/assets/images/vision-img-1.png" class="img-fluid" alt="">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p class="para-text" v-html="visionSubText"></p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'OurVision',
  data(){
    return{
      axios: require("axios"),
      visionText: '',
      visionSubText: ''
    }
  },
  mounted(){
    this.axios.get(process.env.VUE_APP_APIURL + 'vision_api')
    .then((response) => {
      const res = response.data.Message;
      this.visionText = res.VisionText;
      this.visionSubText = res.VisionSubText;
    })
    .catch((error) => {
      console.log("Error", error)
    })
  }
}
</script>

<style scoped>
.index-2-left-wrap{}
.index-2-left-wrap h3{
  font-size: 24px;
  font-weight: 700;
  color: #282828;
  line-height: 1.2;
  margin-bottom: 15px;
}
.index-2-left-wrap p{
  font-size: 16px;
  font-weight: 500;
  color: #282828;
  line-height: 26px;
  margin-bottom: 15px;
}
.index-2-left-wrap button{
  width: 145px;
  background-image: linear-gradient(to top, #ac0000, #c00000, #d40000, #e80000, #fd0000);
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
  height: 37px;
  border: none;
}
.para-text{
  color: #000;
  font-size: 16px;
  line-height: 1.8;
  text-align: center;
  font-weight: 500;
  margin: 90px 90px 0;
}
@media only screen and (max-width:575px) {
  .para-text {
    text-align: left;
    margin: 20px 0px 0;
  }
}
</style>