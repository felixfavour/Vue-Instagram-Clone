<template>
  <button class="highlight-circle-ctn clear-btn">
    <div class="inner-ctn viewed">
      <img src="@/assets/bitmaps/highlight.jpeg" alt="">
    </div>
    <div class="username">
      Worship.
    </div>
  </button>
</template>

<script>
export default {
  name: 'Highlight'
}
</script>

<style scoped>
  .highlight-circle-ctn {
    margin: 16px 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .inner-ctn {
    height: 87px;
    width: 87px;
    background: radial-gradient(circle at 33% 100%, #fed373 4%, #f15245 30%, #d92e7f 62%, #9b36b7 85%, #515ecf);
    border-radius: 100%;
    display: grid;
    place-items: center;
    margin-bottom: 8px;
  }
  .inner-ctn.viewed {
    height: 87px;
    width: 87px;
    background: var(--border-color);
  }
  .highlight-circle-ctn img {
    width: 77px;
    height: 77px;
    border: 4px solid #FFFFFF;
    object-fit: cover;
    border-radius: 50%;
  }
  .username {
    font-size: 14px;
    color: rgb(66, 66, 66);
    font-weight: 600;
  }
</style>