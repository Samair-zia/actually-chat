import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'jquery';

window.$ = window.jQuery = require('jquery');

import 'bootstrap';
import 'popper.js';
import 'summernote';
import 'summernote/dist/summernote-bs4';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// validation plugin
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver } from 'vee-validate'

// editor
import wysiwyg from "vue-wysiwyg";
Vue.use(wysiwyg, {
  hideModules: { 
    "image": true,
    "table": true,
    "justifyLeft": true,
    "justifyCenter": true,
    "justifyRight": true,
    "separator": true,
  },
});

import './assets/css/style.css';

library.add(fas, fab, far);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.config.productionTip = false;

new Vue({
  mounted() {
    AOS.init({ disable: "mobile" });
  },
  router, store,
  render: h => h(App)
}).$mount('#app');
