<template>
  <div>
    <transition
      name="bounce"
      enter-active-class="bounceInLeft"
      leave-active-class="bounceOutRight"
    >
      <div v-if="!isActive">
        <div class="box" id="round-corners">
          <p class="label is-size-3 pt-3" v-if="cityData[0].state">
            <font-awesome-icon icon="location-arrow" />
            {{ cityData[0].name }}, {{ cityData[0].state }}
          </p>
          <p class="label is-size-3 pt-3" v-else>
            <font-awesome-icon icon="location-arrow" />
            {{ cityData[0].name }},
            {{ cityData[0].country }}
          </p>

          <p class="is-size-4 has-text-weight-semibold capitalize">
            {{ getWeather[0].description }}
          </p>
          <p class="is-size-4 has-text-weight-semibold">
            <font-awesome-icon icon="thermometer-half" />
            {{ Math.round(currentWeather.main.temp) }}{{ formatUnits }}
          </p>
          <div id="icon">
            <i
              :style="{ color: randomColor() }"
              :class="`wi wi-owm-${getWeather[0].icon}`"
            ></i>
          </div>
          <p class="has-text-weight-semibold">
            <font-awesome-icon icon="wind" />
            Wind: {{ Math.round(currentWeather.wind.speed) }} Mph
          </p>
          <p class="has-text-weight-semibold">
            <font-awesome-icon icon="water" /> Humidity:
            {{ currentWeather.main.humidity }}%
          </p>
          <p class="has-text-weight-semibold">
            <font-awesome-icon icon="sun" />
            <font-awesome-icon icon="long-arrow-alt-up" /> Sunrise:
            {{ formatTime(currentWeather.sys.sunrise) }}
          </p>
          <p class="pb-2 has-text-weight-semibold">
            <font-awesome-icon icon="sun" />
            <font-awesome-icon icon="long-arrow-alt-down" />
            Sunset:
            {{ formatTime(currentWeather.sys.sunset) }}
          </p>
          <button class="button is-link is-small" @click="toggleForecast">
            Show Forecast
          </button>
        </div>
      </div>
    </transition>
    <forecast
      :isActive="isActive"
      :forecastWeather="forecastWeather"
      :unitSelected="unitSelected"
      :cityData="cityData"
    />
  </div>
</template>

<script>
import Forecast from './Forecast.vue';

export default {
  name: 'CurrentConditions',
  components: {
    Forecast
  },
  props: {
    isActive: {
      type: Boolean,
      default: () => {
        false;
      }
    },
    forecastWeather: {
      type: Object,
      default: () => {}
    },
    currentWeather: {
      type: Object,
      default: () => {}
    },
    unitSelected: {
      type: String,
      default: () => ''
    },
    cityData: {
      type: Array,
      default: () => {
        [];
      }
    }
  },

  methods: {
    toggleForecast() {
      this.$store.dispatch('toggleForecast');
    },
    randomColor() {
      return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
    },
    formatTime(time) {
      return new Date(time * 1000).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  },
  computed: {
    formatUnits() {
      if (this.unitSelected === 'imperial') {
        return '°F';
      } else {
        return '°C';
      }
    },
    getWeather() {
      return this.currentWeather.weather.map((item) => item);
    },
    getForecast() {
      return this.forecastWeather.list;
    }
  }
};
</script>

<style scoped>
.capitalize {
  text-transform: capitalize;
}
#round-corners {
  border-radius: 2em;
}
#icon {
  font-size: 256px;
}
</style>
