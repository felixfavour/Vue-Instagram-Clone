<template>
  <div class="user-info-icon">
    <div class="inner-ctn">
      <img src="@/assets/bitmaps/profile-image.jpeg" alt="">
    </div>
    <span class="username">
      raphfelix
    </span>
  </div>
</template>

<script>
export default {
  name: 'UserInfoIcon'
}
</script>

<style scoped>
  .user-info-icon {
    display: flex;
    align-items: center;
  }
  .inner-ctn {
    height: 40px;
    width: 40px;
    background: radial-gradient(circle at 33% 100%, #fed373 4%, #f15245 30%, #d92e7f 62%, #9b36b7 85%, #515ecf);
    border-radius: 100%;
    display: grid;
    place-items: center;
  }
  .inner-ctn img {
    width: 32px;
    height: 32px;
    border: 2px solid #FFFFFF;
    object-fit: cover;
    border-radius: 50%;
  }
  .username {
    margin-left: 12px;
  }
</style>
