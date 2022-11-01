<template>
  <div class="card" v-if="comments.length">
    <h2>Комментарии</h2>

    <ul class="list">
      <resume-comment
        :comment="comment"
        v-for="comment in comments"
        :key="`my-${comment.id}`"
      ></resume-comment>
    </ul>
  </div>

  <p v-else>
    <button class="btn primary" @click="$emit('load-comments')">
      Загрузить комментарии
    </button>
  </p>
</template>

<script>
import ResumeComment from "./ResumeComment.vue";
export default {
  emits: ['load-comments'],
  components: { ResumeComment },
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