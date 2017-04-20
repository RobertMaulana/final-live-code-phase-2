<template>
  <div id="app">
    <HeaderApp></HeaderApp>
    <AddArticleApp></AddArticleApp>
    <ContentApp></ContentApp>
  </div>
</template>

<script>
import HeaderApp from "./components/HeaderApp"
import ContentApp from "./components/ContentApp"
import AddArticleApp from "./components/AddArticleApp"
export default {
  name: 'app',
  components: {
    HeaderApp,
    ContentApp,
    AddArticleApp
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
