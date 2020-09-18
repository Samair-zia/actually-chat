<template>
  <div class="pivacy">
    <section class="p-sec-1">
      <div class="container">
        <h2>Members Agreement</h2>
      </div>
    </section>
    <section class="privacy-sec">
      <div class="container">
        <div class="privacy-text-wrap">
          <h3>Members’ Agreement (Terms of Use):</h3>
          <p>In this Agreement, Actually Health Chat (including its founders, advisors, shareholders, consultants and management team) is referred as the Website.  The registered Members of Actually Health Chat are referred as the Members.</p>
          <p>The Website may update the Members’ Agreement from time to time.  The Members will be notified when updates occur and what are the updates. A Member’s continued use of the website will mean the Member accept the updates. </p>
          <p>1.	The contents shared at the Website by the Members (after Log in) are only for information purpose.  The contents are not meant to replace medical experts’ advices or treatments. <b> Please see your medical doctor if you have a medical condition. If you have a medical emergency, call your doctor or 911 immediately.</b></p>
          <p>2.	The Members’ registration information (names, email address and phone numbers) are protected under Privacy Policy.</p>
          <p>3. <b>Sharing Information:</b> Members can post questions, share and exchange information on various aspects of health conditions and health care.  Information such as symptoms, treatments, medicines, medical devices, health care providers and facilities based on their own experiences (or experiences of their family members and friends) can be shared. Information from credible sources including news reports, publications and books may also be discussed. Members should make reasonable amount of efforts to provide accurate and complete information.</p>
          <p>Shared information can contain links to other credible websites including but not limited to Linkedin, Facebook, tweeter, Instagram.  When posting the links, make sure to comply to the terms and conditions of these websites, including their privacy policies.</p>
          <p>Actually Health Chat reserves the right to remove any content that violates this Members’ Agreement at any time, without prior notice, at its sole discretion.</p>
          <p>4. <b>	Use of the contents:</b>  The contents shared at the Website are protected by the Copyright Law of the US and other countries.  The contents can only be used for personal use by the Members and not for non-members’ nor commercial use.</p>
          <p>5.	<b>Rules:</b></p>
          <p class="pl-3">1)	Do not post any personal identifiable information (name, phone number or email address). </p>
          <p class="pl-3">2)	Do not post any content that contains expressions of hate, abuse, pornography, offense, sexually explicit or any material that could lead to any civil or criminal liability under applicable law or regulations.</p>
          <p class="pl-3">3)	When posting photos, videos or audios, they should be taken by yourself or you have all the rights without violating any copyright or trademarks or privacy of another person or business.</p>
          <p class="pl-3">4)	Do not upload any content that could contain computer viruses or any code, files or programs designed to interrupt or damage the functionality of any computer software.</p>
          <p class="pl-3">5)	Do not post advertisements or solicitations of business.</p>
          <p class="pl-3">6)	Do not post chain letters or pyramid schemes.</p>
          <p class="pl-3">7)	Do not Impersonate another person.</p>

          <p>6. <b>Children’s’ Privacy:</b>  Members for this Website should not be younger than 13.  </p>
          <p>7. <b>Liability:</b> The use of the Website and the content is at the risk of each member.  The Website and the Members are not liable for the content shared in the Members’ space.  The Website does not provide any warranty on reliability and timeliness of the contents.  In no event, the Website and the Members are liable for any possible damages caused from using the content.</p>
          <p>8. <b>Indemnity:</b> Each Member agrees to defend, indemnify, and keep the Website harmless from any claims, actions, liabilities including without limitation, legal fees, alleged to result from his or her use of the Site.</p>
          <p>9. <b>General:</b> The following provisions outlast the expiration of this Agreement for any reason that may occur: Rules, Liability, Indemnity, Jurisdiction.</p>
          <p>10. <b>Jurisdiction</b> <br>Members agree that exclusive jurisdiction for any dispute with the Website, or in any way relating to the use of the Website, resides in the courts of the State of Delaware. </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Agreement',
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