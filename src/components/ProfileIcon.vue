<template>
  <div>

  <img src="@/assets/bitmaps/profile-image.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'ProfileIcon',
  props: {
    active: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>
