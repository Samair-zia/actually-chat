<template>
  <div class="vision">
    <section class="v-sec-1">
      <div class="container">
        <h2>our Vision</h2>
      </div>
    </section>
    <section class="index-sec-2">
      <OurVision />
    </section>
  </div>
</template>

<script>
import OurVision from '@/components/OurVision.vue'

export default {
  name: 'Vision',
  components: {
    OurVision
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>
.v-sec-1{
  min-height: 80px;
  background: #f4f4f4;
  display: flex;
  align-items: center;
}
.v-sec-1 h2{
  font-size: 24px;
  font-weight: 700;
  color: #000;
  line-height: 1.2;
  text-transform: capitalize;
  position: relative;
}
.index-sec-2{
  padding: 20px 0;
}
</style>