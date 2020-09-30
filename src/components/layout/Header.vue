<template>
  <header>
    <div class="header-top">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="head-top-left-wrap">
              <a href="mailto:info@actuallyhc.com" class="hide-on-mob"><i class="fas fa-envelope"></i>Email: {{ headerEmail }}</a>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-4 text-center">
            <router-link to="/" class="logo-wrap"><img src="@/assets/images/logo.png" class="img-fluid" alt=""></router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="head-top-right-wrap">
              <a href="#!" class="hide-on-mob"><i class="fas fa-phone-alt"></i>Contact: {{ headerPhone }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom" id="headd">
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
            <a class="account-link dropdown" href="javascript:void(0)">
             <span class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Members Area</span>
             <div class="dropdown-menu custom-drop-menu" aria-labelledby="dropdownMenuButton">
              <router-link class="dropdown-item" to="/categories">Health Conditions</router-link>
              <router-link class="dropdown-item" to="/careers">Careers</router-link>
              <router-link class="dropdown-item" to="/advertisement">Advertisement</router-link>
            </div>
            </a>
            <!-- <router-link v-if="loggedIn" class="account-link" to="/discussion">Discussion</router-link> -->
          </div>
          <a href="#!" class="cd-hide-on-lg"><i class="fas fa-envelope"></i>Email: {{ headerEmail }}</a>
          <a href="#!" class="cd-hide-on-lg"><i class="fas fa-phone-alt"></i>Contact: {{ headerPhone }}</a>
        </div>
      </div>
    </div>
    <div class="mobile-menu">
      <div class="circle" id="navbar" @click="openMenu"><font-awesome-icon :icon="['fa', 'bars']" /></div>
      <div class="overlay" id="overlay" @click="closeMenu"></div>
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
    },
    openMenu(){
      document.getElementById("headd").classList.add("is-opened");
      document.getElementById("overlay").classList.add("is-on");
    },
    closeMenu(){
      document.getElementById("overlay").classList.remove("is-on");
      document.getElementById("headd").classList.remove("is-opened");
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
.mobile-menu{
  display: none;
}
.cd-hide-on-lg{
  display: none;
}
.custom-drop-menu{
  border: 0;
  border-radius: 0;
  box-shadow: 1px 2px 4px rgba(2, 2, 3, 0.2);
}
.custom-drop-menu .dropdown-item{
  padding: 5px 15px;
  font-size: 16px;
}

@media only screen and (max-width:575px) {
  .header-top{
    padding: 5px 0;
  }
  .head-top-left-wrap, .head-top-right-wrap{
    text-align: center;
  }
  .logo-wrap img{
    max-width: 170px;
  }
  .mobile-menu{
    display: block;
  }
  .mobile-menu .circle {
    width: 35px;
    height: 34px;
    line-height: 40px;
    color: #fff;
    background: #d82c2c;
    margin: 0 auto;
    font-size: 16px;
    position: absolute;
    right: 10px;
    top: 15px;
    z-index: 1000000;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
  }
  .header-bottom {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 280px;
    height: 100%;
    background: #fff;
    opacity: 0;
    visibility: hidden;
    z-index: 999;
    transform: translateX(-320px);
    transition: all 0.5s cubic-bezier(0.7, 0, 0.3, 1);
    padding: 10px 0;
  }
  .header-bottom.is-opened {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }
  .mobile-menu .overlay {
    position: fixed;
    top: 0;
    right: 0;
    width: calc(100% - 280px);
    height: 100%;
    background: rgba(0, 0, 0, 0.71);
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s cubic-bezier(0.7, 0, 0.3, 1);
  }
  .mobile-menu .overlay.is-on {
    opacity: 1;
    visibility: visible;
    z-index: 999;
  }
  .nav-wrapper, .main-nav{
    display: block;
  }
  .main-nav .main-nav-li{
    margin: 0 0 10px 0;
  }
  .main-nav .main-nav-li .main-nav-link, .account-wrap .account-link {
    font-size: 16px;
    color: #000;
    margin-left: 0;
    display: block;
  }
  .account-wrap .account-link {
    font-size: 16px;
    color: #000;
    margin: 0 0 10px 0;
    display: block;
  }
  .hide-on-mob{
    display: none;
  }
  .cd-hide-on-lg{
    display: block;
    font-size: 14px;
    color: #d82c2c;
    margin: 0 0 5px 0;
    font-weight: 500;
    line-height: 21px
  }
}
</style>