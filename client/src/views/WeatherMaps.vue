<template>
  <body>
    <div id="map"></div>
  </body>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import 'leaflet-openweathermap';
import 'leaflet.locatecontrol';
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css';
import * as L from 'leaflet';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      city: [],
      cityName: null,
      stateName: null,
      countryName: null,
      baseMaps: { Street: this.mapStreet, Detailed: this.mapDetailed },
      overlayMaps: {
        Precipitation: this.precipitationLayer,
        Temperature: this.temperatureLayer,
        Wind: this.windLayer,
        Snow: this.snowLayer,
        Clouds: this.cloudLayer,
        Pressure: this.pressureLayer
      }
    };
  },

  computed: {
    ...mapGetters(['cityCoords']),
    getCity() {
      return this.cityCoords.city;
    },
    getState() {
      return this.cityCoords.state;
    },
    getCountry() {
      return this.cityCoords.country;
    },
    getCoord() {
      return [this.cityCoords.coord[0].lat, this.cityCoords.coord[0].lon];
    },
    map() {
      return L.map('map', {
        center: this.getCoord,
        zoom: 4,
        layers: [this.mapStreet, this.mapDetailed]
      });
    },
    mapMarker() {
      return L.marker(this.getCoord)
        .addTo(this.map)
        .bindPopup(`${this.getCity}`)
        .openPopup();
    },
    tileLayer() {
      return L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      ).addTo(this.map);
    },
    mapControls() {
      return this.map.addControl(
        L.control.locate({
          locateOptions: {
            enableHighAccuracy: true
          },
          watch: true,
          icon: 'fa fa-map-marker'
        })
      );
    },
    mapDetailed() {
      return L.tileLayer(
        'https://tile-{s}.openstreetmap.fr/hot/{z}/{x}/{y}.png'
      );
    },
    mapStreet() {
      return L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    },
    precipitationLayer() {
      return L.OWM.precipitation({
        appId: '64aaf5b71da8c0001799c0054eea79ca',
        opacity: 0.7
      });
    },
    temperatureLayer() {
      return L.OWM.temperature({
        appId: '64aaf5b71da8c0001799c0054eea79ca',
        opacity: 0.5,
        temperatureUnit: 'F'
      });
    },
    windLayer() {
      return L.OWM.wind({
        appId: '64aaf5b71da8c0001799c0054eea79ca',
        opacity: 0.5
      });
    },
    snowLayer() {
      return L.OWM.snow({
        appId: '64aaf5b71da8c0001799c0054eea79ca',
        opacity: 0.8
      });
    },
    cloudLayer() {
      return L.OWM.clouds({
        appId: '64aaf5b71da8c0001799c0054eea79ca',
        opacity: 0.8
      });
    },
    pressureLayer() {
      return L.OWM.pressure({
        appId: '64aaf5b71da8c0001799c0054eea79ca',
        opacity: 0.5
      });
    }
  },

  mounted() {
    const baseMaps = {
      Street: this.mapStreet,
      Detailed: this.mapDetailed
    };
    const overlayMaps = {
      Precipitation: this.precipitationLayer,
      Temperature: this.temperatureLayer,
      Wind: this.windLayer,
      Snow: this.snowLayer,
      Clouds: this.cloudLayer,
      Pressure: this.pressureLayer
    };

    L.control.layers(baseMaps, overlayMaps).addTo(this.map);

    this.map.addControl(
      L.control.locate({
        locateOptions: {
          enableHighAccuracy: true
        },
        watch: true,
        icon: 'fa fa-map-marker'
      })
    );

    L.marker(this.getCoord)
      .addTo(this.map)
      .bindPopup(`${this.getCity}`)
      .openPopup();
    this.map.setView(new L.LatLng(this.getCoord[0], this.getCoord[1]), 5);
  }
};
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
}
html,
body,
#map {
  height: 83vh;
  width: 100vw;
}
</style>
