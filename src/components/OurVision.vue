<template>
  <div class="our-vision">
    <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-12 col-md-6 col-lg-6">
            <div class="index-2-left-wrap">
              <p data-aos="fade-up" data-aos-duration="1500">Actually Health Chat is founded to provide a free online platform for members to ask questions, share and exchange information on various aspects of health conditions and health care.  Issues such as symptoms, treatments, medicines, medical devices, health care providers and facilities based on their own experiences (or experiences of their family members and friends) are being explored.  Information from credible sources including news reports, publications and books may also be discussed. Thus, members share and discuss information as a service to each other.</p>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6">
            <div class="index-2-img-wrap">
              <img src="@/assets/images/vision-img-1.png" class="img-fluid" alt="" data-aos="zoom-in-up" data-aos-duration="1500">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p class="para-text" data-aos="fade-down" data-aos-duration="1500">The information shared by the members does not intend to replace the advice and treatments by health care experts. If you fall ill, you ought to go to see a doctor. But this platform helps members to make better decisions, explore more options or find alternative health care providers and facilities to better fit their individual situations.</p>
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

    }
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
</style>