<template>
  <div class="stories-ctn">
    <StoryCircle v-for="(circle, id) in 16" :key="id" />
  </div>
</template>

<script>
import StoryCircle from './StoryCircle'
export default {
  name: 'Stories',
  components: {
    StoryCircle
  }
}
</script>

<style scoped>
  .stories-ctn {
    display: flex;
    width: 100%;
    overflow-x: scroll;
    border: 1px solid var(--border-color);
    border-radius: 3px;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .stories-ctn::-webkit-scrollbar {
    display: none;
  }
</style>
