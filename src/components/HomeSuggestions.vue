<template>
  <div class="home-suggestions-ctn">
    <div class="profile">
      <div class="about">
        <img src="@/assets/bitmaps/profile-image.jpeg" alt="">
        <div class="names">
          <div>raphfelix</div>
          <div>C H I N E M E R E M</div>
        </div>
      </div>
      <button class="clear-btn follow-btn">
        Switch
      </button>
    </div>
    <div class="main-suggestions">
      <div class="suggestions-head">
        <span>
          Suggestions for you
        </span>
        <router-link to="/" class="clear-btn see-all">
          See All
        </router-link>
      </div>
      <FollowUserInfoIcon v-for="user in 5" :key="user" />
    </div>
  </div>
</template>

<script>
import FollowUserInfoIcon from './FollowUserInfoIcon.vue'
export default {
  components: { FollowUserInfoIcon },
  name: 'HomeSuggestions'
}
</script>

<style scoped>
  .home-suggestions-ctn {
    width: 100%;
  }
  .profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px 0;
  }
  .profile > .about {
    display: flex;
    align-items: center;
  }
  .profile .names {
    margin-left: 16px;
    font-size: 0.875rem;
  }
  .names > div:nth-child(1) {
    font-weight: 600;
  }
  .names > div:nth-child(2) {
    color: var(--grey-text);
  }
  .profile img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
  .follow-btn {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--blue-text);
  }

  /* Main Suggestions */
  .suggestions-head {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--grey-text);
    margin-bottom: 16px;
  }
  .suggestions-head .see-all {
    font-size: 0.75rem;
    text-decoration: none;
    color: #000;
  }

</style>
