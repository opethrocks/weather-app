<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Conditions</router-link> |
      <router-link to="/weather-maps">Maps</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  padding: 5em 5em 5em 5em;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
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
