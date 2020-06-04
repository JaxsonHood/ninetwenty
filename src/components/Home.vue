<template>
  <div class="hello">
    <img alt="Our logo-name" class="mx-auto w-responsive" src="../assets/logo-name.png" style="max-width:600px;" />
    <h1>{{ msg }}</h1>
    <div class="mx-auto w-responsive" style="max-width:400px; padding:20px;">
      <Card />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Home",
  components: {
    Card,
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
