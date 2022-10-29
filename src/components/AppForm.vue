<template>
  <form class="card card-w30" @submit.prevent="createResumeBlock">

    <div class="form-control">
      <label for="type">Тип блока</label>
      <select id="type" v-model="choiceDefaultOption">
        <option
          v-for="(option, id) in options"
          :value="option.optionType"
          :key="`option-${id}`"
        >
          {{ option.optionValue }}
        </option>
      </select>
    </div>

    <div class="form-control">
      <label for="value">Значение</label>
      <textarea id="value" rows="3" v-model="textArea"></textarea>
    </div>

    <app-button :disabled="isBtnDisabled"></app-button>
  </form>
</template>

<script>
// Импорт компонентов
import AppButton from "./AppButton";

export default {
  emits: ['submitForm'],
  data () {
    return {
      textArea: '',
      choiceDefaultOption: this.choiceOption
    }
  },
  props: {
    options: Array,
    choiceOption: String
  },
  methods: {
    createResumeBlock (evt) {
      if (!this.isBtnDisabled) {
        this.$emit('submitForm', this.choiceDefaultOption, this.textArea)
        this.textArea = ''

        this.choiceDefaultOption = this.options[0].optionType
      } else {
        return false
      }
    }
  },
  components: {
    AppButton
  },
  computed: {
    isBtnDisabled () {
      return this.textArea.length <= 3
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
