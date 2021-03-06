import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//import font-awesome and icons
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faThermometerHalf,
  faLocationArrow,
  faWind,
  faWater,
  faSun,
  faLongArrowAltUp,
  faLongArrowAltDown,
  faClock,
  faCalendarAlt,
  faMoon
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
//import weather icon
import 'weather-icons-lite/css/weather-icons-lite.css';
//import transition animations
import 'vue2-animate/dist/vue2-animate.min.css';
import 'font-awesome/css/font-awesome.min.css';
//import notifications for errors
import Notifications from 'vue-notification';

//leaflet, fix icon issue
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
//import bulma
require('./assets/main.scss');
//add font-awesome icon libraries
library.add(faSearch);
library.add(faThermometerHalf);
library.add(faLocationArrow);
library.add(faWind);
library.add(faWater);
library.add(faSun);
library.add(faLongArrowAltUp);
library.add(faLongArrowAltDown);
library.add(faClock);
library.add(faCalendarAlt);
library.add(faMoon);

Vue.config.productionTip = false;
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(Notifications);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
