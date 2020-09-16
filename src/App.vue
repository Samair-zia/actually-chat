<template>
  <div id="app">
    <Header :loggedIn="isLoggedIn"/>
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
      // nonHeaderPages: ['views.login'],
      // nonFooterPages: ['views.login'],
      isLoggedIn: localStorage.getItem('UserToken'),
    }
  },
  methods: {
    updateLoggedInStatus() {
      this.isLoggedIn = localStorage.getItem('UserToken');
    },
  }
}
</script>