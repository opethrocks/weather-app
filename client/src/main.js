import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bulma/css/bulma.css';
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
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'weather-icons-lite/css/weather-icons-lite.css';
import 'vue2-animate/dist/vue2-animate.min.css';
import 'font-awesome/css/font-awesome.min.css';

//leaflet, fix icon issue
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

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

Vue.config.productionTip = false;
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
