<template>
  <div class="pivacy">
    <section class="p-sec-1">
      <div class="container">
        <h2>Privacy Policy</h2>
      </div>
    </section>
    <section class="privacy-sec">
      <div class="container">
        <ul class="privacy-text-wrap">
          <li v-for="(privacyText, index) in privacyTexts" :key="index">{{ privacyText.desc }}</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Privacy',
  data(){
    return{
      privacyTexts: [
        { desc: `Members' registration information (full name, phone number and email address) will be kept confidential and not going to be used for any other purpose.` },
        { desc: `Only the Username will appear to other members when posting a question or sharing health information. Members should only share the information they feel comfortable to share.` },
        { desc: `The shared content will be kept in the members' database and only members can access. Relevant information can be searched by key words.` },
        { desc: `No third party will gather any information about members through the use of this website or sharing information.` },
        { desc: `May release personal information to comply with Law if required by law enforcement agency.` },
        { desc: `Children under 13 should not become a member to this website.` }
      ]
    }
  }
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
  max-width: 800px;
  padding-left: 20px;
}
.privacy-text-wrap li{
  position: relative;
  padding-left: 2px;
  margin-bottom: 10px;
  font-size: 16px;
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
</style>