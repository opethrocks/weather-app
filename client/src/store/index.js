import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentWeather: null,
    weatherForecast: null,
    selectedUnits: null,
    isForecastActive: false,
    currentCity: null,
    cityCoords: {
      city: 'Timbuktu',
      country: 'ML',
      coord: [
        {
          lon: -3.00742,
          lat: 16.773479
        }
      ]
    },
    autoComplete: null
  },
  mutations: {
    ADD_WEATHER(state, payload) {
      let data = payload;
      state.currentWeather = data;
    },
    ADD_FORECAST(state, payload) {
      let data = payload;
      state.weatherForecast = data;
    },

    SET_UNIT(state, payload) {
      let unit = payload;
      state.selectedUnits = unit;
    },
    DELETE_CITY(state) {
      state.currentWeather = null;
      state.weatherForecast = null;
    },
    ADD_CITY(state, payload) {
      state.currentCity = payload;
    },
    AUTO_COMPLETE(state, payload) {
      state.autoComplete = payload;
    },
    TOGGLE_FORECAST(state) {
      state.isForecastActive === false
        ? (state.isForecastActive = true)
        : (state.isForecastActive = false);
    },
    ADD_CITY_COORDS(state, payload) {
      state.cityCoords = payload;
    }
  },
  actions: {
    currentWeather({ commit }, payload) {
      let city = payload.city;
      let unit = payload.unit;
      const apiKey = process.env.VUE_APP_API_KEY;
      axios({
        method: 'GET',
        url: `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${apiKey}`,
        params: {
          units: unit
        }
      })
        .then((response) => {
          commit('ADD_WEATHER', response.data);
          commit('SET_UNIT', unit);
        })
        .catch((error) => {
          if (error.response) {
            alert(error.message);
          }
        });
    },
    weatherForecast({ commit }, payload) {
      let city = payload.city;
      let unit = payload.unit;
      const apiKey = process.env.VUE_APP_API_KEY;
      axios({
        method: 'GET',
        url: `https://api.openweathermap.org/data/2.5/forecast?id=${city}&appid=${apiKey}`,
        params: {
          units: unit
        }
      })
        .then((response) => {
          commit('ADD_FORECAST', response.data);
          commit('SET_UNIT', unit);
        })
        .catch((error) => {
          if (error.response) {
            alert(JSON.stringify(error.message));
          }
        });
    },
    deleteCity({ commit }) {
      commit('DELETE_CITY');
    },
    addCity({ commit }, payload) {
      let city = payload.city;
      let state = payload.state;
      let country = payload.country;
      const url = 'api/citySearch';
      axios
        .post(url, {
          data: { city: city, state: state, country: country }
        })
        .then((response) => {
          commit('ADD_CITY', response.data);
        })
        .catch((error) => alert(error.message));
    },
    getAutoComplete({ commit }, payload) {
      let input = payload.input;
      let state = payload.state;
      let country = payload.country;

      axios({
        method: 'GET',
        url: 'api/autoComplete',
        params: {
          q: input,
          state: state,
          country: country
        }
      })
        .then((response) => {
          commit('AUTO_COMPLETE', response.data);
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    addCityCoords({ commit }, payload) {
      commit('ADD_CITY_COORDS', payload);
    },

    toggleForecast({ commit }) {
      commit('TOGGLE_FORECAST');
    }
  },

  getters: {
    currentWeather: (state) => state.currentWeather,
    weatherForecast: (state) => state.weatherForecast,
    selectedUnit: (state) => state.selectedUnits,
    toggleForecast: (state) => state.isForecastActive,
    currentCity: (state) => state.currentCity,
    autoCompleteData: (state) => state.autoComplete,
    cityCoords: (state) => state.cityCoords
  }
});
