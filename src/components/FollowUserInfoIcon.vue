<template>
  <div class="follow-ctn">
    <UserInfoIcon />
    <button class="clear-btn follow-btn">
      Follow
    </button>
  </div>
</template>

<script>
import UserInfoIcon from "./UserInfoIcon.vue"

export default {
  name: 'FollowUserInfoIcon',
  components: { UserInfoIcon }
}
</script>

<style scoped>
  .follow-ctn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 12px 0;
  }
  .follow-btn {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--blue-text);
  }

</style>
