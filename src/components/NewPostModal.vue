<template>
  <div class="np-modal-ctn drop-modal" @click.stop>
    <div class="bg-layer" @click="setNPModalVisible()"/>
    <div class="inner">
      <div class="header">
        Create new post
      </div>
      <NewPostEmptyState />
    </div>
  </div>
</template>

<script>
import NewPostEmptyState from './NewPostEmptyState.vue'
export default {
  name: 'NewPostModal',
  components: {
    NewPostEmptyState
  },
  methods: {
    setNPModalVisible () {
      this.$store.commit('header/setNPModalVisible', false)
    }
  }
}
</script>

<style scoped>
  .np-modal-ctn {
    min-height: 500px;
    height: 800px;
    max-height: 80vh;
    width: 780px;
    border-radius: 16px;
    background: #FFFFFF;
    position: absolute;
    top: 33px;
    right: -20px;
    color: #000000;
  }
  .bg-layer {
    background: #000000D9;
  }
  .inner {
    height: calc(100% - 42px);
  }
  .np-modal-ctn .header {
    height: 42px;
    font-size: 1rem;
    font-weight: 600;
    display: grid;
    place-items: center;
    border-bottom: 1px solid var(--border-color);
  }
</style>