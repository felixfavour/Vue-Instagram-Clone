<template>
  <div :class="{ 'post-grid-ctn': true, 'bigger-grid': size === 'x2' }">
    <div class="image">
      <div class="post-type">
        <svg v-if="size === 'x2'" aria-label="Video" class="_8-yf5 edmGD" color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M5.888 22.5a3.46 3.46 0 01-1.721-.46l-.003-.002a3.451 3.451 0 01-1.72-2.982V4.943a3.445 3.445 0 015.163-2.987l12.226 7.059a3.444 3.444 0 01-.001 5.967l-12.22 7.056a3.462 3.462 0 01-1.724.462z"></path></svg>
        <svg v-else aria-label="Carousel" class="_8-yf5 edmGD" color="#ffffff" fill="#ffffff" height="28" role="img" viewBox="0 0 48 48" width="28"><path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path></svg>
      </div>
      <!-- <video v-if="size === 'x2'" autoplay controls>
        <source src="@/assets/videos/lagos-video.mp4" type="">
      </video> -->
      <img src="@/assets/bitmaps/profile-image.png" alt="">
    </div>
    <div class="image-overlay">
      <div class="post-count">
        <div class="likes">
          <span>
            <svg aria-label="Activity Feed" class="_8-yf5 " color="#FFF" fill="#FFF" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>          </span>
          <span>
            6,500
          </span>
        </div>
        <div class="comments">
          <span>
            <svg aria-label="Comment" class="_8-yf5 " color="none" fill="none" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="#FFFFFF" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
          </span>
          <span>
            124
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostGrid',
  props: {
    size: {
      type: String,
      default: () => 'x1'
    }
  }
}
</script>

<style scoped>
  .post-grid-ctn {
    flex-basis: 32%;
    margin-right: 2%;
    margin-bottom: 20px;
    position: relative;
    transition: 0.3s;
  }
  .post-grid-ctn.bigger-grid {
    flex-basis: 66.2%;
    margin-right: 0;
  }
  .post-grid-ctn.third {
    margin-right: 0;
  }
  .image {
    width: 100%;
    cursor: pointer;
    z-index: 999;
  }
  .image > img,  .image > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    display: block;
  }
  .image:hover + .image-overlay {
    display: grid;
    opacity: 1;
  }
  .post-type {
    position: absolute;
    right: 16px;
    top: 16px;
  }
  .post-type > svg {
    filter: drop-shadow(0 0 0.75px rgba(0,0,0,.42)) drop-shadow(0 1px 0.5px rgba(0,0,0,.18)) drop-shadow(0 2px 3px rgba(0,0,0,.2));
    display: block;
    position: relative;
  }
  .image-overlay:hover {
    display: grid;
  }
  .image-overlay {
    cursor: pointer;
    background: #00000044;
    color: #FFFFFF;
    place-items: center;
    position: absolute;
    inset: 0;
    bottom: 3px;
    transition: 1000s;
    opacity: 0;
    display: none;
  }
  .post-grid-ctn.bigger-grid .image-overlay {
    bottom: 3px;
  }
  .post-count {
    display: flex;
  }
  .post-count > div {
    display: flex;
    align-items: center;
  }
  .post-count > div > span:nth-child(1) {
    margin-right: 4px;
  }
  .likes {
    margin-right: 20px;
  }
</style>
