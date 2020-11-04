<template>
  <div id="app" :class="{ 'dark-theme': darkMode }">
    <notifications
      classes="notification"
      type="error"
      position="top center"
      max="1"
    />
    <!-- <label class="checkbox has-text-weight-bold">
      Dark Mode
      <input type="checkbox" @change="toggleTheme" />
    </label> -->
    <div id="nav">
      <router-link to="/">Conditions</router-link> |
      <router-link to="/weather-maps">Maps</router-link>
    </div>
    <keep-alive include="Home, WeatherMaps">
      <router-view />
    </keep-alive>

    <footer id="footer">Designed by Matt Lebleu</footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false
    };
  },

  methods: {
    toggleTheme() {
      this.darkMode === false
        ? (this.darkMode = true)
        : (this.darkMode = false);
      this.$store.dispatch('setTheme', this.darkMode);
    }
  }
};
</script>

<style lang="scss">
.container {
  padding: 5em 5em 5em 5em;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
}
.dark-theme {
  background-color: #2d2d2e;
  color: #ffffff;
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
    background: #e54d42;
    border-left: 5px solid #b82e24;
  }
}
#nav {
  font-size: 18px;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #0097cc;
    }
  }
}
#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30px; /* Height of the footer */
}
</style>
