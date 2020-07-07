<template>
  <section id="blog">
    <div class="py-12"></div>

    <v-container>
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Blog</h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-row>
        <v-col v-for="({ src, text, title }, i) in articles" :key="i" cols="12" md="4">
          <!-- <v-img :src="src" class="mb-4" height="275" max-width="100%"></v-img> -->

          <v-img
            :src="src"
            :lazy-src="require('../assets/grey_background.jpg')"
            class="grey lighten-2 mb-4"
            height="275" max-width="100%"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>

          <h3 class="font-weight-black mb-4 text-uppercase" v-text="title"></h3>

          <div class="title font-weight-light mb-5" v-text="text"></div>

          <v-btn class="ml-n4 font-weight-black" text>Continue Reading</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script>
export default {
  name: "Blog",

  data: () => ({
    articles: [
      {
        src: "https://picsum.photos/600/400",
        text: "Let's Go!!",
        title: "BIG"
      },
      {
        src: "https://picsum.photos/600/400",
        text: "Time to Dance",
        title: "PARTYROCK"
      },
      {
        src: "https://picsum.photos/600/400",
        text: "Big Time",
        title: "HELLO"
      }
    ]
  })
};
</script>
