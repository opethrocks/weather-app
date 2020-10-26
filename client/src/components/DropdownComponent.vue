<template>
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
</template>

<script>
import worldCountries from '../../public/countries.js';
import states from '../../public/states.js';

export default {
  name: 'DropdownComponent',
  data() {
    return {
      countries: worldCountries,
      states: states,
      state: null,
      country: null,
      activeStateDropdown: false,
      activeCountryDropdown: false,
      stateDropdownText: 'Select State',
      countryDropdownText: 'Select Country'
    };
  },
  methods: {
    stateCase(state) {
      return state
        .toLowerCase()
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.substr(1))
        .join(' ');
    },
    selectStateDropdownItem(state) {
      this.states.map((item) => (item.isActive = false));
      state.isActive = true;
      this.state = state.abbreviation;
      this.stateDropdownText = state.name;
      this.country = null;
      this.countryDropdownText = 'Select Country';
      this.$emit('selectState', { state: this.state });
    },
    selectCountryDropdownItem(country) {
      this.countries.map((item) => (item.isActive = false));
      country.isActive = true;
      this.country = country.abbreviation;
      this.countryDropdownText = country.name;
      this.state = null;
      this.stateDropdownText = 'Select State';
      this.$emit('selectCountry', { country: this.country });
    },
    toggleStateDropdown() {
      this.activeStateDropdown === false
        ? (this.activeStateDropdown = true)
        : (this.activeStateDropdown = false);
      this.activeCountryDropdown = false;
      this.input = null;
    },
    toggleCountryDropdown() {
      this.activeCountryDropdown === false
        ? (this.activeCountryDropdown = true)
        : (this.activeCountryDropdown = false);
      this.activeStateDropdown = false;
      this.input = null;
    }
  }
};
</script>

<style scoped>
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
</style>
