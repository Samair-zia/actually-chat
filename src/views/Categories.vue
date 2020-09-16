<template>
  <div class="categories">
    <Category :categories="categoryList"/>
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
      next(vm => {
        vm.$emit('loggedIn');
        vm.categoryList = [ ...response.data.Message.Category ];
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