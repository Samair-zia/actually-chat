<template>
  <section class="forget-sec-1">
    <div class="container">
      <form method="post" @submit.prevent="reset" ref="formReset">
      <div class="login-inner-wrap">
        <div class="login-header">
          <h3>Reset Password</h3>
        </div>
        <div class="login-body">
          <div class="login-single-field">
            <label>New Password:</label>
            <input type="password" placeholder="Enter Password" name="new_password" v-model="new_password">
          </div>
          <div class="login-single-field">
            <label>Confirm New Password:</label>
            <input type="password" placeholder="Confirm Password" name="confirm_password" v-model="confirm_password">
          </div>
        </div>
        <div class="login-footer">
          <button>Send</button>
        </div>
      </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ResetPassword',
  data(){
    return{
      axios: require("axios"),
      new_password: '',
      confirm_password: '',
    }
  },
  methods: {
    reset(){
      if(this.new_password == this.confirm_password){
        const data = new FormData(this.$refs.formReset);
        data.append('reset_token', this.$route.params.id);
        // console.log(this.$route.params.id);
        this.axios.post(process.env.VUE_APP_APIURL + 'reset_password_api', data)
        .then((response) => {
          const status = response.data.Status;
          console.log(response);
          console.log(status);
          if(status == '200'){
            alert('Password reset.');
            this.$router.push('/login');
          }
          else{
            alert('Something went wrong.')
          }
        })
        .catch((error) => {
          console.log('sasasas', error);
          if(error.response.status == '403'){
            alert("Invalid Email! Please enter email with you've already signed up.")
          }
        })

      } else {
        alert('Password Not matched')
      }
      
      this.new_password= '';
      this.confirm_password= '';
    }
  },
}
</script>

<style scoped>
.forget-sec-1{
  padding: 60px 0;
}
.login-inner-wrap{
  background: #f4f4f4;
  max-width: 450px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 0 6px rgba(2, 3, 3, .1);
}
.login-header{}
.login-header h3{
  text-align: center;
  font-size: 22px;
  color: #000;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 5px;
}
.login-body{}
.login-single-field{
  margin-bottom: 10px;
}
.login-single-field label{
  color: #000;
  font-size: 14px;
  line-height: 1.2;
  margin-bottom: 5px;
  font-weight: 500;
  font-family: Poppins,sans-serif;
}
.login-single-field input{
  width: 100%;
  background: #fff;
  border: none;
  height: 35px;
  padding: 0 10px;
  box-shadow: 0 0 6px rgba(2, 3, 3, .1);
  font-size: 14px;
  color: #000;
  font-family: Poppins,sans-serif;
}
.login-footer{
  text-align: center;
  margin-top: 30px;
}
.login-footer button{
  width: 145px;
  background-image: linear-gradient(0deg, #ac0000, #c00000, #d40000, #e80000, #fd0000);
  color: #fff;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
  height: 37px;
  border: none;
}
</style>