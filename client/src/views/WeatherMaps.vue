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
    getCoords() {
      return [this.cityCoords.coord.lat, this.cityCoords.coord.lon];
    },
    stateOrCountry() {
      return this.cityCoords.state !== ''
        ? this.cityCoords.state
        : this.cityCoords.country;
    }
  },

  mounted() {
    const mapDetailed = L.tileLayer(
      'https://tile-{s}.openstreetmap.fr/hot/{z}/{x}/{y}.png'
    );

    const mapStreet = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    );

    const precipitationLayer = L.OWM.precipitation({
      appId: '64aaf5b71da8c0001799c0054eea79ca',
      opacity: 0.7
    });

    const temperatureLayer = L.OWM.temperature({
      appId: '64aaf5b71da8c0001799c0054eea79ca',
      opacity: 0.5,
      temperatureUnit: 'F'
    });

    const windLayer = L.OWM.wind({
      appId: '64aaf5b71da8c0001799c0054eea79ca',
      opacity: 0.5
    });

    const snowLayer = L.OWM.snow({
      appId: '64aaf5b71da8c0001799c0054eea79ca',
      opacity: 0.8
    });

    const cloudLayer = L.OWM.clouds({
      appId: '64aaf5b71da8c0001799c0054eea79ca',
      opacity: 0.8
    });

    const pressureLayer = L.OWM.pressure({
      appId: '64aaf5b71da8c0001799c0054eea79ca',
      opacity: 0.5
    });
    const baseMaps = {
      Street: mapStreet,
      Detailed: mapDetailed
    };
    const overlayMaps = {
      Precipitation: precipitationLayer,
      Temperature: temperatureLayer,
      Wind: windLayer,
      Snow: snowLayer,
      Clouds: cloudLayer,
      Pressure: pressureLayer
    };
    const map = L.map('map', {
      center: this.getCoords,
      zoom: 4,
      layers: [mapStreet, mapDetailed]
    });

    L.marker(this.getCoords)
      .addTo(map)
      .bindPopup(`${this.cityCoords.name}, ${this.stateOrCountry}`)
      .openPopup();

    map.setView(new L.LatLng(this.getCoords[0], this.getCoords[1]), 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
      map
    );

    L.control.layers(baseMaps, overlayMaps).addTo(map);

    map.addControl(
      L.control.locate({
        locateOptions: {
          enableHighAccuracy: true
        },
        watch: true,
        icon: 'fa fa-map-marker'
      })
    );
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
