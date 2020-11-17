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
    //get city data from store
    ...mapGetters(['cityCoords']),
    //format coordinates
    getCoords() {
      return [this.cityCoords.coord.lat, this.cityCoords.coord.lon];
    },
    //determine whether city has state or country property.(Only US cities have state)
    stateOrCountry() {
      return this.cityCoords.state !== ''
        ? this.cityCoords.state
        : this.cityCoords.country;
    }
  },

  mounted() {
    //define map layers
    const mapDetailed = L.tileLayer(
      'https://tile-{s}.openstreetmap.fr/hot/{z}/{x}/{y}.png'
    );

    const mapStreet = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    );
    //define OWM layers
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
    //define map layer selectors
    const baseMaps = {
      Street: mapStreet,
      Detailed: mapDetailed
    };
    //define OWM layer selector
    const overlayMaps = {
      Precipitation: precipitationLayer,
      Temperature: temperatureLayer,
      Wind: windLayer,
      Snow: snowLayer,
      Clouds: cloudLayer,
      Pressure: pressureLayer
    };
    //define map
    const map = L.map('map', {
      center: this.getCoords,
      zoom: 4,
      layers: [mapStreet, mapDetailed]
    });
    //add pin to map at city coordinates
    L.marker(this.getCoords)
      .addTo(map)
      .bindPopup(`${this.cityCoords.name}, ${this.stateOrCountry}`)
      .openPopup();
    //adjust view when city changes
    map.setView(new L.LatLng(this.getCoords[0], this.getCoords[1]), 5);
    //add OWM tile layers to map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
      map
    );
    //add map layers to map
    L.control.layers(baseMaps, overlayMaps).addTo(map);
    //add location toggle to map
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
