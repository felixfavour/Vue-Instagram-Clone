<template>
  <div class="profile-saved-ctn">
    <div class="header">
      <div>Only you can see what you've saved</div>
      <button class="clear-btn">
        + New Collection
      </button>
    </div>
    <ProfilePostGrids />
  </div>
</template>

<script>
import ProfilePostGrids from '../components/ProfilePostGrids.vue'
export default {
  name: 'ProfileSaved',
  components: {
    ProfilePostGrids
  }
}
</script>

<style scoped>
  .header {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.75rem;
    color: #8E8E8E;
  }
  .clear-btn {
    color: var(--blue-text);
    font-weight: 600;
  }
</style>
