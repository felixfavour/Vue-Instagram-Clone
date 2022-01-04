<template>
  <div class="posts-ctn">
    <Post v-for="post in 8" :key="post" />
  </div>
</template>

<script>
import Post from './Post.vue'
export default {
  components: { Post },
  name: 'Posts'
}
</script>

<style scoped>
.posts-ctn {
}
</style>
