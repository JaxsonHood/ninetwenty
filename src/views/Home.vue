<template>
  <div class="home mx-auto" style="max-width:1000px;">
    <Carousel/>
    <div style="height:20px;"></div>
    <Form/>
    <div style="height:20px;"></div>
    <Blog/>
    <div style="height:40px;"></div>
    <Gallery/>
    <div style="height:40px;"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import Form from '@/components/Form.vue'
import Blog from '@/components/Blog.vue'
import Gallery from '@/components/Gallery.vue'


export default {
  name: 'Home',
  components: {
    Carousel,
    Form,
    Blog,
    Gallery
  }
}
</script>
