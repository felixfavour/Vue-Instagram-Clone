<template>
  <div class="large-profile-icon">
    <router-link to="#">
      <div class="image-ctn">
        <img src="@/assets/bitmaps/image1.png" alt="">
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LargeProfileIcon'
}
</script>

<style scoped>
  .image-ctn {
    height: 168px;
    width: 168px;
    background: radial-gradient(circle at 33% 100%, #fed373 4%, #f15245 30%, #d92e7f 62%, #9b36b7 85%, #515ecf);
    border-radius: 100%;
    display: grid;
    place-items: center;
    margin-bottom: 8px;
    transition: 0.2s;
  }
  .image-ctn.viewed {
    height: 166px;
    width: 166px;
    background: var(--border-color);
  }
  .image-ctn > img {
    width: 150px;
    height: 150px;
    border: 5px solid #FFFFFF;
    object-fit: cover;
    border-radius: 50%;
  }
</style>
