<template>
  <v-app>
    <v-card color="grey lighten-4" flat height="200px" tile>
      <v-toolbar extended>
        <v-toolbar-title large>CMXX</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn text large href="/home">Home</v-btn>
        <v-btn text large href="/about">About</v-btn>
<!-- 
        <v-btn icon>
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

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      //
    };
  }
};
</script>