
<template>
  <div class="card card-w70">

    <div v-if="content.length">
        <component
          v-for="(block, id) in content"
          :key="`block-${id}`"
          :is="`app-card-${block.blockType}`"
          v-bind="{value: block.content}"
        ></component>
    </div>

    <h3 v-else>Добавьте первый блок, чтобы увидеть результат</h3>

  </div>
</template>

<script>
// Импорт компонентов
import AppCardTitle from "./AppCardTitle";
import AppCardAvatar from "./AppCardAvatar";
import AppCardSubtitle from "./AppCardSubtitle";
import AppCardText from "./AppCardText";

export default {
  props: {
    content: {
      type: Array,
    },
  },

  components: {
    AppCardTitle,
    AppCardAvatar,
    AppCardSubtitle,
    AppCardText
  },
}
</script>

<style>
</style>
