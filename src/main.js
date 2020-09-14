import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'bootstrap';
import 'popper.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// validation plugin
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver } from 'vee-validate'

window.$ = window.jQuery = require('jquery');

import './assets/css/style.css';

library.add(fas, fab, far);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.config.productionTip = false;

new Vue({
  mounted() {
    AOS.init({ disable: "phone" });
  },
  router, store,
  render: h => h(App)
}).$mount('#app');
