<template>
  <div class="section page">
    <div class="inner">
      <PostGrids />
      <div class="flex">
        <PostGrid v-for="post in 9" :class="{third: post % 3 === 0}" :key="post" />
      </div>
      <PostGrids />
      <div class="flex">
        <PostGrid v-for="post in 8" :class="{third: post % 3 === 0}" :key="post" />
      </div>
    </div>
  </div>
</template>

<script>
import PostGrid from '../components/PostGrid.vue'
import PostGrids from '../components/PostGrids.vue'
export default {
  components: { PostGrid, PostGrids },
  name: 'Explore'
}
</script>

<style scoped>
  .inner .flex {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
</style>
