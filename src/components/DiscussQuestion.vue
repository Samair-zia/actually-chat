<template>
  <div class="cat-question">
    <div class="question-wrap">
      <div class="question-inner" v-for="(question, index) in questions" :key="index">
        <h3>{{ question.name }}</h3>
        <div class="quest-right-wrap">
          <div class="ques-comments">
            <div class="commentbg">{{ question.commentCount }}</div>
          </div>
          <div class="ques-time">
            <font-awesome-icon :icon="['far', 'clock']" class="iconn" />
            <span>{{ question.time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiscussQuestion',
  data(){
    return{
      questions: [
        { 
          name: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, debitis error dignissimos molestias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, debitis error dignissimos molestias?`, 
          commentCount: 123, 
          time: '24 min'
        },
        { 
          name: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, debitis error dignissimos molestias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, debitis error dignissimos molestias?`, 
          commentCount: 45, 
          time: '02 min'
        },
        { 
          name: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, debitis error dignissimos molestias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, debitis error dignissimos molestias?`, 
          commentCount: 79, 
          time: '49 min'
        }
      ]

    }
  }
}
</script>

<style scoped>
.question-wrap{
  padding: 30px 0;
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
  margin-bottom: 10px;
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
  border-left: 1px solid #e0e0e0;
  border-top: 1px solid #e0e0e0;
}
.iconn{

}
.ques-time span{
  margin-left: 5px;
}
</style>