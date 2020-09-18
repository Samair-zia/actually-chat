<template>
  <div class="pivacy">
    <section class="p-sec-1">
      <div class="container">
        <h2>Privacy Policy</h2>
      </div>
    </section>
    <section class="privacy-sec">
      <div class="container">
        <!-- <ul class="privacy-text-wrap">
          <li v-for="(privacyText, index) in privacyTexts" :key="index">{{ privacyText.PrivacyText }}</li>
        </ul> -->
        <div class="privacy-text-wrap">
          <h3>Registration Information</h3>
          <p>To register to become a member for Actually Health Chat (our Website), you will need to provide certain personal information including your name, telephone number and email address.  Please create a username and password to access your account.  You are responsible for ensuring the accuracy of the personal information that you submit to our Website. Personal information will be kept confidential. Only the username will appear in the members’ space when chatting with other members.  So please don’t use your full name as your username.</p>
          <h3>Device Information</h3>
          <p>Please refer to our <router-link to="/cookie-policy">Cookie Policy</router-link> regarding what device information is collected when you use our website and how the Device Information will be used.</p>
          <h3>Use of Your Information</h3>
          <ul>
            <li>To administer your account, to respond to your inquiries and to send you administrative communications about our Website and services.</li>
            <li>To obtain your feedback about our Website and services.</li>
            <li>To detect and defend against fraud and other threats to our Website and our members. </li>
            <li>To identify issues with our Website and services.</li>
          </ul>
          <h3>Research Survey</h3>
          <p>From time to time, Actually Health Chat may conduct online research surveys through email invitations or pop-up surveys. When participating in a survey, we may require you to provide your location and age. The information you submit in a survey may be used by Actually Health Chat for research, including to determine the effectiveness of content and advertising. Market research surveys conducted by or on behalf of Actually Health Chat will contain a link to this Privacy Policy.</p>
          <h3>Third Party Companies</h3>
          <p>Actually Health Chat works with third party companies and contractors that help us to provide the services or assist us in the operation of our Websites, including those that provide technology, data analysis, email management, advertising, marketing and content.  Our contractors sometimes have limited access to our members’ personal information in the course of providing services to our Website. We contractually require that our contractors not use or disclose our members’ personal information for any purpose other than providing the services for our Website.</p>
          <h3>Third Party Advertisers and Third Party Websites</h3>
          <p>Certain content shared in the members’ space on the Website contain links to websites operated by a company other than Actually Health Chat ("Third Party Websites"). We do not share your personal information with these Third Party Websites, but you should be aware that any information you disclose to these Third Party Websites once you access these Third Party Websites is not subject to this Privacy Policy. We are not responsible for the privacy practices of these Third Party Websites. You should review the privacy policy posted on the Third Party Website to understand how that Third Party Website collects and uses your information.  </p>
          <h3>Compliance with Regulation and Law Enforcement Requests</h3>
          <p>To cooperate with government law enforcement officials and private parties to comply with law, we may release members’ personal information to third parties: to comply with legal requirements.</p>
          <h3>How Members’ Personal Information is Secured</h3>
          <p>We take reasonable security measures to protect our members’ personal information. When personal information is entered during registration, we encrypt the transmission of that information or use SSL (Secure Socket Layer) connections technology.</p>
          <p>Despite our efforts, there is always some risk that an unauthorized third party may find a way around our security systems or that transmissions of members’ personal information over the Internet may be intercepted.</p>
          <p>We will retain your personal information as long as your account is active or as needed to provide you Services. At any time you can remove your personal information or instruct us to remove it, but you should be aware that it is not technologically possible to remove each and every record of the information you have provided to Actually Health Chat from our servers. </p>
          <h3>Updating/Removing Members Personal Information</h3>
          <p>If any registered member desires to terminate his/her membership and delete his/her registration information, please contact us using the contact information listed at the Website. Upon your request, we will delete your registration information from our databases and where feasible from our back-up database. You should be aware that it is not technologically possible to remove every record of the information you have provided to the Website from our servers.</p>
          <p><b>Last updated: September 1, 2020.</b></p>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Privacy',
  data(){
    return{
      // axios: require('axios'),
      // privacyTexts: []
    }
  },
  // mounted(){
  //   this.axios.get(process.env.VUE_APP_APIURL + 'privacy_api')
  //   .then((response) => {
  //     const res = response.data.Message.Privacy;
  //     this.privacyTexts = res; 
  //     console.log(res)
  //   })
  //   .catch((error) => {
  //     console.log('Error', error)
  //   })
  // }
}
</script>

<style scoped>
.p-sec-1{
  min-height: 140px;
  background: #f4f4f4;
  display: flex;
  align-items: center;
}
.p-sec-1 h2{
  font-size: 24px;
  font-weight: 700;
  color: #000;
  line-height: 1.2;
  margin-bottom: 15px;
  text-transform: uppercase;
  position: relative;
}
.p-sec-1 h2::before{
  content: '';
  position: absolute;
  height: 3px;
  width: 30px;
  background-image: linear-gradient(to top, #ac0000, #c00000, #d40000, #e80000, #fd0000);
  bottom: -4px;
  left: 0;
}
.privacy-sec{
  padding: 80px 0;
}
.privacy-text-wrap{
  /* max-width: 800px; */
  /* padding-left: 20px; */
}
.privacy-text-wrap ul{
  padding-left: 20px;
}
.privacy-text-wrap li{
  position: relative;
  padding-left: 2px;
  margin-bottom: 5px;
  font-size: 14px;
  color: #000;
  line-height: 1.5;
}
.privacy-text-wrap li::before{
  content: '';
  height: 10px;
  width: 10px;
  display: inline-block;
  position: absolute;
  top: 5px;
  left: -15px;
  border-radius: 50%;
  background-image: linear-gradient(to top, #ac0000, #c00000, #d40000, #e80000, #fd0000);
}
.privacy-text-wrap h3{
  font-size: 18px;
  font-weight: 500;
  font-family: Poppins,sans-serif;
  margin-bottom: 5px;
  color: #000;
  margin-top: 10px;
}
.privacy-text-wrap p{
  font-size: 14px;
  color: #000;
  margin-bottom: 5px;
}
</style>