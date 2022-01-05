<template>
  <div class="conversation-messages-ctn">
    <div class="header">
      <div class="user-info">
        <div class="profile">
          <img src="@/assets/bitmaps/image1.png" alt="">
          <div class="online" />
        </div>
        <div class="names">
          <div class="full-name">
            Favour Felix
          </div>
          <div class="is-active">
            Active now
          </div>
        </div>
      </div>
      <button class="clear-btn">
        <svg aria-label="View thread details" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><circle cx="11.819" cy="7.709" r="1.25"></circle><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="10.569" x2="13.432" y1="16.777" y2="16.777"></line><polyline fill="none" points="10.569 11.05 12 11.05 12 16.777" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline></svg>
      </button>
    </div>
    <div class="messages">

    </div>
  </div>
</template>

<script>
export default {
  name: 'ConversationMessages'
}
</script>

<style scoped>
  .conversation-messages-ctn {
    width: 100%;
    height: 100%;
  }
  .header {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
    padding: 0 20px;
  }
  .user-info {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 12px;
  }
  .profile {
    position: relative;
    margin-right: 16px;
  }
  .profile img {
    width: 24px;
    height: 24px;
    border-radius: 24px;
  }
  .online {
    background: #78DE45;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    position: absolute;
    right: 0;
    bottom: 0;
    border: 2px solid #FFFFFF;
  }
  .full-name {
    font-size: 1rem;
    font-weight: 500;
  }
  .is-active {
    font-size: 0.75rem;
    color: var(--grey-text);
    margin-top: 2px;
  }
</style>
