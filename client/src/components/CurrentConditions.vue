<template>
  <div>
    <!---show box for conditions --->
    <div v-if="!isActive" style="animation-duration: 1s">
      <div class="box" id="round-corners">
        <!--show state abbreviation and fa icon-->
        <p class="label is-size-3 pt-3 is-small" v-if="cityData.state">
          <font-awesome-icon icon="location-arrow" />
          {{ cityData.name }}, {{ cityData.state }}
        </p>
        <!--show country abbreviation and fa icon-->
        <p class="label is-size-3 pt-3" v-else>
          <font-awesome-icon icon="location-arrow" />
          {{ cityData.name }},
          {{ cityData.country }}
        </p>
        <!--current weather description-->
        <p class="is-size-4 has-text-weight-semibold capitalize">
          {{ getWeather[0].description }}
        </p>
        <!--current temperature and fa icon-->
        <p class="is-size-4 pb-2 has-text-weight-semibold">
          <font-awesome-icon icon="thermometer-half" />
          {{ Math.round(currentWeather.main.temp) }}{{ formatUnits }}
        </p>
        <!--forecast toggle button-->
        <button
          class="button is-rounded is-small is-warning"
          @click="toggleForecast"
        >
          Show Forecast
        </button>
        <!--weather icon in random colors-->
        <div id="icon">
          <i
            :style="{ color: randomColor() }"
            :class="`wi wi-owm-${getWeather[0].icon}`"
          ></i>
        </div>
        <!--format and display wind speed and fa icon-->
        <p class="has-text-weight-semibold">
          <font-awesome-icon icon="wind" />
          Wind: {{ Math.round(currentWeather.wind.speed) }} Mph
        </p>
        <!--show humidity and fa icon-->
        <p class="has-text-weight-semibold">
          <font-awesome-icon icon="water" /> Humidity:
          {{ currentWeather.main.humidity }}%
        </p>
        <!--show sunrise time and fa icon-->
        <p class="has-text-weight-semibold">
          <font-awesome-icon icon="sun" />
          <font-awesome-icon icon="long-arrow-alt-up" /> Sunrise:
          {{ formatTime(currentWeather.sys.sunrise) }}
        </p>
        <!--show sunset and fa icon-->
        <p class="pb-2 has-text-weight-semibold">
          <font-awesome-icon icon="sun" />
          <font-awesome-icon icon="long-arrow-alt-down" />
          Sunset:
          {{ formatTime(currentWeather.sys.sunset) }}
        </p>
      </div>
    </div>
    <!--show fa animation when component loads-->
    <transition name="fade">
      <forecast
        :isActive="isActive"
        :forecastWeather="forecastWeather"
        :unitSelected="unitSelected"
        :cityData="cityData"
      />
    </transition>
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
    //Boolean for displaying forecast widget
    isActive: {
      type: Boolean,
      default: () => {
        false;
      }
    },
    //forecast weather data
    forecastWeather: {
      type: Object,
      default: () => {}
    },
    //current weather data
    currentWeather: {
      type: Object,
      default: () => {}
    },
    //selected units
    unitSelected: {
      type: String,
      default: () => ''
    },
    //City data recieved from server
    cityData: {
      type: Object,
      default: () => {
        {
          null;
        }
      }
    }
  },

  methods: {
    toggleForecast() {
      this.$store.dispatch('toggleForecast');
    },
    //randomly color icon
    randomColor() {
      return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
    },
    //format time from OWM api
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
.box {
  height: fit-content;
  width: fit-content;
}
.button {
  margin-bottom: 1em;
}
</style>
