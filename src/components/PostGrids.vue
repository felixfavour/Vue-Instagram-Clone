<template>
  <div class="post-grids-ctn flex">
    <div class="ctn">
      <PostGrid />
      <PostGrid />
    </div>
    <PostGrid size="x2" />
  </div>
</template>

<script>
import PostGrid from './PostGrid.vue'
export default {
  components: { PostGrid },
  name: 'PostGrids'
}
</script>

<style scoped>
  .flex {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .ctn {
    flex-basis: 32.7%;
    margin-right: 1.1%;
    transition: 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .ctn > div {
    margin-bottom: 18px;
  }
</style>
