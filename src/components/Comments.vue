<template>
  <div class="comments">
    <section class="comment-sec-1">
      <div class="comment-wrapper">
        <div class="comment-inner" v-for="(comment, index) in commentss" :key="index">
          <h5 class="c-name">{{ comment.UserName }}</h5>
          <label class="c-time"> {{ comment.CommentsTime }} </label>
          <p class="single-comment">{{ comment.CommentsText }}</p>
        </div>
        <hr>
        <form @submit.prevent="addComment">
          <textarea rows="5" v-model="newComment" placeholder="Enter comment"></textarea> <br>
          <button>Comment</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  props: {
    commentss: {
      required: true,
      type: Array,
    },
  },
  data(){
    return{
      newComment: ''
    }
  },
  methods: {
    addComment(){
      const data = new FormData();
      data.append('register_id', localStorage.getItem('UserID'));
      data.append('discus_id', this.$route.params.id);
      data.append('comments_text', this.newComment);
      require('axios').post(process.env.VUE_APP_APIURL + "post_comments_api", data, {
      headers: {
        'token': localStorage.getItem('UserToken'),
      }
    })
    .then(response => {
      const status = response.data.Status;
      console.log(status);
      console.log("Result", response.data);
      this.newComment= '';
      this.$emit('commented');
      // location.reload();
      // this.$forceUpdate();
      // next(vm => {
      //   vm.data = response.data.Message.Discussion,
      //   vm.commentsData = [ ...response.data.Message.Comments]
      // });
      })
      .catch((error) => {
        console.log("Error", error);
      });
    }
  }
}
</script>

<style scoped>
.comment-sec-1{}
.comment-wrapper{
  padding-bottom: 30px;
}
.comment-inner{
  margin-bottom: 15px;
}
.c-name{
  font-size: 16px;
  font-weight: 600;
  color: #000;
}
.c-time{
  color: #8e8e8e;
  font-size: 12px;
  display: inline-block;
  line-height: 1;
  margin-bottom: 4px;
}
.single-comment{
  font-size: 14px;
  color: #000;
  max-width: 850px;
  border: 1px solid #eee;
  box-shadow: 0 1px 2px #c9cccd;
  padding: 10px;
  border-radius: 2px;
  background: #fff;
}
.comment-wrapper input, .comment-wrapper textarea{
  border: 1px solid #eee;
  box-shadow: 0 0 6px rgba(2, 3, 3, .1);
  font-size: 14px;
  max-width: 850px;
  width: 100%;
  margin: 5px 0 0;
  padding: 7px;
  color: #000;
}
.comment-wrapper button{
  width: 145px;
  background-image: linear-gradient(0deg, #ac0000, #c00000, #d40000, #e80000, #fd0000);
  color: #fff;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
  height: 37px;
  border: none;
  margin-top: 20px;
}
</style>