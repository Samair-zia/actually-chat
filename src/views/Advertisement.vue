<template>
  <div class="advertisement">
    <div class="container">
      <h1>Coming Soon</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Advertisement'
}
</script>

<style scoped>
h1{
  color: #000;
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  padding: 100px;
}
@media only screen and (max-width:575px) {
  h1{
    font-size: 30px;
    padding: 70px;
  }
}
</style>