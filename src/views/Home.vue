<template>
  <div class="home">
    <div style="max-width:600px;">
      <Carousel/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'Home',
  components: {
    Carousel
  }
}
</script>
