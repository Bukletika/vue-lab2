<template>
  <div class="container column">
    <resume-form
      :options="blockOptions"
      :choiceOption="choiceDefaultOption"
      @submitForm="setResumeBlock"
    ></resume-form>
    <resume-card :content="resume"></resume-card>
  </div>
  <div class="container">
    <app-loader v-if="loading"></app-loader>
    <resume-comments v-else :comments="comments" @load-comments="loadComments"></resume-comments>
  </div>
</template>

<script>
import axios from "axios";

// Импорт компонентов
import ResumeForm from "./components/ResumeForm";
import ResumeCard from "./components/ResumeCard";
import ResumeComments from "./components/ResumeComments.vue";
import AppLoader from "./components/AppLoader";

export default {
  data() {
    return {
      blockOptions: [
        {
          optionType: "title",
          optionValue: "Заголовок",
        },
        {
          optionType: "subtitle",
          optionValue: "Подзаголовок",
        },
        {
          optionType: "avatar",
          optionValue: "Аватар",
        },
        {
          optionType: "text",
          optionValue: "Текст",
        },
      ],
      resume: [],
      loading: false,
      comments: [],
    };
  },
  methods: {
    setResumeBlock(option, textArea) {
      this.resume.push({
        blockType: option,
        content: textArea,
      });
    },

    async loadComments() {
      try {
        this.loading = true;

        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/comments?_limit=42.json"
        );

        if (!data) {
          throw new Error("Список комментариев пуст");
        }

        this.comments = Object.keys(data).map((key) => {
          return {
            id: key,
            ...data[key],
          };
        });

        this.loading = false;
      } catch (e) {
        this.alert = {
          type: "danger",
          title: "Ошибка!",
          text: e.message,
        };
        console.log(e.message);
        this.loading = false;
      }
    },
  },
  components: {
    ResumeForm,
    ResumeCard,
    ResumeComments,
    AppLoader,
  },
  computed: {
    choiceDefaultOption() {
      return this.blockOptions[0].optionType;
    },
  },
};
</script>

<style>
</style>
