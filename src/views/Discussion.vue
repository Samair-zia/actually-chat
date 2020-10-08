<template>
  <div class="discussion">
    <div class="container">
      <div class="question-wrap">
      <h2>{{ categoryName }}</h2>
      <div class="question-inner" v-for="(texts, index) in data" :key="index">
        <h3>{{ texts.DiscussText }}</h3>
        <div class="quest-right-wrap">
          <div class="ques-comments">
            <div class="commentbg">{{ texts.DiscusCount }}</div>
          </div>
          <div class="ques-time">
            <font-awesome-icon :icon="['far', 'clock']" class="iconn" />
            <span>{{ texts.DiscusTime }}</span>
          </div>
        </div>
      </div>
    </div>
      <!-- <DiscussQuestion /> -->
      <div class="comments-link-wrap">
        <Comments :commentss="commentsData" @commented="newCommentHappened"/>
        <div>
          <router-link to="/categories" class="goto-btn">Go to Health Conditions</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import DiscussQuestion from '@/components/DiscussQuestion.vue'
import Comments from '@/components/Comments.vue'

export default {
  name: 'Discussion',
  components: {
    // DiscussQuestion,
    Comments
  },
  data(){
    return{
      data: [],
      commentsData:[],
      categoryName: "",

    }
  },
  methods: {
    newCommentHappened() {
      const data = new FormData();
      data.append('register_id', localStorage.getItem('UserID'));
      data.append('discus_id', this.$route.params.id);
      require('axios').post(process.env.VUE_APP_APIURL + "discussions_comments_api", data, {
      headers: {
        'token': localStorage.getItem('UserToken'),
      }
    })
      .then(response => {
          const status = response.data.Status;
          console.log(status);
          console.log("Result", response);
          this.data = response.data.Message.Discussion,
          this.commentsData = response.data.Message.Comments
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  },
  beforeRouteEnter(to, from, next) {
      require("axios")
        .get(
          process.env.VUE_APP_APIURL + "discussion_api/" + to.params.id
        )
        .then((response) => {
          if (response.data.Message.Discussion) {
            const discussID = [...response.data.Message.Discussion][0].CategoryId;
            console.log('i am discuss Id : ' + discussID)
            const data = new FormData();
            data.append('register_id', localStorage.getItem('UserID'));
            data.append('discus_id', discussID);
            require('axios').post(process.env.VUE_APP_APIURL + "discussions_comments_api", data, {
              headers: {
                'token': localStorage.getItem('UserToken'),
              }
            })
            .then(response => {
                const status = response.data.Status;
                console.log(status);
                console.log("Result", response);
                next(vm => {
                  vm.data = response.data.Message.Discussion,
                  vm.commentsData = response.data.Message.Comments
                  vm.categoryName = vm.data[0].CategoryName;
                });
              })
              .catch((error) => {
                console.log("Error", error);
              });
          } else {
            alert('Nothing to discuss.')
          }
        })
        .catch((error) => {
          console.log("Error", error);
        });
  }
}
</script>

<style scoped>
.discussion{
  background: #ecf0f1;
}
.question-wrap{
  padding: 30px 0;
}
.question-wrap h2{
  font-size: 24px;
  font-weight: 700;
  color: #000;
  line-height: 1.2;
  margin-bottom: 25px;
  text-transform: uppercase;
  position: relative;
}
.question-wrap h2::before {
  content: "";
  position: absolute;
  height: 3px;
  width: 30px;
  background-image: linear-gradient(
    to top,
    #ac0000,
    #c00000,
    #d40000,
    #e80000,
    #fd0000
  );
  bottom: -4px;
  left: 0;
}
.question-wrap h3{
  font-size: 18px;
  font-weight: 500;
  color: #282828;
  line-height: 1.5;
  font-family: Poppins,sans-serif;
  padding: 20px;
}
.question-inner{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0 1px 2px #c9cccd;
}
.quest-right-wrap{
  min-width: 100px;
  text-align: center;
}
.ques-comments{
  padding: 20px 0;
  border-left: 1px solid #e0e0e0;
}
.commentbg {
  background-color: #bdc3c7;
  border-radius: 2px;
  display: inline-block;
  padding: 7px 17px;
  color: #ffffff;
  font-size: 14px;
  position: relative;
}
.commentbg::after{
  content: '';
  width: 11px;
  height: 11px;
  background-color: #bdc3c7;
  position: absolute;
  bottom: 0;
  left: 43%;
  margin-bottom: -5px;
  transform: rotate(45deg);
}
.ques-time{
  color: #282828;
  font-size: 12px;
  line-height: 29px;
  padding: 0 10px;
  border-left: 1px solid #e0e0e0;
  border-top: 1px solid #e0e0e0;
}
.iconn{

}
.ques-time span{
  margin-left: 5px;
}
.comments-link-wrap{
  display: flex;
  justify-content: space-between;
}
.goto-btn{
  display: inline-block;
  width: 230px;
  background-image: linear-gradient(to top,#ac0000,#c00000,#d40000,#e80000,#fd0000);
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
  height: 37px;
  border: none;
  text-align: center;
  padding: 5px 0;
}
</style>