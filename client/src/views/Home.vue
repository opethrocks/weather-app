<template>
  <div>
    <div class="flex-container">
      <div class="dropdown-container">
        <div
          class="dropdown is-left"
          :class="{ 'is-active': activeStateDropdown }"
          @click="toggleStateDropdown"
        >
          <div class="dropdown-trigger">
            <button
              class="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu3"
            >
              <span>{{ stateCase(stateDropdownText) }}</span>
              <span class="icon is-right" id="icon">
                <i class="fa fa-angle-down"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu3" role="menu">
            <div class="dropdown-content" id="dropdown-flex">
              <a
                href="#"
                class="dropdown-item"
                :class="{ 'is-active': state.isActive }"
                v-for="state in states"
                :key="state.name"
                @click="selectStateDropdownItem(state)"
              >
                {{ stateCase(state.name) }}
              </a>
            </div>
          </div>
        </div>
        <h3 class="pl-2 pr-2 pt-1 is-size-5 has-text-weight-semibold">OR</h3>

        <div
          class="dropdown is-right"
          :class="{ 'is-active': activeCountryDropdown }"
          @click="toggleCountryDropdown"
        >
          <div class="dropdown-trigger">
            <button
              class="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu3"
            >
              <span>{{ countryDropdownText }}</span>
              <span class="icon is-right" id="icon">
                <i class="fa fa-angle-down"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu3" role="menu">
            <div class="dropdown-content" id="dropdown-flex">
              <a
                href="#"
                class="dropdown-item"
                :class="{ 'is-active': country.isActive }"
                v-for="country in countries"
                :key="country.name"
                @click="selectCountryDropdownItem(country)"
              >
                {{ country.name }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="field" id="input">
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-info is-focused"
            type="text"
            placeholder="Search for city"
            v-model.lazy="input"
            @keyup.enter="searchImperial"
          />
          <span class="icon is-left">
            <font-awesome-icon icon="search" />
          </span>
          <span class="icon is-right">
            <a class="delete is-small" @click="clearCity"></a>
          </span>
        </div>
      </div>
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
import worldCountries from '../../public/countries.js';
import states from '../../public/states.js';

export default {
  name: 'Home',
  components: {
    CurrentConditions
  },
  data() {
    return {
      input: null,
      state: null,
      country: null,
      city: null,
      units: null,
      cityCode: null,
      countries: worldCountries,
      states: states,
      activeStateDropdown: false,
      activeCountryDropdown: false,
      stateDropdownText: 'Select State',
      countryDropdownText: 'Select Country'
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
      'currentCity'
    ])
  },
  methods: {
    ...mapActions(['currentWeather', 'weatherForecast', 'addCity']),
    ...mapActions({
      weather: 'currentWeather',
      forecast: 'weatherForecast',
      addCity: 'addCity'
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
    clearCity() {
      this.input = null;
    },
    toggleStateDropdown() {
      this.activeStateDropdown === false
        ? (this.activeStateDropdown = true)
        : (this.activeStateDropdown = false);
    },
    toggleCountryDropdown() {
      this.activeCountryDropdown === false
        ? (this.activeCountryDropdown = true)
        : (this.activeCountryDropdown = false);
    },
    selectStateDropdownItem(state) {
      this.states.map((item) => (item.isActive = false));
      state.isActive = true;
      this.state = state.abbreviation;
      this.stateDropdownText = state.name;
      this.country = null;
      this.countryDropdownText = 'Select Country';
    },
    selectCountryDropdownItem(country) {
      this.countries.map((item) => (item.isActive = false));
      country.isActive = true;
      this.country = country.abbreviation;
      this.countryDropdownText = country.name;
      this.state = null;
      this.stateDropdownText = 'Select State';
    },
    stateCase(state) {
      return state
        .toLowerCase()
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.substr(1))
        .join(' ');
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
#input {
  margin: 0.5em;
}
.dropdown-container {
  display: flex;
  justify-content: center;
  margin: 1em;
}
#dropdown-flex {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 40em;
}
#icon {
  padding-left: 0.5em;
}
</style>
