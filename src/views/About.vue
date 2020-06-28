<template>
  <div class="about mx-auto">
    <h1>This is an about page</h1>
    <div style="height:20px;"></div>
    <Card1/>
  </div>
</template>

<script>
// @ is an alias to /src
import Card1 from '@/components/Card1.vue'

export default {
  name: 'About',
  components: {
    Card1
  }
}
</script>
