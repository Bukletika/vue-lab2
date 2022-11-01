
<template>
  <div class="card card-w70">

    <div v-if="content.length">
        <component
          v-for="(block, id) in content"
          :key="`block-${id}`"
          :is="`resume-card-${block.blockType}`"
          v-bind="{value: block.content}"
        ></component>
    </div>

    <h3 v-else>Добавьте первый блок, чтобы увидеть результат</h3>

  </div>
</template>

<script>
// Импорт компонентов
import ResumeCardTitle from "./ResumeCardTitle";
import ResumeCardAvatar from "./ResumeCardAvatar";
import ResumeCardSubtitle from "./ResumeCardSubtitle";
import ResumeCardText from "./ResumeCardText";

export default {
  props: {
    content: {
      type: Array,
    },
  },

  components: {
    ResumeCardTitle,
    ResumeCardAvatar,
    ResumeCardSubtitle,
    ResumeCardText
  },
}
</script>

<style>
</style>
