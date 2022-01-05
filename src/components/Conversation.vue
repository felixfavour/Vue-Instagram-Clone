<template>
  <div class="message-profile-ctn">
    <div class="brief">
      <div class="profile-image">
        <img src="@/assets/bitmaps/image1.png" alt="">
        <div class="online" />
      </div>
      <div class="message-name">
        <div class="full-name">
          Favour Felix
        </div>
        <div class="message">
          <span class="main">Can I get your email?</span>
          <span class="time">1 d</span>
        </div>
      </div>
    </div>
    <div class="new-message">
      <div />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Conversation'
}
</script>

<style scoped>
  .message-profile-ctn {
    padding: 8px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  .message-profile-ctn > .brief {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
  }
  .message-profile-ctn .profile-image {
    width: 56px;
    height: 56px;
    position: relative;
  }
  .message-profile-ctn .profile-image > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  .online {
    background: #78DE45;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    position: absolute;
    right: 0;
    bottom: 0;
    border: 3px solid #FFFFFF;
  }
  .message-name {
    margin-left: 16px;
  }
  .message .main::after {
    content: '\00B7';
    padding: 0 4px;
  }
  .message-name > .message {
    margin-top: 3px;
    color: #8f8f8f;
  }
  .new-message > div {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: var(--blue-text);
  }
</style>
