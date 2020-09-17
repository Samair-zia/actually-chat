<template>
  <div class="discussion-list">
    <section class="dl-sec-1">
      <div class="container">
        <h2>Discussions</h2>
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
    </section>
  </div>
</template>

<script>
export default {
  name: "DiscussionList",
  data() {
    return {
      axios: require("axios"),
      userId: this.$route.params.id,
      questions: [
        {
          name: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, debitis error dignissimos molestias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, debitis error dignissimos molestias?`,
          commentCount: 123,
          time: "24 min",
        },
        {
          name: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, debitis error dignissimos molestias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, debitis error dignissimos molestias?`,
          commentCount: 45,
          time: "02 min",
        },
        {
          name: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, debitis error dignissimos molestias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, debitis error dignissimos molestias?`,
          commentCount: 79,
          time: "49 min",
        },
      ],
    };
  },
  methods: {
    receiveFaq(fetching_data) {
      fetching_data
        .then((r) => r.json())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error.response);
          alert("Error Fetching Data. Try Again");
        });
    },
  },
  beforeRouteEnter(to, from, next) {
    require("axios")
      .get(process.env.VUE_APP_APIURL + "discussion_api/" + to.params.id)
      .then((response) => {
        console.log(response)
        // const res = response.data;

      })
      .catch((error) => {
        console.log("Error", error);
      });

    // console.log(to.params.id);
    console.log(from);
    console.log(next);
    // const fetching_data = fetch(
    //   `${process.env.VUE_APP_APIURL}discussion_api`,
    //   to.params.id
    // ).then((r) => r.json())
    //   .then((res) => {
    //     console.log(res);
    //   }); 
    // next((vm) => {
    //   vm.receiveFaq(fetching_data);
    // });
    /* const data = new FormData();
    data.append('register_id', localStorage.getItem('UserID'));
    require('axios').post(process.env.VUE_APP_APIURL + 'discussion_api', data, {
      headers: {
        'token': localStorage.getItem('UserToken'),
      }
    })
    .then((response) => {
      console.log(response)
        const status = response.data.Status;
          console.log("Result", response);
          if(status == '200'){
            // localStorage.setItem('UserID', response.data.Message.UserID);
            // localStorage.setItem('UserToken', response.data.Message.UserToken);
            // this.$router.push('/categories');
          }
          else if(status == '400') {
            alert('Bad Request. Server issue occured.')
          }
          else if(status == '403') {
            alert(response.data.Status_Detail)
          }
          else if(status == '422') {
            alert(response.data.Status_Detail)
          }




      next(vm => {
        vm.$emit('loggedIn');
        // vm.categoryList = [ ...response.data.Message.Category ];
      });
    })
    .catch((error) => {
      console.log('Error', error);
      // localStorage.removeItem('UserID');
      // localStorage.removeItem('UserToken');
      // next({ name: 'Login' });
    }); */
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
  border-left: 1px solid #e0e0e0;
  border-top: 1px solid #e0e0e0;
}
.iconn {
}
.ques-time span {
  margin-left: 5px;
}
</style>
















