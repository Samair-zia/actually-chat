<template>
  <div class="login">
    <section class="login-sec-1">
      <div class="container">
        <div>
          <h6>
            <span>Sign Up</span>
            <span>Log In</span>
          </h6>
          <input class="checkbox change" type="checkbox" id="reg-log" />
          <label for="reg-log"></label>
          <div class="card-3d-wrap mx-auto">
            <div class="card-3d-wrapper">
              <div class="card-front">
                <div class="center-wrap">
                  <ValidationObserver v-slot="{handleSubmit}">
                    <form method="post" @submit.prevent="handleSubmit(signup)" ref="formHTML">
                      <div class="login-inner-wrap">
                        <div class="login-header">
                          <h3>Sign Up</h3>
                        </div>
                        <div class="login-body">
                          <!-- <p v-if="errors.length">
                          <b>Please correct the following error(s):</b>
                          <ul>
                            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                          </ul>
                          </p>-->
                          <ValidationProvider
                            name="Name"
                            rules="required|min:1|max:25"
                            v-slot="{ errors }"
                          >
                            <div class="login-single-field">
                              <label>Name:</label>
                              <input
                                type="text"
                                placeholder="Enter name"
                                name="register_name"
                                v-model="signupFields.register_name"
                              />
                              <span>{{ errors[0] }}</span>
                            </div>
                          </ValidationProvider>
                          <ValidationProvider
                            name="E-Mail"
                            rules="required|email"
                            v-slot="{ errors }"
                          >
                            <div class="login-single-field">
                              <label>Email:</label>
                              <input
                                type="email"
                                placeholder="Enter Email"
                                name="register_email"
                                v-model="signupFields.register_email"
                              />
                              <span>{{ errors[0] }}</span>
                            </div>
                          </ValidationProvider>
                          <ValidationProvider
                            name="Password"
                            rules="required|min:3|max:16"
                            v-slot="{ errors }"
                          >
                            <div class="login-single-field">
                              <label>Password:</label>
                              <input
                                type="password"
                                placeholder="Enter Password"
                                name="register_pswd"
                                v-model="signupFields.register_pswd"
                                title="Minimun 3 and maximum 16 characters long"
                              />
                              <span>{{ errors[0] }}</span>
                            </div>
                          </ValidationProvider>
                        </div>
                        <div class="login-footer">
                          <!-- <p class="member-agree">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
                            debitis vitae. Lorem ipsum dolor sit amet consectetur.
                            <a
                              href="#collapseExample"
                              data-toggle="collapse"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >Read More</a>
                          </p> -->
                          <!-- <p class="collapse member-agree" id="collapseExample">
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Accusamus enim harum commodi illum quas fugit? Nam, enim similique, culpa
                            itaque esse amet fugit laborum aliquid odio atque temporibus blanditiis tempora.
                          </p> -->
                          <ValidationProvider name="Accept" rules="required" v-slot="{ errors }">
                            <label>
                              <input type="checkbox" v-model="signupFields.acceptTerms" /> I agree to <router-link to="/members-agreements">members aggrement</router-link> form
                            </label> <br>
                            <span>{{ errors[0] }}</span><br>
                          </ValidationProvider>
                          <button>Signup</button>
                        </div>
                      </div>
                    </form>
                  </ValidationObserver>
                </div>
              </div>
              <div class="card-back">
                <div class="center-wrap">
                  <ValidationObserver v-slot="{handleSubmit}">
                  <form method="post" @submit.prevent="handleSubmit(login)" ref="formLogin">
                    <div class="login-inner-wrap">
                      <div class="login-header">
                        <h3>Login</h3>
                      </div>
                      <div class="login-body">
                        <ValidationProvider
                            name="E-Mail"
                            rules="required|email"
                            v-slot="{ errors }"
                          >
                            <div class="login-single-field">
                              <label>Email:</label>
                              <input
                                type="email"
                                placeholder="Enter Email"
                                name="register_email"
                                v-model="loginFields.register_email"
                              />
                              <span>{{ errors[0] }}</span>
                            </div>
                          </ValidationProvider>
                         <ValidationProvider
                            name="Password"
                            rules="required|min:3|max:16"
                            v-slot="{ errors }"
                          >
                            <div class="login-single-field">
                              <label>Password:</label>
                              <input
                                type="password"
                                placeholder="Enter Password"
                                name="register_pswd"
                                v-model="loginFields.register_pswd"
                                title="Minimun 3 and maximum 16 characters long"
                              />
                              <span>{{ errors[0] }}</span>
                            </div>
                          </ValidationProvider>
                      </div>
                      <div class="login-footer">
                        <!-- <router-link to="/forgot-password" class="forgot">Forgot Password</router-link> -->
                        <button>Login</button>
                      </div>
                    </div>
                  </form>
                  </ValidationObserver>
                </div>
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
  name: "Login",
  data() {
    return {
      axios: require("axios"),
      signupFields: {
        register_name: "",
        register_email: "",
        register_pswd: "",
        acceptTerms: null,
      },
      loginFields: {
        register_email: "",
        register_pswd: "",
      }
    };
  },
  methods: {
    signup() {
      const data = new FormData(this.$refs.formHTML);
      console.log(data);
      this.axios
        .post(
          "https://dev73.myprojectstaging.com/oread-health/web/register_api",
          data
        )
        .then((response) => {
          const status = response.data.Status;
          console.log(status);
          console.log("Result", response.data);
          if(status == '200'){
            this.$router.push('/');
          }
          else if(status == '400') {
            alert('Bad Request. Server issue occured.')
          }
          else if(status == '422') {
            alert(response.data.Message.register_email)
          }
        })
        .catch((error) => {
          console.log("Error", error);
        });
    },
    login() {
      const data = new FormData(this.$refs.formLogin);
      this.axios
        .post(
          "https://dev73.myprojectstaging.com/oread-health/web/login_api",
          data
        )
        .then((response) => {
          const status = response.data.Status;
          console.log("Result", response);
          if(status == '200'){
            localStorage.setItem('UserID', response.data.Message.UserID);
            localStorage.setItem('UserToken', response.data.Message.UserToken);
            this.$router.push('/categories');
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
        })
        .catch((error) => {
          if(error) {
            alert('Login Invalid')
          }
          console.log("Error", error);
          // alert(error)
        });
    },
  },
};
</script>

<style scoped>
.login-sec-1 {
  padding: 40px 0;
  margin-bottom: 70px;
}
.login-inner-wrap {
  background: #f4f4f4;
  max-width: 450px;
  margin: 0 auto;
  padding: 10px 30px;
  border-radius: 5px;
  min-height: 540px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 0 6px rgba(2, 3, 3, 0.1);
}
.login-header {
}
.login-header h3 {
  text-align: center;
  font-size: 22px;
  color: #000;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 5px;
}
.login-body {
}
.login-single-field {
  margin-bottom: 10px;
}
.login-single-field label {
  color: #000;
  font-size: 14px;
  line-height: 1.2;
  margin-bottom: 5px;
  font-weight: 500;
  font-family: Poppins, sans-serif;
}
.login-single-field input {
  width: 100%;
  background: #fff;
  border: none;
  height: 35px;
  padding: 0 10px;
  box-shadow: 0 0 6px rgba(2, 3, 3, 0.1);
  font-size: 14px;
  color: #000;
  font-family: Poppins, sans-serif;
}
.login-single-field span, .login-footer span{
  font-size: 12px;
  color: red;
  margin-top: 3px;
}
.login-footer {
  margin-top: 30px;
}
.login-footer button {
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
}
.login-footer label {
  font-size: 14px;
  font-family: Poppins, sans-serif;
  color: #000;
  line-height: 1.2;
  margin-bottom: 10px;
}
.member-agree {
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  margin: 10px 0;
  color: #000;
}
.forgot {
  display: block;
  font-size: 14px;
  margin-bottom: 10px;
  text-align: left;
}

/*login*/

.login-sec-1 h6 {
  text-align: center;
  padding-bottom: 10px;
}
.login-sec-1 h6 span {
  padding: 0 20px;
  font-weight: 700;
  color: #d82c2c;
  font-size: 22px;
}
.login-sec-1 .change {
  position: absolute;
  left: -9999px;
}
.login-sec-1 .checkbox + label {
  position: relative;
}
.login-sec-1 .checkbox:checked + label,
.login-sec-1 .checkbox:not(:checked) + label {
  position: relative;
  display: block;
  text-align: center;
  width: 50px;
  height: 10px;
  border-radius: 8px;
  padding: 0;
  margin: 10px auto;
  cursor: pointer;
  background-color: #d82c2c;
}
.login-sec-1 .checkbox:checked + label:before,
.login-sec-1 .checkbox:not(:checked) + label:before {
  display: block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #000;
  position: absolute;
  content: "";
  z-index: 20;
  top: -7px;
  left: -10px;
  transition: all 0.5s ease;
}
.login-sec-1 .checkbox:checked + label:before {
  transform: translateX(44px) rotate(-540deg);
}
.login-sec-1 .card-3d-wrap {
  position: relative;
  width: 440px;
  max-width: 100%;
  height: 400px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  perspective: 800px;
  margin-top: 100px;
}
.login-sec-1 .card-3d-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: all 600ms ease-out;
}
.login-sec-1 .card-front,
.card-back {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 300%;
  position: absolute;
  border-radius: 0;
  left: 0;
  top: 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}
.login-sec-1 .card-back {
  transform: rotateY(180deg);
}
.login-sec-1 .checkbox:checked ~ .card-3d-wrap .card-3d-wrapper {
  transform: rotateY(180deg);
}
.login-sec-1 .center-wrap {
  position: absolute;
  width: 100%;
  padding: 0 35px;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 35px) perspective(100px);
  z-index: 20;
  display: block;
}
</style>