<template>
  <div>
    <div class="flex-container">
      <dropdown-component
        @selectState="selectState"
        @selectCountry="selectCountry"
      />
      <input-component
        :autoCompleteData="autoCompleteData"
        :input="input"
        @newInput="autoComplete"
        @selectCity="selectCity"
      />
      <div class="flex-item">
        <button
          class="button is-info is-small"
          style="margin-top: 1em; margin-right: 1em"
          @click="searchImperial"
        >
          Imperial
        </button>
        <button
          class="button is-success is-small"
          style="margin-top: 1em"
          @click="searchMetric"
        >
          Metric
        </button>
      </div>
      <br />
      <transition name="fade">
        <div v-if="currentWeather">
          <current-conditions
            :forecastWeather="weatherForecast"
            :currentWeather="currentWeather"
            :unitSelected="selectedUnit"
            :isActive="toggleForecast"
            :cityData="currentCity.data"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import CurrentConditions from '@/components/CurrentConditions.vue';
import { mapGetters, mapActions } from 'vuex';
import DropdownComponent from '@/components/DropdownComponent.vue';
import InputComponent from '@/components/InputComponent.vue';

export default {
  name: 'Home',
  components: {
    CurrentConditions,
    DropdownComponent,
    InputComponent
  },
  data() {
    return {
      input: null,
      state: null,
      country: null,
      city: null,
      units: null,
      cityCode: null
    };
  },
  computed: {
    getCityCode() {
      return this.currentCity.data.map((obj) => obj.id);
    },
    getCityCoords() {
      return this.currentCity.data.map((obj) => obj.coord);
    },

    ...mapGetters([
      'currentWeather',
      'weatherForecast',
      'selectedUnit',
      'toggleForecast',
      'currentCity',
      'autoCompleteData'
    ])
  },
  methods: {
    ...mapActions([
      'currentWeather',
      'weatherForecast',
      'addCity',
      'getAutoComplete'
    ]),
    ...mapActions({
      weather: 'currentWeather',
      forecast: 'weatherForecast',
      addCity: 'addCity',
      getAc: 'getAutoComplete'
    }),

    searchImperial() {
      let str = this.input
        .trim()
        .toLowerCase()
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.substr(1))
        .join(' ');
      this.city = str;
      this.units = 'imperial';

      this.addCity({
        city: this.city,
        state: this.state,
        country: this.country
      });
      setTimeout(() => {
        this.cityCode = this.getCityCode[0];
        this.weather({
          city: this.cityCode,
          unit: this.units
        });
        this.forecast({
          city: this.cityCode,
          unit: this.units
        });
      }, 500);
    },
    searchMetric() {
      let str = this.input
        .trim()
        .toLowerCase()
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.substr(1))
        .join(' ');
      this.city = str;
      this.units = 'metric';

      this.addCity({
        city: this.city,
        state: this.state,
        country: this.country
      });

      setTimeout(() => {
        this.cityCode = this.getCityCode[0];
        this.weather({
          city: this.cityCode,
          unit: this.units
        });
        this.forecast({
          city: this.cityCode,
          unit: this.units
        });
      }, 500);
    },

    selectState($event) {
      this.state = $event.state;
      this.country = $event.country;
      this.input = null;
    },
    selectCountry($event) {
      this.country = $event.country;
      this.state = $event.state;
      this.input = null;
    },
    selectCity($event) {
      this.input = $event;
    },
    autoComplete($event) {
      this.input = $event;
      this.input = this.input
        .toLowerCase()
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.substr(1))
        .join(' ');
      this.getAc({
        input: this.input,
        state: this.state,
        country: this.country
      });
    }
  }
};
</script>

<style scoped>
.flex-container {
  display: flex;
  align-items: center;
  flex-flow: column;
}
.flex-item {
  flex: 1;
}
#icon {
  padding-left: 0.5em;
}
.box {
  height: fit-content;
  max-height: 30em;
  display: flex;
  overflow-y: auto;
  padding: 1em;
}
</style>
