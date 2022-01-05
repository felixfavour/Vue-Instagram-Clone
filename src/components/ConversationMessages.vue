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
      <Message v-for="message in 25" :sent="false" :key="message" />
    </div>
    <div class="message-input-ctn">
      <div class="message-input">
        <div class="emoji-and-input">
          <button class="clear-btn">
            <EmojiIcon />
          </button>
          <input v-model.trim="messageText" placeholder="Message..." type="text">
        </div>
        <div v-if="messageText.length === 0" class="msg-actions">
          <button class="clear-btn">
            <svg aria-label="Add Photo or Video" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M6.549 5.013A1.557 1.557 0 108.106 6.57a1.557 1.557 0 00-1.557-1.557z" fill-rule="evenodd"></path><path d="M2 18.605l3.901-3.9a.908.908 0 011.284 0l2.807 2.806a.908.908 0 001.283 0l5.534-5.534a.908.908 0 011.283 0l3.905 3.905" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path><path d="M18.44 2.004A3.56 3.56 0 0122 5.564h0v12.873a3.56 3.56 0 01-3.56 3.56H5.568a3.56 3.56 0 01-3.56-3.56V5.563a3.56 3.56 0 013.56-3.56z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
          </button>
          <button class="clear-btn">
            <svg aria-label="Like" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
          </button>
        </div>
        <button v-else :class="{'clear-btn': true, 'post-btn': true}">
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import EmojiIcon from './EmojiIcon.vue'
import Message from './Message.vue'
export default {
  name: 'ConversationMessages',
  components: { Message, EmojiIcon },
  data () {
    return {
      messageText: ''
    }
  }
}
</script>

<style scoped>
  .conversation-messages-ctn {
    width: 100%;
    height: 100%;
    overflow-y: auto;
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
  .messages {
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: calc(100% - 190px);
    overflow-y: scroll;
  }
  .message-input-ctn {
    height: 80px;
    display: flex;
    align-items: center;
  }
  .message-input {
    width: 85%;
    border: 1px solid var(--border-color);
    border-radius: 22px;
    padding: 0 18px;
    height: 45px;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .emoji-and-input {
    display: flex;
    align-items: center;
    width: 83%;
  }
  .message-input input {
    height: 40px;
    outline: none;
    border: none;
    font-size: 0.875rem;
    width: 100%;
    margin-left: 8px;
    display: block;
  }
  .message-input > input::placeholder {
    font-size: 0.875rem;
  }
  .msg-actions .clear-btn {
    margin-left: 16px;
  }
  .post-btn {
    padding: 0 8px;
    color: #0095F6;
    transition: 0.3s;
    font-weight: 600;
  }
</style>
