  <template>
  <div class="comments">
    <section class="comment-sec-1">
      <div class="comment-wrapper">
        <form @submit.prevent="addComment">
          <!-- <wysiwyg v-model="comments_text"/> -->
          <textarea
            name="comments_text"
            rows="4"
            placeholder="Share your experiences, questions and responses"
            required
            class="summernote"
          ></textarea>
          <br />
          <button type="submit">Send</button>
          <!-- <button type="submit" :disabled="!comments_text">Send</button> -->
        </form>
        <hr />
        <div
          class="comment-inner"
          v-for="(comment, index) in commentss"
          :key="index"
        >
          <h5 class="c-name">{{ comment.NickName }}</h5>
          <label class="c-time"> {{ comment.CommentsTime }} </label>
          <Highlighter
            class="my-highlight single-comment"
            highlightClassName="highlight"
            :searchWords="keywords"
            :autoEscape="true"
            :textToHighlight="comment.CommentsText"
            v-html="comment.CommentsText"
          />

          <div
            class="reply-wrapper"
            v-for="(Reply, i) in comment.Reply"
            :key="i"
          >
            <h5 class="c-name">{{ Reply.NickName }}</h5>
            <label class="c-time"> {{ Reply.CommentsTime }} </label>
            <Highlighter
              class="my-highlight single-comment"
              highlightClassName="highlight"
              :searchWords="keywords"
              :autoEscape="true"
              :textToHighlight="Reply.CommentsText"
              v-html="Reply.CommentsText"
            />
          </div>

          <button
            :class="{ ml60: comment.Reply }"
            data-toggle="collapse"
            :data-target="'#collapse' + index"
            aria-expanded="false"
          >
            Reply
          </button>

          <form @submit.prevent="addReply">
            <div class="collapse" :id="'collapse' + index">
              <div class="mt-3 ml60">
                <input
                  type="hidden"
                  name="parent_comment_id"
                  :value="comment.CommentsId"
                />
                <textarea
                  name="comments_text"
                  rows="4"
                  placeholder="Enter comment"
                  class="summernote"
                  :data-id="'summer' + index"
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
import Highlighter from "vue-highlight-words";

export default {
  name: "Comments",
  components: {
    Highlighter,
  },
  data() {
    return {
      replyArray: [],
      parentId: "",
      // comments_text: '',
    };
  },
  props: {
    commentss: {
      required: true,
      type: Array,
    },
    discuss_id: {
      require: true,
    },
    words: {
      require: true,
      type: String,
    },
  },
  methods: {
    addComment(event) {
      // if (this.comments_text == ''){
      
      // }
    // addComment() {
      const data = new FormData(event.target);
      data.append("register_id", localStorage.getItem("UserID"));
      data.append("discus_id", this.discuss_id);
      data.append("parent_comment_id", 0);
      // data.append("comments_text", this.comments_text);
      require("axios")
        .post(process.env.VUE_APP_APIURL + "post_comments_api", data, {
          headers: {
            token: localStorage.getItem("UserToken"),
          },
        })
        .then((response) => {
          const status = response.data.Status;
          console.log(status);
          // console.log("Result", response.data);
          this.newComment = "";
          this.$emit("commented");
        })
        .catch((error) => {
          console.log("Error from comments: ", error);
        });
        event.target.reset();
        require('jquery')('.summernote').summernote('reset');
      // this.comments_text= '';
    },
    addReply(event) {
      const data = new FormData(event.target);
      data.append("register_id", localStorage.getItem("UserID"));
      data.append("discus_id", this.discuss_id);
      require("axios")
        .post(process.env.VUE_APP_APIURL + "post_comments_api", data, {
          headers: {
            token: localStorage.getItem("UserToken"),
          },
        })
        .then((response) => {
          const status = response.data.Status;
          console.log(status);
          // console.log("Result from reply", response.data);
          this.$emit("commented");
        })
        .catch((error) => {
          console.log("Error from comments: ", error);
        });
      // event.target.reset();
        require('jquery')('.summernote').summernote('reset');

    },
  },
  computed: {
    keywords() {
      return this.words.split(" ");
    },
  },
  mounted() {
    // require('jquery')('.summernote').summernote({
    //   toolbar: [
    //     ['fontstyle', ['fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'deleteallformat']],
    //     ['insert', ['link']],
    //     ['para', ['style', 'ul', 'ol', 'paragraph']],
    //     // ['misc', ['undo', 'redo', 'codeview']],
    //   ],
    //   height: 100,
    // });
    // require('jquery')('.summernote2').summernote({
    //   toolbar: [
    //     ['fontstyle', ['fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'deleteallformat']],
    //     ['insert', ['link']],
    //     ['para', ['style', 'ul', 'ol', 'paragraph']],
    //     // ['misc', ['undo', 'redo', 'codeview']],
    //   ],
    //   height: 100,
    // });

      require('jquery')('.summernote2').each(function(i, obj) { require('jquery')(obj).summernote({
      //   toolbar: [
      //   ['fontstyle', ['fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'deleteallformat']],
      //   ['insert', ['link']],
      //   ['para', ['style', 'ul', 'ol', 'paragraph']],
      //   // ['misc', ['undo', 'redo', 'codeview']],
      // ],
      // height: 100,
        onblur: function() {
          var id = require('jquery')(obj).data('id');
          console.log(id)
          var sHTML = require('jquery')(obj).code();
          alert(sHTML);
        }
  });
});

  }
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
  display: block;
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
.comment-wrapper button:disabled{
  background-image: linear-gradient(0deg, #eeeeee, #b4b4b4);
  color: #000;
  cursor: not-allowed;
}
.comment-inner button {
  width: 95px;
  background: #d4af37;
  color: #000;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  height: 30px;
  border: none;
  margin-top: 20px;
  font-style: italic;
}
.ml60 {
  margin-left: 60px;
}
.comment-reply {}
.reply-wrapper {
  margin: 20px 0 20px 60px;
}
.mark, mark {
  padding: 0;
  background-color: #fbd303;
}

</style>