<template>
  <v-app dark class="d-flex">
    <v-main class="d-flex align-center bg-1">
      <v-container class="class align-center justify-center flex">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {};
  },
};
</script>
