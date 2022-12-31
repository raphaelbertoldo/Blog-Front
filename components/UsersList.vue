<template>
  <div>
    <v-row class="mt-4">
      <v-col :cols="cols" class="pa-6" v-for="(user, i) in usersComp" :key="i">
        <v-card class="glass mx-1 pa-14 d-flex align-center">
          <v-img
            width="120px"
            :aspect-ratio="1 / 1"
            class="mx-auto rounded-circle"
            :src="user.picture"
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
            <v-btn block class="mt-6 glass">SEGUIR</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "UsersList",
  props: ["usersComp", "cols"],
};
</script>

<style>
</style>
