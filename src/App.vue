<template>
  <div id="app">
    <Header :loggedIn="isLoggedIn" @logMeOut="logMeOut"/>
      <router-view @loggedIn="updateLoggedInStatus"/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  data(){
    return{
      isLoggedIn: localStorage.getItem('UserToken'),
    }
  },
  methods: {
    updateLoggedInStatus() {
      this.isLoggedIn = localStorage.getItem('UserToken');
    },
    logMeOut() {
      localStorage.removeItem('UserID');
      localStorage.removeItem('UserToken');
      this.isLoggedIn = false;
      this.$router.push({ name: 'Home' });
    }
  }
}
</script>