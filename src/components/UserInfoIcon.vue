<template>
  <div class="user-info-icon">
    <div class="inner-ctn">
      <img src="@/assets/bitmaps/profile-image.png" alt="">
    </div>
    <div class="not-image">
      <div class="username">
        raphfelix
      </div>
      <div class="info">
        New to Instagram
      </div>
    </div>
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
  .not-image {
    margin-left: 12px;
    font-weight: 500;
    font-size: 0.875rem;
  }
  .info {
    color: var(--grey-text);
    font-size: 0.75rem;
    margin-top: 2px;
  }
</style>
