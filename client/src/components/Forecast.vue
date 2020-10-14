<template>
  <div>
    <transition
      name="bounce"
      enter-active-class="bounceInLeft"
      leave-active-class="bounceOutRight"
    >
      <div v-if="isActive">
        <div class="box">
          <p class="label is-size-3 pt-3" v-if="cityData[0].state">
            <font-awesome-icon icon="location-arrow" />
            {{ cityData[0].name }}, {{ cityData[0].state }}
          </p>
          <p class="label is-size-3 pt-3" v-else>
            <font-awesome-icon icon="location-arrow" />
            {{ cityData[0].name }}, {{ cityData[0].country }}
          </p>
          <div class="flex-container">
            <div v-for="forecast in getForecast" :key="forecast.dt">
              <div
                class="flex-item"
                v-for="weather in forecast.weather"
                :key="weather.id"
              >
                <p class="has-text-weight-semibold is-size-5" id="description">
                  {{ weather.description }}
                </p>
                <p class="has-text-weight-semibold is-size-5" id="description">
                  <font-awesome-icon icon="thermometer-half" />
                  {{ Math.round(forecast.main.temp) }}{{ formatUnits }}
                </p>
                <div id="icon">
                  <i
                    :style="{ color: randomColor() }"
                    :class="`wi wi-owm-${weather.icon}`"
                  ></i>
                </div>

                <p class="has-text-weight-semibold">
                  <font-awesome-icon icon="clock" />
                  {{ formatTime(forecast.dt_txt) }}
                </p>
                <p class="has-text-weight-semibold">
                  <font-awesome-icon icon="calendar-alt" />
                  {{ formatDate(forecast.dt_txt) }}
                </p>
              </div>
            </div>
          </div>
          <button class="button is-link is-small" @click="toggleConditions">
            Show Conditions
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Forecast',
  data() {
    return {
      units: null
    };
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
      default: () => {
        null;
      }
    },
    unitSelected: {
      type: String,
      default: () => {
        '';
      }
    },
    cityData: {
      type: Array,
      default: () => {
        [];
      }
    }
  },
  methods: {
    toggleConditions() {
      this.$store.dispatch('toggleForecast');
    },
    randomColor() {
      return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
    },
    formatTime(time) {
      return new Date(time).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString([], {
        month: '2-digit',
        day: '2-digit'
      });
    }
  },
  computed: {
    getForecast() {
      return this.forecastWeather.list.filter((item, index) => index < 10);
    },
    getIcon() {
      return this.forecastIcon.filter((item, index) => index < 10);
    },
    formatUnits() {
      if (this.unitSelected === 'imperial') {
        return '°F';
      } else {
        return '°C';
      }
    }
  }
};
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  grid-row-gap: 2em;
}
.flex-item {
  margin: 0.75em;
}
.box {
  border-radius: 2em;
  width: 60em;
}
.button {
  margin: 1em;
}
#description {
  text-transform: capitalize;
}
#icon {
  font-size: 75px;
}
#icon-color {
  color: red;
}
</style>
