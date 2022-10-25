
<template>
  <div class="card card-w70">

    <div v-if="content.length > 0">
      <div v-for="(block, id) in content" :key="`block-${id}`">
        <app-card-title v-if="block.blockType === 'title'" :title="block.content"></app-card-title>
        <app-card-avatar v-else-if="block.blockType === 'avatar'" :image="block.content"></app-card-avatar>
        <app-card-subtitle v-else-if="block.blockType === 'subtitle'" :subtitle="block.content"></app-card-subtitle>
        <app-card-text v-else :text="block.content"></app-card-text>
      </div>
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
