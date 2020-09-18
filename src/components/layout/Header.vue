<template>
  <header>
    <div class="header-top">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="head-top-left-wrap">
              <a href="#!"><i class="fas fa-envelope"></i>Email: {{ headerEmail }}</a>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-4 text-center">
            <router-link to="/" class="logo-wrap"><img src="@/assets/images/logo.png" class="img-fluid" alt=""></router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="head-top-right-wrap">
              <a href="#!"><i class="fas fa-phone-alt"></i>Contact: {{ headerPhone }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="container">
        <div class="nav-wrapper">
          <ul class="main-nav">
            <li class="main-nav-li"><router-link class="main-nav-link" to="/">Home</router-link></li>
            <li class="main-nav-li"><router-link class="main-nav-link" to="/vision">Our Vision</router-link></li>
            <li class="main-nav-li"><router-link class="main-nav-link" to="/our-team">Our Team</router-link></li>
          </ul>
          <div class="account-wrap">
            <router-link v-if="!loggedIn" class="account-link" to="/login">Login</router-link>
            <a href="javascript:void(0)" v-if="loggedIn" class="account-link" @click="loggedOut">Logout</a>
            <router-link class="account-link" to="/categories">Members Area</router-link>
            <!-- <router-link v-if="loggedIn" class="account-link" to="/discussion">Discussion</router-link> -->
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    loggedIn: {
      required: true,
    }
  },
  data(){
    return{
      axios: require("axios"),
      headerEmail: '',
      headerPhone: '',
    }
  },
  mounted(){
    this.axios
      .get(process.env.VUE_APP_APIURL + 'header_api')
      .then((response) => {
        const res = response.data.Message;
        
        this.headerEmail = res.HeaderEmail;
        this.headerPhone = res.HeaderPhone;
      })
      .catch((error) => {
        console.log("Error", error);
      });
  },
  methods:{
    loggedOut(){
      this.$emit('logMeOut');
    }
  }
}
</script>

<style scoped>
header{
  font-family: 'Montserrat';
}
.header-top{
  background: #fff;
  padding: 15px 0;
}
.head-top-left-wrap{}
.head-top-left-wrap a{
  font-size: 16px;
  font-weight: 500;
  color: #282828;
  line-height: 1.2;
}
.head-top-left-wrap a i{
  color: #d00000;
  margin-right: 5px;
}
.logo-wrap{}
.logo-wrap img{
  max-width: 200px;
}
.head-top-right-wrap{
  text-align: right;
}
.head-top-right-wrap a{
  font-size: 16px;
  font-weight: 500;
  color: #282828;
  line-height: 1.2;
}
.head-top-right-wrap a i{
  color: #d00000;
  margin-right: 5px;
}
.header-bottom{
  /*background: #d00000;*/
  /*background: #d00000a1;*/
  background: #d82c2c;
  padding: 20px 0;
}
.nav-wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.main-nav{
  display: flex;
  align-items: center;
}
.main-nav .main-nav-li{
  margin-right: 70px;
}
.main-nav .main-nav-li .main-nav-link{
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  line-height: 21px;
}
.account-wrap{}
.account-wrap .account-link{
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  line-height: 21px;
  margin-left: 40px;
}
.router-link-exact-active {
  color: #000 !important;
}
</style>