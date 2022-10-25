<template>
  <div class="container column">
    <app-form
      :options="blockOptions"
      :choiceOption="choiceDefaultOption"
      @submitForm="setResumeBlock"
    ></app-form>
    <app-card :content="resume"></app-card>
  </div>
  <div class="container">
    
    <p>
      <button class="btn primary" @click="loadComments">Загрузить комментарии</button>
    </p>

    <div v-if="loading" class="loader" ></div>

    <div class="card" v-if="comments.length > 0">
      <h2>Комментарии</h2>

      <ul class="list">
        <li class="list-item" v-for="comment in comments" :key="`my-${comment.id}`">
          <div>
            <p><strong>{{ comment.email }}</strong></p>
            <small v-html="comment.body"></small>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import axios from "axios";

// Импорт компонентов
import AppForm from "./AppForm";
import AppCard from "./AppCard";

export default {
  data () {
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
    }
  },
  methods: {
    setResumeBlock (option, textArea) {
      this.resume.push({
        blockType: option,
        content: textArea
      })
    },
   
    async loadComments() {
      try {
        this.loading = true;

        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/comments?_limit=42.json"
        );

        if (!data) {
          throw new Error('Список комментариев пуст')
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
          type: 'danger',
          title: 'Ошибка!',
          text: e.message
        }
        console.log(e.message);
        this.loading = false;
      }
    },
  },
  components: {
    AppForm,
    AppCard
  },
  computed: {
    choiceDefaultOption () {
      return this.blockOptions[0].optionType
    }
  }
}
</script>

<style>
.avatar {
  display: flex;
  justify-content: center;
}

.avatar img {
  width: 150px;
  height: auto;
  border-radius: 50%;
}
</style>
