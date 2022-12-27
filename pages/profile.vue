<template>
  <div>
    <h1>Perfil</h1>
    <v-row class="">
      <!-- {{ user }} -->
      <v-col cols="4" class="mx-auto glass pa-10" v-if="user != null">
        <v-img
          class="mx-auto rounded-circle"
          width="200px"
          src="https://xsgames.co/randomusers/avatar.php?g=male"
        ></v-img>
        <div class="d-flex align-end">
          <span class="mr-1">Nome: </span>
          <h3>{{ user.name }}</h3>
        </div>
        <div class="d-flex align-end">
          <span class="mr-1">Idade: </span>
          <h3>{{ user.age }}</h3>
        </div>
        <div class="d-flex align-end">
          <span class="mr-1">Email: </span>
          <h3>{{ user.email }}</h3>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Profile",
  data: () => {
    return {
      user: null,
    };
  },
  methods: {
    async get() {
      await axios
        .get(
          `http://54.94.127.207:4444/api/v1/person/${this.$store.state.user.user_id}`
        )
        .then(async (res) => {
          this.user = await res.data;
          console.log("🚀 ~ file: profile.vue:30 ~ .then ~ res", this.user);
          return;
        })
        .catch((error) => console.log(error));
    },
  },
  created() {
    this.get();
  },
  computed: {
    getUsers() {
      this.created();
    },
  },
};
</script>

<style>
</style>
