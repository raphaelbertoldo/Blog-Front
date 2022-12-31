<template>
  <div class="text-center">
    <h1 class="my-6">Explorar</h1>
    <!-- aq{{ users }} -->
    <v-chip-group
      class="d-flex justify-center align-center"
      v-model="selection"
      mandatory
      column
    >
      <div class="mx-auto px-4 d-flex align-space-between">
        <v-chip
          v-for="tag in tags"
          :key="tag"
          active-class="border-1  "
          class="border-1"
          border="left"
          color="primary"
        >
          <!-- :style="'color: black'" -->
          {{ tag }}
        </v-chip>
      </div>
    </v-chip-group>
    <div class="" v-if="selection === 0">
      <ArticlesFeed :articles="articles" />
    </div>
    <div class="mx-auto" v-if="selection === 1">
      <UsersList v-if="users != null" :usersComp="usersComp" :cols="6" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UsersList from "../components/UsersList.vue";
import ArticlesFeed from "../components/ArticlesFeed.vue";
export default {
  name: "Explorar",
  components: { UsersList, ArticlesFeed },
  data: () => {
    return {
      users: null,
      tags: ["Artigos", "Pessoas"],
      selection: 0,
      articles: null,
    };
  },
  methods: {
    async get() {
      this.$nuxt.$loading.start();
      await axios
        .get(`http://54.94.127.207:4444/api/v1/person`)
        .then(async (res) => {
          this.users = await res.data;
          return;
        })
        .catch((error) => console.log(error));

      await axios
        .get(`http://54.94.127.207:4444/api/v1/articles`)
        .then(async (res) => {
          this.articles = await res.data;
          return;
        })
        .catch((error) => console.log(error));
      this.$nuxt.$loading.finish();
    },
    filterUsers() {
      const users = this.users;
      const filterUsers = this.users.filter(
        (a) => a._id != this.$store.state.user.user_id
      );
      console.log(filterUsers.map((a) => a));

      return filterUsers;
    },
  },
  created() {
    this.get();
  },
  computed: {
    getUsers() {
      this.created();
    },
    usersComp() {
      return this.filterUsers();
    },
  },
};
</script>

<style>
</style>
