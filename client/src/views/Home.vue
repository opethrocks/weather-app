<template>
  <div>
    <div class="flex-container">
      <dropdown-component
        @selectState="selectState"
        @selectCountry="selectCountry"
      />
      <input-component
        :autoCompleteData="autoCompleteData"
        @newInput="autoComplete"
        @selectCity="selectCity"
      />
      <div class="flex-item">
        <button
          label="Search Imperial"
          class="button is-info is-rounded is-small"
          style="margin-top: 1em; margin-right: 1em"
          @click="searchImperial"
        >
          Imperial
        </button>

        <button
          class="button is-info is-rounded is-small"
          style="margin-top: 1em"
          @click="searchMetric"
        >
          Metric
        </button>
      </div>
      <br />
      <transition name="fade">
        <!--show current weather widget once response is recieved from api-->
        <div v-if="currentWeather">
          <current-conditions
            :forecastWeather="weatherForecast"
            :currentWeather="currentWeather"
            :unitSelected="selectedUnit"
            :isActive="toggleForecast"
            :cityData="currentCity"
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
    ...mapActions(['addCity', 'getAutoComplete']),
    ...mapActions({
      addCity: 'addCity',
      getAc: 'getAutoComplete'
    }),
    //perform city search with imperial units
    searchImperial() {
      //set this city to typed input
      this.city = this.input;
      //set selected units
      this.units = 'imperial';
      //call addCity action with everything needed to perform city search
      this.addCity({
        city: this.city,
        state: this.state,
        country: this.country,
        unit: this.units
      });
    },
    //perform city search with metric units
    searchMetric() {
      //set this city to typed input
      this.city = this.input;
      //set selected units
      this.units = 'metric';
      //call addCity action with all info needed to perform city search
      this.addCity({
        city: this.city,
        state: this.state,
        country: this.country,
        unit: this.units
      });
    },
    //select a state from dropdown and clear input box
    selectState($event) {
      this.state = $event.state;
      this.input = null;
    },
    //select a country from dropdown and clear input box
    selectCountry($event) {
      this.country = $event.country;
      this.input = null;
    },
    //synchronize input with input component
    selectCity($event) {
      this.input = $event;
    },
    //perform an autocomplete search for every keystroke
    autoComplete($event) {
      //from input component
      this.input = $event;
      //autocomplete action call to server
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
  flex-flow: column wrap;
}
.flex-item {
  flex: 1;
}
#icon {
  padding-left: 0.5em;
}
</style>
