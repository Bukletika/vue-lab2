<template>
  <div class="card" v-if="comments.length">
    <h2>Комментарии</h2>

    <ul class="list">
      <app-comment
        :comment="comment"
        v-for="comment in comments"
        :key="`my-${comment.id}`"
      ></app-comment>
    </ul>
  </div>

  <p v-else>
    <button class="btn primary" @click="$emit('load-comments')">
      Загрузить комментарии
    </button>
  </p>
</template>

<script>
import AppComment from "./AppComment.vue";
export default {
  emits: ['load-comments'],
  components: { AppComment },
  props: {
    comments: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
</style>