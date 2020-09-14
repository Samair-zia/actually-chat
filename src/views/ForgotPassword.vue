<template>
  <div class="forget-pass">
    <section class="forget-sec-1">
      <div class="container">
        <div class="login-inner-wrap">
          <div class="login-header">
            <h3>Forgot Password</h3>
          </div>
          <div class="login-body">
            <div class="login-single-field">
              <label>Email:</label>
              <input type="email" placeholder="Enter Email">
            </div>
          </div>
          <div class="login-footer">
            <button>Send</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ForgotPassword',
  data(){
    return{

    }
  }
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