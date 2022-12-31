<template>
  <div>
    <v-row class="">
      <v-col class="mx-auto rounded-xl" cols="6">
        <article-card
          class="my-4"
          v-for="(article, i) in articles"
          :key="i"
          :title="article.title"
          :description="article.description"
          :picture="article.picture"
          :author="article.author"
          :createdAt="new Date()"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import ArticleCard from "./ArticleCard.vue";
export default {
  name: "ArticlesFeed",
  props: ["articles"],
  data: () => {
    return {
      articles: null,
    };
  },
  components: {
    ArticleCard,
  },
  // methods: {
  //   async get() {
  //     await axios
  //       .get(`http://54.94.127.207:4444/api/v1/articles`)
  //       .then(async (res) => {
  //         this.articles = await res.data;
  //         return;
  //       })
  //       .catch((error) => console.log(error));
  //   },
  // },
  // created() {
  //   this.get();
  // },
  // computed: {
  //   getUsers() {
  //     this.created();
  //   },
  // },
};
</script>

<style>
</style>
