<template>
  <div id="app">
    <HeaderApp></HeaderApp>
    <ContentApp></ContentApp>
  </div>
</template>

<script>
import HeaderApp from "./components/HeaderApp"
import ContentApp from "./components/ContentApp"
export default {
  name: 'app',
  components: {
    HeaderApp,
    ContentApp
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
