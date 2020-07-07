<template>
  <v-card
    color="white lighten-4"
    flat
    height="200px"
    tile
  >
    <v-toolbar>
      <v-toolbar-items>
        <v-btn icon class="align-self-start" size="28" href="/home">
          <v-icon :color="black">mdi-vector-intersection</v-icon>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-title>CMXX</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text large href="/home">Home</v-btn>
      <v-btn text large href="/about">About</v-btn>

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-toolbar>
  </v-card>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {}
    },
  }
</script>