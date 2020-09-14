<template>
  <section class="index-sec-3">
    <div class="container">
      <h3>Scientific and Medical Advisors</h3>
      <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-4" v-for="(advisor,index) in advisors" :key="index">
          <div class="single-advice-wrap">
            <img :src="advisor.mainImg" class="img-fluid sa-img" alt="">
            <div class="sa-text-wrap">
              <img :src="advisor.iconImg" alt="">
              <h5>{{ advisor.name }}</h5>
              <p> {{ advisor.desc }} </p>
              <router-link :to="{ path: advisor.link }"> {{ advisor.linkName }} </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Advisors',
  data(){
    return{
      advisors: [
        { name: 'Excepteur sint occaecat cupidatat', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo?', iconImg: require('@/assets/images/advisor-icon-1.png'), mainImg: require('@/assets/images/advisor-1.jpg'), link: '/', linkName: 'Read More'},
        { name: 'Excepteur sint occaecat cupidatat', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo?', iconImg: require('@/assets/images/advisor-icon-2.png'), mainImg: require('@/assets/images/advisor-2.jpg'), link: '/', linkName: 'Read More'},
        { name: 'Excepteur sint occaecat cupidatat', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo?', iconImg: require('@/assets/images/advisor-icon-3.png'), mainImg: require('@/assets/images/advisor-3.jpg'), link: '/', linkName: 'Read More'},
        { name: 'Excepteur sint occaecat cupidatat', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo?', iconImg: require('@/assets/images/advisor-icon-4.png'), mainImg: require('@/assets/images/advisor-4.jpg'), link: '/', linkName: 'Read More'},
        { name: 'Excepteur sint occaecat cupidatat', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo?', iconImg: require('@/assets/images/advisor-icon-5.png'), mainImg: require('@/assets/images/advisor-5.jpg'), link: '/', linkName: 'Read More'},
        { name: 'Excepteur sint occaecat cupidatat', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo?', iconImg: require('@/assets/images/advisor-icon-6.png'), mainImg: require('@/assets/images/advisor-6.jpg'), link: '/', linkName: 'Read More'},
      ]
    }
  }  
}
</script>

<style scoped>
.index-sec-3{
  padding: 80px 0;
  background: #f4f4f4;
  background-size: cover;
}
.index-sec-3 h3{
  font-size: 24px;
  font-weight: 700;
  color: #282828;
  line-height: 1.2;
  margin-bottom: 35px;
  text-align: center;
}
.single-advice-wrap{
  position: relative;
  margin-bottom: 100px;
}
.single-advice-wrap .sa-img{}
.sa-text-wrap{
  position: absolute;
  bottom: -60px;
  background: #fff;
  margin: 0 20px;
  text-align: center;
  padding: 0 10px 10px 10px;
  box-shadow: 0px 10px 30px #0000002e;
}
.sa-text-wrap img{
  margin-top: -30px;
}
.sa-text-wrap h5{
  font-size: 14px;
  font-weight: 700;
  color: #282828;
  line-height: 1.2;
  margin: 25px 0 10px 0;
}
.sa-text-wrap p{
  font-size: 14px;
  font-weight: 500;
  color: #282828;
  line-height: 1.5;
  padding: 0 15px;
  margin-bottom: 5px;
}
.sa-text-wrap a{
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
  color: #c20000;
}
.view-more{
  width: 200px;
  background-image: linear-gradient(to top, #ac0000, #c00000, #d40000, #e80000, #fd0000);
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
  border: none;
  padding: 10px;
  display: inline-block;
}
</style>