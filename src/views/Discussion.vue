<template>
  <div class="discussion">
    <div class="container">
      <DiscussQuestion />
      <Comments />
    </div>
  </div>
</template>

<script>
import DiscussQuestion from '@/components/DiscussQuestion.vue'
import Comments from '@/components/Comments.vue'

export default {
  name: 'Discussion',
  components: {
    DiscussQuestion,
    Comments
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>
.discussion{
  background: #ecf0f1;
}
</style>