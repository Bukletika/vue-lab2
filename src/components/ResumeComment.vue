<template>
  <li class="list-item">
    <div>
      <p>
        <strong>{{ comment.email }}</strong>
      </p>
      <small v-html="comment.body"></small>
    </div>
  </li>
</template>

<script>
export default {
    props: {
    comment: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped>
</style>