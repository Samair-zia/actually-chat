<template>
  <div class="team">
    <section class="t-sec-1">
      <div class="container">
        <h2>Our Team</h2>
      </div>
    </section>
    <OurTeam />
  </div>
</template>

<script>
import OurTeam from '@/components/OurTeam.vue'


export default {
  name: 'Team',
  components:{
    OurTeam
  },
  data(){
    return{
    }
  }
}
</script>

<style scoped>
.t-sec-1{
  min-height: 80px;
  background: #f4f4f4;
  display: flex;
  align-items: center;
}
.t-sec-1 h2{
  font-size: 24px;
  font-weight: 700;
  color: #000;
  line-height: 1.2;
  text-transform: capitalize;
  position: relative;
}
</style>