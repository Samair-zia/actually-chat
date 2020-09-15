<template>
  <section class="team-sec">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-6 col-md-6 col-lg-6 mb-5" v-for="(member , index) in members" :key="index">
          <div class="single-member-wrap" data-aos="fade-down" data-aos-duration="1800">
            <div class="sm-img-wrap">
              <img :src="member.TeamMemberImage" class="img-fluid" alt="">
              <div class="sm-img-inner">
                <h3>{{ member.TeamMemberName }}</h3>
                <h5>{{ member.TeamMemberDesignation }}</h5>
              </div>
            </div>
            <div class="sm-desc">
              <p v-html="member.TeamText"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OurTeam',
  data(){
    return{
      axios: require("axios"),
      members: [
        // { 
        //   name: `Sara Wu`,
        //   designation: `Ph.D, CEO and Founder`,
        //   desc: `Sara, trained as a medicinal and pharmaceutical chemist, has been working in the pharmaceutical industry for more than 20 years on drug product formulation development and manufacturing. In her career in pharmaceutical development, Sara was involved or made significant contributions to the development of a couple of cancer drugs that were approved and are being used to treat patients. She also worked on other drugs’ development that maybe approved in the future. <br><br> With a strong passion and vision, Sara truly believes Actually Health Chat will benefit people around the world in helping them to make better decisions related to their health care.`,
        //   img: require('@/assets/images/team-img-1.jpg') 
        // },
        // { 
        //   name: `Prabhavathi Fernandes`,
        //   designation: `Ph.D. Co-Founder and Chief Scientific Advisor`,
        //   desc: `Prabha has over 40 years of experience in the health care field. She has held leadership positions in major pharmaceutical companies in the U.S. and has founded and led biotechnology companies. During these years she has developed several pharmaceutical products that are currently marketed. She is currently the Chair of the National Biodefense Science Board (NBSB), and Chair of the Global Research and Development Partnership (GARDP, Geneva) and Member of NIH Accelerating COVID-19 Therapeutic Interventions and Vaccines (ACTIV). She is a Director of three public and private biotechnology companies in the US and Europe. <br><br> Health Care and staying well has been a passion for her over her lifetime. She looks forward to learning and sharing knowledge and experiences in Actually Health Chat to contribute to the health and well being of the community.`, 
        //   img: require('@/assets/images/aa.jpg') 
        // },
        // { 
        //   name: `Klaus Larres`,
        //   designation: `Ph.D, Advisor for Global Public Relations`,
        //   desc: `Prof. Larres is the Richard M. Krasno Distinguished Professor of History and International Affairs at the University of North Carolina in Chapel Hill, NC. Prof. Larres directs the Krasno Global Affairs and Business Council and is in charge of the Krasno Events Series.  Prof. Larres focuses on the foreign, economic and security policies of the U.S., China, Germany and the EU.  He has published widely on all of the above research themes. He frequently gives interviews to the global media and is often consulted by media organizations & think tanks and international businesses. He has recently served as a Counselor and Senior Policy Adviser at the German Embassy in Beijing, China. He is a Distinguished Visiting Professor at the Indian Institute of Technology in Mumbai, India. He has also been asked to serve on the 'International Board'of the Bundeskanzler-Willy-Brandt-Stiftung in Berlin.`, 
        //   img: require('@/assets/images/bb.jpg'),
        // }
      ]
    }
  },
  mounted() {
    this.axios
      .get("https://dev73.myprojectstaging.com/oread-health/web/teampage_api")
      .then((response) => {
        this.members = response.data.Message.Team;
        const res = response.data.Message.Team;
        console.log(res);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  },
}
</script>

<style scoped>
.team-sec{
  padding: 30px 0;
}
.single-member-wrap{
  background: #f4f4f4;
  height: 100%;
  border: 1px solid #efefef;
  border-radius: 5px;
}
.sm-img-wrap{
  display: flex;
  align-items: center;
}
.sm-img-wrap img{
  max-width: 170px;
}
.sm-img-inner{
  margin-left: 20px;
}
.sm-desc{

}
.sm-img-wrap h3{
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: #b90000;
  line-height: 1.2;
}
.sm-img-wrap h5{
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #000;
  line-height: 1.2;
}
.sm-desc p{
  color: #000;
  font-size: 14px;
  padding: 25px;
  line-height: 2;
}
</style>