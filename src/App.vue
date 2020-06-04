<template>
  <div id="app">
    <Home msg="Welcome!!" />
    <div class="mx-auto w-responsive">
      <Card/>
    </div>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Card from "./components/Card.vue";

export default {
  name: "App",
  components: {
    Home,
    Card
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
