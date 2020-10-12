<template>
  <div class="comments">
    <section class="comment-sec-1">
      <div class="comment-wrapper">
        <form @submit.prevent="addComment">
          <textarea
            name="comments_text"
            rows="4"
            placeholder="Enter comment"
            required
          ></textarea>
          <br />
          <button type="submit">Send</button>
        </form>
        <hr />
        <div
          class="comment-inner"
          v-for="(comment, index) in commentss"
          :key="index"
        >
          <h5 class="c-name">{{ comment.NickName }}</h5>
          <label class="c-time"> {{ comment.CommentsTime }} </label>
          <p class="single-comment">{{ comment.CommentsText }}</p>

          <p>{{ comment.CommentsId }}</p>
          <div class="comment-reply" v-for="(reply, index) in replyArray" :key="index">
            <div v-show="comment.CommentsId == parentId" >
              <p>{{ comment.CommentsId }}</p>
              <p> {{ reply.CommentsText }}</p>
            </div>
              <!-- <template v-else> -->
                <!-- <p>no commetn</p></template> -->
          </div>

          <button data-toggle="collapse" :data-target="'#collapse' + index" aria-expanded="false" >Reply</button>
          
          <form @submit.prevent="viewReply">
            <input type="hidden" name="parent_comment_id" :value="comment.CommentsId" />
            <button>View Reply</button>
          </form>

          <form @submit.prevent="addReply">
            <div class="collapse" :id="'collapse' + index">
              <div class="mt-3 ml-50">
                <input
                  type="hidden"
                  name="parent_comment_id"
                  :value="comment.CommentsId"
                />
                <textarea
                  name="comments_text"
                  rows="4"
                  placeholder="Enter comment"
                ></textarea>
                <br />
                <button type="submit">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Comments",
  data(){
    return{
      replyArray: [],
      parentId: '',
    }
  },
  props: {
    commentss: {
      required: true,
      type: Array,
    },
  },
  methods: {
    addComment(event) {
      const data = new FormData(event.target);
      data.append("register_id", localStorage.getItem("UserID"));
      data.append("discus_id", this.$route.params.id);
      data.append("parent_comment_id", 0);
      require("axios")
        .post(process.env.VUE_APP_APIURL + "post_comments_api", data, {
          headers: {
            token: localStorage.getItem("UserToken"),
          },
        })
        .then((response) => {
          const status = response.data.Status;
          console.log(status);
          console.log("Result", response.data);
          this.newComment = "";
          this.$emit("commented");
          // location.reload();
          // this.$forceUpdate();
          // next(vm => {
          //   vm.data = response.data.Message.Discussion,
          //   vm.commentsData = [ ...response.data.Message.Comments]
          // });
        })
        .catch((error) => {
          console.log("Error from comments: ", error);
        });
      event.target.reset();
    },
    addReply(event) {
      const data = new FormData(event.target);
      data.append("register_id", localStorage.getItem("UserID"));
      data.append("discus_id", this.$route.params.id);

      require("axios")
        .post(process.env.VUE_APP_APIURL + "post_comments_api", data, {
          headers: {
            token: localStorage.getItem("UserToken"),
          },
        })
        .then((response) => {
          const status = response.data.Status;
          console.log(status);
          console.log("Result from reply", response.data);
          // this.newComment= '';
          // this.$emit('commented');
        })
        .catch((error) => {
          console.log("Error from comments: ", error);
        });
      event.target.reset();
    },
    viewReply(event) {
    console.log('before route enter route id', this.$route.params.id);
    const data = new FormData(event.target);
    data.append('register_id', localStorage.getItem('UserID'));
    data.append('discus_id', this.$route.params.id);
    // data.append('parent_comment_id', '108');
    require("axios")
      .post(process.env.VUE_APP_APIURL + 'get_reply_api/', data,  {
          headers: {
            token: localStorage.getItem("UserToken"),
          },
        })
      .then((response) => {

        const res = response.data;
        console.log('replyyyyy ', res.Message);
        this.replyArray = res.Message.Comments;
        console.log(res.Message.Comments)
        console.log(res.Message.Comments.length)
        if(res.Message.Comments.length >= 1){
          this.parentId = res.Message.Comments[0].ParentCommentId;
        }
        else{
          this.parentId = null
        }

        // const res = response.data;
        // console.log('replyyyyy ', res.Message);
        // this.replyArray = res.Message.Comments;
        // console.log(res.Message.Comments[0].ParentCommentId)
        // this.parentId = res.Message.Comments[0].ParentCommentId;
      })
      .catch((error) => {
        console.log("Error", error);
      });
  },
  },
  mounted(){
    console.log('before route enter route id', this.$route.params.id);
    const data = new FormData();
    data.append('register_id', localStorage.getItem('UserID'));
    data.append('discus_id', this.$route.params.id);
    data.append('parent_comment_id', 108);
    // for(var i = 1; i < 109; i++) {
    //   data.append('parent_comment_id', i);
    // }

    require("axios")
      .post(process.env.VUE_APP_APIURL + 'get_reply_api/', data, {
        headers: {
          token: localStorage.getItem("UserToken"),
        },
      })
      .then((response) => {
        const res = response.data;
        console.log('replyyyyy ', res.Message);
        this.replyArray = res.Message.Comments;
        console.log(res.Message.Comments)
        console.log(res.Message.Comments.length)
        if(res.Message.Comments.length >= 1){
          this.parentId = res.Message.Comments[0].ParentCommentId;
        }
        else{
          this.parentId = null
        }
        // if(res.Message.Comments[0].ParentCommentId === 0){
        //   console.log('no parent')
        // }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
  // mounted() {
  //   console.log('before route enter route id', this.$route.params.id);
  //   const data = new FormData();
  //   data.append('register_id', localStorage.getItem('UserID'));
  //   data.append('discus_id', this.$route.params.id);
  //   data.append('parent_comment_id', '108');
  //   require("axios")
  //     .post(process.env.VUE_APP_APIURL + 'get_reply_api/', data,  {
  //         headers: {
  //           token: localStorage.getItem("UserToken"),
  //         },
  //       })
  //     .then((response) => {
  //       const res = response.data;
  //       console.log('replyyyyy ', res.Message);
  //       this.replyArray = res.Message.Comments;
  //     })
  //     .catch((error) => {
  //       console.log("Error", error);
  //     });
  // },
  // beforeRouteEnter(to, from, next) {
  //   require("axios")
  //     .get(
  //       process.env.VUE_APP_APIURL + "get_reply_api/" + to.params.id
  //     )
  //     .then((response) => {
  //       console.log('response from get reply', response.data)
  //       console.log(from)
  //       console.log(next)
  //     })
  //     .catch((error) => {
  //       console.log("Error", error);
  //     });
  // }
};
</script>

<style scoped>
.comments {
  max-width: 850px;
  flex: 1;
}
.comment-sec-1 {
}
.comment-wrapper {
  padding-bottom: 30px;
}
.comment-inner {
  margin-bottom: 15px;
}
.c-name {
  font-size: 16px;
  font-weight: 600;
  color: #000;
}
.c-time {
  color: #8e8e8e;
  font-size: 12px;
  display: inline-block;
  line-height: 1;
  margin-bottom: 4px;
}
.single-comment {
  font-size: 14px;
  color: #000;
  max-width: 850px;
  border: 1px solid #eee;
  box-shadow: 0 1px 2px #c9cccd;
  padding: 10px;
  border-radius: 2px;
  background: #fff;
}
.comment-wrapper input,
.comment-wrapper textarea {
  border: 1px solid #eee;
  box-shadow: 0 0 6px rgba(2, 3, 3, 0.1);
  font-size: 14px;
  max-width: 850px;
  width: 100%;
  margin: 5px 0 0;
  padding: 7px;
  color: #000;
}
.comment-wrapper button {
  width: 145px;
  background-image: linear-gradient(
    0deg,
    #ac0000,
    #c00000,
    #d40000,
    #e80000,
    #fd0000
  );
  color: #fff;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
  height: 37px;
  border: none;
  margin-top: 20px;
}
.comment-inner button {
  width: 95px;
  background-image: linear-gradient(
    0deg,
    #ac0000,
    #c00000,
    #d40000,
    #e80000,
    #fd0000
  );
  color: #fff;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  height: 30px;
  border: none;
  margin-top: 20px;
}
.ml-50 {
  margin-left: 50px;
}
.comment-reply{
  
}
</style>