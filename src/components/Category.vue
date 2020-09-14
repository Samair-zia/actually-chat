<template>
  <div class="category">
    <div class="container">
      <h3>Categories</h3>
      <div class="category-wrapper">
        <router-link class="single-category" to="/" v-for="(category, index) in categories" :key="index">{{ category.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  data(){
    return{
      categories: [
        { name: 'COVID-19' },
        { name: 'ADHD' },
        { name: 'Allergies' },
        { name: 'Alzheimer’s Disease' },
        { name: 'Anxiety' },
        { name: 'Arthritis' },
        { name: 'Autism' },
        { name: 'Cancers' },
        { name: 'Cataract' },
        { name: 'Depression' },
        { name: 'Diabetes' },
        { name: 'Dry eye' },
        { name: 'Dyslexia' },
        { name: 'Gastric Acid Reflux Disease' },
        { name: 'Glaucoma' },
        { name: 'Heart Disease' },
        { name: 'Hearing Loss and Tinnitus' },
        { name: 'Herbal Medicine and Acupuncture' },
        { name: 'High Blood Pressure' },
        { name: 'High Cholesterol or Triglycerides' },
        { name: 'HIV and AIDS' },
        { name: 'Hyperbaric Oxygen Therapy' },
        { name: 'Kidney Disease' },
        { name: 'Knee, Hip and other Joint Problems' },
        { name: 'Migraine' },
        { name: 'Parkinson Diseases' },
        { name: 'Sinusitis' },
        { name: 'Sleep Disorder' },
        { name: 'Urinary tract (bladder) infections' },
        { name: 'Vaccination' },
        { name: 'Yoga and massage therapy' },
        { name: 'Miscellaneous diseases' },
        { name: 'Medical Devices' },
      ]
    }
  }
}
</script>

<style scoped>
.category{
  padding: 70px 0;
}
.category h3{
  font-size: 24px;
  font-weight: 700;
  color: #282828;
  line-height: 1.2;
  margin-bottom: 25px;
}
.category-wrapper{
  display: flex;
  flex-wrap: wrap;
}
.single-category{
  font-family: 'Poppins', sans-serif;
  display: inline-block;
  background: #f4f4f4;
  color: #000;
  min-width: 110px;
  margin-right: 10px;
  padding: 7px 12px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease-in-out;
}
.single-category::before{
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(to top, #ac0000, #c00000, #d40000, #e80000, #fd0000);
  width: 100%;
  height: 0;
  z-index: -1;
  transition: all 0.3s ease-in-out;
}
.single-category:hover::before{
  height: 100%;
}
.single-category:hover{
  color: #fff;
}
</style>