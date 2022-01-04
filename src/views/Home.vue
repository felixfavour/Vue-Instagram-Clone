<template>
  <div class="section page">
    <div class="inner">
      <Feeds />
    </div>
  </div>
</template>

<script>
import Feeds from '../components/Feeds.vue'
export default {
  name: 'Home',
  components: { 
    Feeds
  }
}
</script>

<style scoped>
</style>
