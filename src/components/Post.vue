<template>
  <div class="post-ctn">
    <div class="post-profile">
      <UserInfoIcon />
      <button class="clear-btn">
        <MoreIcon />
      </button>
    </div>
    <div class="post-media">
      <PostImage />
    </div>
    <div class="post-desc">
      <div class="post-actions">
        <div class="actions-left">
          <button>
            <LikeIcon />
          </button>
          <button>
            <CommentIcon />
          </button>
          <button>
            <ShareIcon />
          </button>
        </div>
        <div class="actions-right">
          <button>
            <SaveIcon />
          </button>
        </div>
      </div>
      <div class="likes-count">
        5,875 likes
      </div>
      <div class="post-caption">
        <div class="username">
          raphfelix
        </div>
        <div class="main-caption">
          Happy New Year! Swipe for more!
        </div>
      </div>
      <button class="clear-btn">
        View all 30 comments
      </button>
      <div class="post-time">
        11 HOURS AGO
      </div>
    </div>
    <div class="post-comment">
      <button class="clear-btn">
        <EmojiIcon />
      </button>
      <input v-model.trim="commentText" placeholder="Add a comment..." type="text">
      <button :class="{'clear-btn': true, 'post-btn': true, fade: commentText.length <= 0}">
        Post
      </button>
    </div>
  </div>
</template>

<script>
import CommentIcon from './CommentIcon.vue'
import EmojiIcon from './EmojiIcon.vue'
import LikeIcon from './LikeIcon.vue'
import MoreIcon from './MoreIcon.vue'
import SaveIcon from './SaveIcon.vue'
import ShareIcon from './ShareIcon.vue'
import UserInfoIcon from './UserInfoIcon.vue'
import PostImage from './PostImage.vue'
export default {
  name: 'Post',
  components: { MoreIcon, UserInfoIcon, LikeIcon, SaveIcon, CommentIcon, ShareIcon, EmojiIcon, PostImage },
  data () {
    return {
      commentText: ''
    }
  }
}
</script>

<style scoped>
  .post-ctn {
    margin-top: 20px;
    width: 100%;
    border: 1px solid var(--border-color);
  }
  .post-profile {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
  }
  .post-desc {
    padding: 0 12px;
  }
  .post-desc > * {
    margin: 4px 0;
    font-size: 0.875rem;
  }
  .post-actions {
    display: flex;
    justify-content: space-between;
    margin: 12px 0;
    margin-top: 16px;
  }
  .post-actions button {
    outline: none;
    background: none;
    border: none;
    padding: 0;
  }
  .post-actions .actions-left button {
    margin-right: 12px;
  }
  .post-actions .actions-right button {
    margin-right: 0;
  }
  .post-caption {
    display: inline-flex;
  }
  .post-caption > .username {
    font-weight: 600;
    margin-right: 6px;
  }
  .post-desc > .clear-btn {
    display: block;
  }
  .likes-count {
    font-weight: 600;
  }
  .post-time {
    font-size: 0.65rem;
    color: var(--grey-text);
    text-transform: uppercase;
    margin-top: 8px;
  }
  .post-comment {
    border-top: 1px solid var(--border-color);
    padding: 0 12px;
    height: 55px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .post-comment > input {
    width: 82%;
    height: 90%;
    outline: none;
    border: none;
    font-size: 0.875rem;
  }
  .post-comment > input::placeholder {
    font-size: 0.875rem;
  }
  .post-btn {
    padding: 0 8px;
    color: #0095F6;
    transition: 0.3s;
    font-weight: 600;
  }
</style>
