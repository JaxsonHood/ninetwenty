<template>
  <div class="home mx-auto" style="max-width:1000px;">
    <Carousel/>
    <div style="height:20px;"></div>
    <Form/>
    <div style="height:20px;"></div>
    <Stepper/>
    <div style="height:40px;"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import Form from '@/components/Form.vue'
import Stepper from '@/components/Stepper.vue'


export default {
  name: 'Home',
  components: {
    Carousel,
    Form,
    Stepper
  }
}
</script>
