<template>
  <div :class="{'message-ctn': true, 'received': !sent}">
    <div class="main-message">
      Can I get your email?
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    sent: {
      type: Boolean,
      default: () => true
    }
  }
}
</script>

<style scoped>
  .message-ctn {
    width: 100%;
    display: block;
    margin-bottom: 8px;
  }
  .main-message {
    background: #efefef;
    padding: 16px;
    border: #EFEFEF;
    max-width: 250px;
    border-radius: 22px;
    display: block;
    float: right;
  }
  .received .main-message {
    float: left;
    background: #FFFFFF;
    border: 1px solid #efefef;
  }
</style>