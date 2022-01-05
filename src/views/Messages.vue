<template>
  <div class="section page">
    <div class="inner">
      <div class="left-side">
        <div class="ls-header">
          <button class="account clear-btn">
            <span class="username">
              raphfelix
            </span>
            <svg aria-label="Down Chevron Icon" class="_8-yf5 " color="#262626" fill="#262626" height="20" role="img" viewBox="0 0 24 24" width="20"><path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path></svg>
          </button>
          <button class="clear-btn new-message-btn">
            <svg aria-label="New message" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.202 3.203H5.25a3 3 0 00-3 3V18.75a3 3 0 003 3h12.547a3 3 0 003-3v-6.952" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 012.004 0l1.224 1.225a1.417 1.417 0 010 2.004z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.848" x2="20.076" y1="3.924" y2="7.153"></line></svg>
          </button>
        </div>
        <div class="conversations">
          <Conversation v-for="conversation in 20" :key="conversation" />
        </div>
      </div>
      <div class="right-side">
        <div v-if="!messageSelected" class="no-conversation-selected empty-state">
          <img src="@/assets/bitmaps/send.png" alt="">
          <div class="header-text">
            Your messages
          </div>
          <div class="sub-text">
            Send private photos and messages to a friend or group.
          </div>
          <button class="blue-btn">
            Send message
          </button>
        </div>
        <ConversationMessages v-if="messageSelected" />
      </div>
    </div>
  </div>
</template>

<script>
import Conversation from '../components/Conversation.vue'
import ConversationMessages from '../components/ConversationMessages.vue'
export default {
  components: { Conversation, ConversationMessages },
  name: 'Messages',
  data () {
    return {
      messageSelected: true
    }
  }
}
</script>

<style scoped>
  .inner {
    border: 1px solid var(--border-color);
    border-radius: 3px;
    display: flex;
  }
  .left-side {
    right: 30px;
    width: 349px;
    border-right: 1px solid var(--border-color);
  }
  .conversations {
    overflow-y: scroll;
    height: calc(100vh - 200px);
    padding: 10px 0;
  }
  .ls-header {
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0 20px;
    border-bottom: 1px solid var(--border-color);
  }
  .account {
    display: flex;
    justify-content: center;
    font-weight: 500;
    color: #000;
    font-size: 1rem;
  }
  .account svg {
    transform: rotate(180deg);
    margin-left: 8px;
  }
  .new-message-btn {
    position: absolute;
    right: 20px;
  }
  .right-side {
    display: grid;
    width: calc(100% - 350px);
    place-items: center;
  }
  .empty-state {
    text-align: center;
  }
  .empty-state > .header-text {
    font-size: 1.4rem;
    margin: 8px 0;
    margin-top: 12px;
    font-weight: 300;
  }
  .empty-state > .sub-text {
    font-size: 0.875rem;
    margin: 6px 0;
    margin-bottom: 24px;
    color: #8E8E8E;
  }
  .empty-state .blue-btn {
    background: var(--blue-text);
    color: #FFFFFF;
    padding: 5px 9px;
    border: none;
    font-weight: 500;
    border-radius: 4px;
    font-size: 0.875rem;
  }
  .conversation {

  }

</style>
