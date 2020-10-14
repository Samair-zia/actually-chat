<template>
  <div class="categories">
    <Category :categories="categoryList" :cateId="catId"/>
  </div>
</template>

<script>
import Category from '@/components/Category.vue'

export default {
  name: 'Categories',
  components: {
    Category
  },
  data(){
    return{
      axios: require('axios'),
      categoryList: [],
      catId: [],
    }
  },
  beforeRouteEnter(to, from, next) {
    const data = new FormData();
    data.append('register_id', localStorage.getItem('UserID'));
    require('axios').post(process.env.VUE_APP_APIURL + 'category_api', data, {
      headers: {
        'token': localStorage.getItem('UserToken'),
      }
    })
    .then((response) => {
      // console.log(response)
      // console.log(response.data.Message.Category[])
      next(vm => {
        vm.$emit('loggedIn');
        vm.categoryList = [ ...response.data.Message.Category ];
        vm.categoryList.forEach(element => {
          localStorage.setItem(`Category-${element.CategoryId}`, element.CategoryId);
        });
        // console.log(localStorage.getItem('Category-2'));
        // console.log("blahh",vm.categoryList[1].CategoryId)
        
        vm.catId = vm.categoryList[0].CategoryId;
      });
    })
    .catch((error) => {
      console.log('Error', error);
      localStorage.removeItem('UserID');
      localStorage.removeItem('UserToken');
      next({ name: 'Login' });
    });
  }
}
</script>

<style scoped>

</style>