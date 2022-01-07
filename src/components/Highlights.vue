<template>
  <div class="highlights-ctn">
    <Highlight v-for="circle in 3" :key="circle" />
  </div>
</template>

<script>
import Highlight from './Highlight'
export default {
  name: 'Highlights',
  components: {
    Highlight
  }
}
</script>

<style scoped>
  .highlights-ctn {
    display: flex;
    width: 100%;
    overflow-x: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    margin: 0 50px;
    margin-bottom: 45px;
  }
  .highlights-ctn::-webkit-scrollbar {
    display: none;
  }
</style>
