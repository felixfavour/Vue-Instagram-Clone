<template>
  <div class="story-circle-ctn">
    <div class="inner-ctn">
      <img src="@/assets/bitmaps/profile-image.jpeg" alt="">
    </div>
    <div class="username">
      raphfelix
    </div>
  </div>
</template>

<script>
export default {
  name: 'StoryCircle'
}
</script>

<style scoped>
  .story-circle-ctn {
    margin: 16px 12px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .inner-ctn {
    height: 64px;
    width: 64px;
    background: radial-gradient(circle at 33% 100%, #fed373 4%, #f15245 30%, #d92e7f 62%, #9b36b7 85%, #515ecf);
    border-radius: 100%;
    display: grid;
    place-items: center;
    margin-bottom: 8px;
  }
  .story-circle-ctn img {
    width: 56px;
    height: 56px;
    border: 2px solid #FFFFFF;
    object-fit: cover;
    border-radius: 50%;
  }
  .username {
    font-size: 14px;
    color: rgb(66, 66, 66);
  }
</style>