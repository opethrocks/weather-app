<template>
  <div id="app">
    <notifications
    classes="notification"
      type="error"
      position="top center"
      max=1
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

<style lang="scss">
.container {
  padding: 5em 5em 5em 5em;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.notification {
  color: #ffffff;
  .notification-title {
    font-size: 16px;
  }
  .notification-content {
    font-size: 15px;
  }
  &.error {
    background: #E54D42;
    border-left: 5px solid #B82E24
  }
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
