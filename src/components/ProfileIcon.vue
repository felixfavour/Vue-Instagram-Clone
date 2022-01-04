<template>
  <div>

  <img src="@/assets/bitmaps/profile-image.jpeg" alt="">
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
