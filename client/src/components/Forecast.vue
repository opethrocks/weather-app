<template>
  <div>
    <!--conditionally show forecast widget-->
    <div v-if="isActive">
      <div class="box">
        <!--show city and state if city is in US-->
        <p class="label is-size-3 pt-3" v-if="cityData.state">
          <font-awesome-icon icon="location-arrow" />
          {{ cityData.name }}, {{ cityData.state }}
        </p>
        <!--show country if city is anywhere other than US-->
        <p class="label is-size-3 pt-3" v-else>
          <font-awesome-icon icon="location-arrow" />
          {{ cityData.name }}, {{ cityData.country }}
        </p>
        <button
          class="button is-rounded is-warning is-small"
          @click="toggleConditions"
        >
          Show Conditions
        </button>
        <div class="flex-container">
          <div v-for="forecast in getForecast" :key="forecast.dt">
            <div v-for="weather in forecast.weather" :key="weather.id">
              <div class="flex-item">
                <p class="has-text-weight-semibold is-size-6" id="description">
                  {{ weather.description }}
                </p>
                <p class="has-text-weight-semibold is-size-6" id="description">
                  <font-awesome-icon icon="thermometer-half" />
                  {{ Math.round(forecast.main.temp) }}{{ formatUnits }}
                </p>
                <!--show weather icon and color it randomly-->
                <div id="icon">
                  <i
                    :style="{ color: randomColor() }"
                    :class="`wi wi-owm-${weather.icon}`"
                  ></i>
                </div>

                <p class="has-text-weight-semibold">
                  <font-awesome-icon icon="clock" />
                  {{ formatTime(forecast.dt) }}
                </p>
                <p class="has-text-weight-semibold">
                  <font-awesome-icon icon="calendar-alt" />
                  {{ formatDate(forecast.dt) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  //Boolean for showing forecast
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
      type: Object,
      default: () => {
        {
          null;
        }
      }
    }
  },
  methods: {
    toggleConditions() {
      this.$store.dispatch('toggleForecast');
    },
    //show weather icon in random colors each reload
    randomColor() {
      return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
    },
    //format time string recieved from OWM api
    formatTime(time) {
      return new Date(time * 1000).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    //format date string recieved from OWM api
    formatDate(date) {
      return new Date(date * 1000).toLocaleDateString([], {
        month: '2-digit',
        day: '2-digit'
      });
    }
  },
  computed: {
    //filter first 10 entries from forecast
    getForecast() {
      return this.forecastWeather.list.filter((item, index) => index < 10);
    },
    //get icon code from OWM api
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
  justify-content: center;
}
.flex-item {
  padding: 0.75em 0.75em 0.75em 0.75em;
}
.box {
  border-radius: 2em;
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
