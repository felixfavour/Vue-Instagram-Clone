<template>
  <div class="feeds-ctn">
    <Stories />
    <Posts />
  </div>
</template>

<script>
import Posts from './Posts.vue'
import Stories from './Stories.vue'
export default {
  components: { Posts, Stories },
  name: 'Feeds'
}
</script>

<style scoped>
  .feeds-ctn {
    max-width: 615px;
  }
</style>
