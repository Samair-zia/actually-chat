<template>
  <div class="discussion-list">
    <section class="dl-sec-1">
      <div class="container">
        <h2>Discussion</h2>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DiscussionList',
  data(){
    return{

    }
  }
}
</script>

<style scoped>
.dl-sec-1{
  min-height: 140px;
  background: #f4f4f4;
  display: flex;
  align-items: center;
}
.dl-sec-1 h2{
  font-size: 24px;
  font-weight: 700;
  color: #000;
  line-height: 1.2;
  margin-bottom: 15px;
  text-transform: uppercase;
  position: relative;
}
.dl-sec-1 h2::before{
  content: '';
  position: absolute;
  height: 3px;
  width: 30px;
  background-image: linear-gradient(to top, #ac0000, #c00000, #d40000, #e80000, #fd0000);
  bottom: -4px;
  left: 0;
}
</style>