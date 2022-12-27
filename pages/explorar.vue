<template>
  <div class="text-center">
    <h1>Explorar</h1>
    <v-row class="mt-4" v-if="users != null">
      <v-col cols="6" class="pa-6" v-for="(user, i) in users" :key="i">
        <!-- {{ user }} -->
        <v-card class="glass mx-1 pa-14 d-flex align-center">
          <v-img
            width="120px"
            :aspect-ratio="1 / 1"
            class="mx-auto rounded-circle"
            src="https://images.pexels.com/photos/858115/pexels-photo-858115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          ></v-img>
          <div class="mx-6">
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
            <v-btn class="mt-6 glass">SEGUIR</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Explorar",
  data: () => {
    return {
      users: null,
    };
  },
  methods: {
    async get() {
      await axios
        .get(`http://54.94.127.207:4444/api/v1/person`)
        .then(async (res) => {
          this.users = await res.data;
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
