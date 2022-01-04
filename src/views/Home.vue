<template>
  <div class="section page">
    <div class="inner">
      <div class="left-side">
        <Feeds />
      </div>
      <div class="right-side">
        <HomeSuggestions />
      </div>
    </div>
  </div>
</template>

<script>
import Feeds from '../components/Feeds.vue'
import HomeSuggestions from '../components/HomeSuggestions.vue'
export default {
  name: 'Home',
  components: { 
    Feeds,
    HomeSuggestions
  }
}
</script>

<style scoped>
.section > .inner {
  display: flex;
  position: relative;
}
.left-side {
  max-width: 615px;
  margin-right: 28px;
}
.right-side {
  position: relative;
}
</style>
