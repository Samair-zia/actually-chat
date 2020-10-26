<template>

<!-- working with filter search  -->
  <div class="category">
    <div class="container">
      <h3>Categories</h3>
      <input type="search" v-model="searchedCategory" @input="filterCategories">
      <div class="category-wrapper">
        <router-link
          class="single-category"
          :class="
          [
            (category.CategoryName.search('COVID') === -1 ? '' : 'covid-category'), 
            (category.CategoryName.search('Acupuncture') === -1 ? '' : 'acupuncture-category'),
            (category.CategoryName.search('COPD') === -1 ? '' : 'copd-category'),
            (category.CategoryName.search('Herbal Medicine') === -1 ? '' : 'hm-category'),
            (category.CategoryName.search('Miscellaneous Topics') === -1 ? '' : 'mt-category'),
            (category.CategoryName.search('Vitamins and Supplements') === -1 ? '' : 'vas-category'),
            (category.CategoryName.search('Yoga and massage therapy') === -1 ? '' : 'yamt-category'),
          ]"
          :to="{ name: 'Discussion', params: { id: category.CategoryId } }"
          v-for="category in filteredCategories"
          :key="`category-${category.CategoryId}`"
          >{{ category.CategoryName }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: {
    categories: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      searchedCategory: '',
      filteredCategories: [],
    };
  },
  watch: {
    categories() {
      this.filterCategories();
    },
  },
  methods: {
    filterCategories() {
      this.filteredCategories = this.categories.filter(category => category.CategoryName.toLowerCase().search(this.searchedCategory) !== -1);
    },
  },
};
</script>

<style scoped>
.category {
  padding: 70px 0;
}
.category h3 {
  font-size: 24px;
  font-weight: 700;
  color: #282828;
  line-height: 1.2;
  margin-bottom: 25px;
}
.category-wrapper {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-height: 440px;
}
.single-category {
  font-family: "Poppins", sans-serif;
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
  text-transform: capitalize;
  transition: all 0.3s ease-in-out;
}
.single-category::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    to top,
    #ac0000,
    #c00000,
    #d40000,
    #e80000,
    #fd0000
  );
  width: 100%;
  height: 0;
  z-index: -1;
  transition: all 0.3s ease-in-out;
}
.single-category:hover::before {
  height: 100%;
}
.single-category:hover {
  color: #fff;
}
.covid-category{
  background:linear-gradient(
    to top,
    #ac0000,
    #c00000,
    #d40000,
    #e80000,
    #fd0000
  );
  font-weight: 600;
  color: #fff;
}
.acupuncture-category{
  color: #0070c0;
  font-weight: 600;
}
.copd-category{
  color: #ff0000;
  font-weight: 600;
}
.hm-category{
  color: #00b050;
  font-weight: 600;
}
.mt-category{
  color: #ff33cc;
  font-weight: 600;
}
.vas-category{
  color: #00b0f0;
  font-weight: 600;
}
.yamt-category{
  color: #ff9900;
  font-weight: 600;
}

@media only screen and (max-width:575px) {
  .category h3 {
    text-align: center;
    margin-bottom: 15px;
  }
  .category-wrapper {
    flex-wrap: nowrap;
    max-height: 100%;
  }
}
</style>