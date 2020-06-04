<template>
  <div class="hello">
    <img alt="Our logo-name" class="mx-auto w-responsive" src="../assets/logo-name.png" style="max-width:600px;" />
    <h1>{{ msg }}</h1>
    <div class="mx-auto w-responsive" style="max-width:400px; padding:20px;">
      <Card />
    </div>

    <mdb-card class="card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg); width:75%;">
      <div class="text-white text-center py-5 px-4 my-5">
        <div>
          <h2 class="card-title h1-responsive pt-3 mb-5 font-bold"><strong>Create your beautiful website with Us</strong></h2>
          <p class="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
            optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
          </p>
          <mdb-btn outline="white" size="md" icon="clone">View project</mdb-btn>
        </div>
      </div>
    </mdb-card>
  </div>
</template>

<script>
import Card from "./Card.vue";
import { mdbCard, mdbBtn } from 'mdbvue';

export default {
  name: "Home",
  components: {
    Card,
    mdbCard,
    mdbBtn
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
