import Vue from 'vue';
import VueRouter  from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.config.debug = true;

Vue.use(VueRouter,VueResource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

