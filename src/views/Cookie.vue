<template>
  <div class="pivacy">
    <section class="p-sec-1">
      <div class="container">
        <h2>Cookie Policy</h2>
      </div>
    </section>
    <section class="privacy-sec">
      <div class="container">
        <div class="privacy-text-wrap">
          <h3>Actually Health Chat Cookie Policy</h3>
          <p>This Cookie Policy describes how your personal information is collected, used, and shared when you visit Actually Health Chat website (“our Website”).</p>
          <h3>INFORMATION WE COLLECT</h3>
          <p>When you visit our Website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse our Website, we collect information about the individual web pages, what websites or search terms referred you to our Website, and information about how you interact with our Website. We refer to this automatically-collected information as “Device Information.”</p>
          <p>We collect Device Information using the following technologies:</p>
          <p>- “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit <a href="http://www.allaboutcookies.org.">http://www.allaboutcookies.org.</a></p>
          <p>- Web beacons are electronic files used to record information about how you browse our Website.</p>
          <h3>HOW DO WE USE THE DEVICE INFORMATION?</h3>
          
          <p>We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Website (for example, by generating analytics about how our visitors and members browse and interact with our Website, and to assess the success of our marketing and advertising campaigns). Additionally, we use Device Information for advertising purposes.</p>
          <h3>SHARING THE DEVICE INFORMATION</h3>
          <p>We share the device information with third parties to help us use these Information, as described above.</p>
          <p>We use Google Analytics, which may in turn place cookies that are used for things like behavioral advertising, reporting, analytics, and/or market research:</p>
          <p><b>Reporting & Analytics:</b></p>
          <table class="table table-bordered table-sm mb-3">
            <tr>
              <th>Third Party</th>
              <th>Description</th>
              <th>Privacy Policy</th>
            </tr>
            <tr>
              <td>Google Analytics</td>
              <td>We use Google Analytics to help measure how users interact with our Websites.</td>
              <td><a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a></td>
            </tr>
          </table>

           <p><b>Social Media & Content:</b></p>
          <table class="table table-bordered table-sm mb-3">
            <tr>
              <th>Third Party</th>
              <th>Description</th>
              <th>Privacy Policy</th>
            </tr>
            <tr>
              <td>YouTube</td>
              <td>We use Youtube to display video content.</td>
              <td><a href="https://policies.google.com/privacy?hl=en-US">https://policies.google.com/privacy?hl=en-US</a></td>
            </tr>
          </table>
          <p>Finally, we may also share the device Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>
          <p>Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at: <a href="http://optout.aboutads.info/">http://optout.aboutads.info/</a>.</p>
          <h3>DO NOT TRACK</h3>
          <p>Please note that we do not alter our Website’s data collection and use practices when we see a Do Not Track signal from your browser.</p>
          <h3>YOUR RIGHTS</h3>
          <p>If you are a European resident, you have the right to access the collected information we hold about you and to ask that the collected information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.</p>
          <h3>CHANGES</h3>
          <p>We may update this cookie policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>
          <h3>CONTACT US</h3>
          <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:info@actuallyhc.com">info@actuallyhc.com</a>.</p>
          <p><b>Last updated: Aug 26, 2020.</b></p>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Cookie',  
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
.privacy-text-wrap tr{
  font-size: 12px;
}
</style>