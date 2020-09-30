<template>
  <div class="discussion-list">
    <section class="dl-sec-1">
      <div class="container">
        <template v-if="questions.length">
          <h2>{{ this.categoryName }}</h2>
        </template>
        <template v-else>
          <h2>Discussion</h2>
        </template>
        <div class="question-wrap">
          <template v-if="questions.length">
            <router-link
              v-for="(question, index) in questions"
              :key="index"
              :to="{ name: 'Discussion', params: { id: question.DiscussId } }"
              tag="div"
              class="question-inner"
            >
              <!-- <h3>{{ question.CategoryName }}</h3> -->
              <h3>{{ question.DiscussText }}</h3>
              <div class="quest-right-wrap">
                <div class="ques-comments">
                  <div class="commentbg">{{ question.DiscusCount }}</div>
                </div>
                <div class="ques-time">
                  <font-awesome-icon :icon="['far', 'clock']" class="iconn" />
                  <span>{{ question.DiscusTime }}</span>
                </div>
              </div>
            </router-link>
          </template>
          <template v-else>
            <p>No Questions Available</p>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "DiscussionList",
  data() {
    return {
      axios: require("axios"),
      questions: [],
      categoryName: "",
    };
  },
  mounted() {
    // const catID = localStorage.getItem('Category-1');
    require("axios")
      .get(
        process.env.VUE_APP_APIURL + "discussion_api/" + this.$route.params.id
      )
      .then((response) => {
        if (response.data.Message.Discussion) {
          this.questions = [...response.data.Message.Discussion];
          // console.log(this.questions[0].CategoryName)
          this.categoryName = this.questions[0].CategoryName;
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  },
};
</script>

<style scoped>
.dl-sec-1 {
  min-height: 140px;
  background: #f4f4f4;
  display: flex;
  align-items: center;
}
.dl-sec-1 h2 {
  font-size: 24px;
  font-weight: 700;
  color: #000;
  line-height: 1.2;
  margin-bottom: 15px;
  text-transform: uppercase;
  position: relative;
  margin-top: 60px;
}
.dl-sec-1 h2::before {
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
.question-wrap {
  padding: 30px 0;
}
.question-wrap h3 {
  font-size: 18px;
  font-weight: 500;
  color: #282828;
  line-height: 1.5;
  font-family: Poppins, sans-serif;
  padding: 20px;
}
.question-inner {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0 1px 2px #c9cccd;
  margin-bottom: 10px;
  cursor: pointer;
}
.quest-right-wrap {
  min-width: 100px;
  text-align: center;
}
.ques-comments {
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
.commentbg::after {
  content: "";
  width: 11px;
  height: 11px;
  background-color: #bdc3c7;
  position: absolute;
  bottom: 0;
  left: 43%;
  margin-bottom: -5px;
  transform: rotate(45deg);
}
.ques-time {
  color: #282828;
  font-size: 12px;
  line-height: 29px;
  padding: 0 10px;
  border-left: 1px solid #e0e0e0;
  border-top: 1px solid #e0e0e0;
}
.iconn {
}
.ques-time span {
  margin-left: 5px;
}
</style>
















