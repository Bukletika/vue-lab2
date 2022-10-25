<template>
  <div class="avatar">
     <img :src="image" />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>