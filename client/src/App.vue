<template>
  <div id="app">
    <notifications
      classes="vue-notification"
      type="error"
      position="top center"
    />
    <div id="nav">
      <router-link to="/">Conditions</router-link> |
      <router-link to="/weather-maps">Maps</router-link>
    </div>
    <keep-alive include="Home, WeatherMaps">
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 5em 5em 5em 5em;
}
.vue-notification {
  background: #ff8000;
  font-size: 15px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #0097cc;
    }
  }
}
</style>
