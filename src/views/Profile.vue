<template>
  <div class="section page">
    <div class="inner">
      <div class="header">
        <LargeProfileIcon class="ls" />
        <div class="user-info">
          <div class="block-1">
            <div class="username">
              raphfelix
            </div>
            <router-link class="edit-btn" to="#">
              Edit Profile
            </router-link>
            <button class="clear-btn settings-btn">
              <svg aria-label="Options" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
            </button>
          </div>
          <div class="block-2">
            <div class="user-stat">
              <b>1</b> post
            </div>
            <div class="user-stat">
              <b>193</b> followers
            </div>
            <div class="user-stat">
              <b>163</b> following
            </div>
          </div>
          <div class="block">
            <div class="full-name">
              C H I N E M E R E M
            </div>
            <div class="bio">
              Psalms 27:4 • Christian • SWE
            </div>
            <a target="_blank" href="https://stories.favourfelix.com" class="website">
              stories.favourfelix.com
            </a>
          </div>
        </div>
      </div>
      <Highlights/>
      <div class="user-content">
        <div class="tab-layout">
          <router-link :class="{'clear-btn': true, active: $route.name === 'profile'}" to="/profile">
            <svg aria-label="" class="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12"><rect fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
            POSTS
          </router-link>
          <router-link :class="{'clear-btn': true, active: $route.name.includes('profile-saved')}" to="/profile/saved">
            <svg aria-label="" class="_8-yf5 " color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
            SAVED
          </router-link>
          <router-link :class="{'clear-btn': true, active: $route.name.includes('profile-tagged')}" to="/profile/tagged">
            <svg aria-label="" class="_8-yf5 " color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
            TAGGED
          </router-link>
        </div>
        <ProfilePostGrids v-if="$route.name === 'profile'" />
      </div>
    </div>
  </div>
</template>

<script>
import LargeProfileIcon from "../components/LargeProfileIcon.vue"
import Highlights from '../components/Highlights.vue'
import ProfilePostGrids from '../components/ProfilePostGrids.vue'

export default {
  name: 'Profile',
  components: { LargeProfileIcon, Highlights, ProfilePostGrids }
}
</script>

<style scoped>
  .header {
    display: flex;
    align-items: flex-start;
    margin-bottom: 45px;
  }
  .ls {
    width: 290px;
    margin-right: 30px;
    display: flex;
    justify-content: center;
  }
  b {
    font-weight: 600;
  }
  .block-1 {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
  }
  .username {
    font-size: 1.6rem;
    font-weight: 300;
    margin-right: 20px;
  }
  .edit-btn {
    text-decoration: none;
    height: 30px;
    width: 95px;
    display: grid;
    place-items: center;
    border: 1px solid var(--border-color);
    font-size: 0.875rem;
    color: #000000;
    border-radius: 4px;
    margin-right: 12px;
    font-weight: 600;
  }
  .block-2 {
    margin-bottom: 24px;
    display: flex;
  }
  .user-stat {
    margin-right: 40px;
  }
  .block-3 {
  }
  .full-name {
    font-weight: 600;
    margin-bottom: 8px;
  }
  .bio {
    margin-bottom: 10px;
  }
  .website {
    color: #00376B;
    font-weight: 600;
    text-decoration: none;
  }

  /* User Content */
  .user-content {
    width: 100%;
  }
  .tab-layout {
    border-top: 1px solid var(--border-color);
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .tab-layout .clear-btn {
    height: 53px;
    width: 73px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 60px;
    font-size: 0.75rem;
    font-weight: 600;
    transition: 0.3s;
    position: relative;
    bottom: 1px;
  }
  .tab-layout .clear-btn:active {
    opacity: 0.5;
  }
  .tab-layout .clear-btn.active {
    color: #000000;
    border-top: 1px solid #000000;
  }
  .tab-layout .clear-btn.active svg {
    color: #000000;
  }
  .tab-layout .clear-btn:nth-last-child(1) {
    margin-right: 0;
  }
</style>
