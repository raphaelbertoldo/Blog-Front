<template>
  <v-form @submit.prevent="login()" ref="form">
    <div class="no-scroll mt-n16">
      <v-card class="mx-auto glass pa-8" width="370px" dark>
        <!-- aq{{ $store }} -->
        <v-card-title class="d-flex justify-center">Login</v-card-title>
        <!-- <v-img
          class="mx-auto"
          width="178px"
          src="https://image.spreadshirtmedia.net/image-server/v1/designs/172774048,width=178,height=178.png"
        ></v-img> -->
        <v-text-field placeholder="E-mail" label="E-mail"></v-text-field>
        <v-text-field placeholder="Senha" label="Senha"></v-text-field>
        <v-card-actions class="d-flex justify-center">
          <v-btn class="glass mt-4" type="submit">ENTRAR</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-form>
</template>

<script>
export default {
  layout: "singlePage",
  name: "Login",
  methods: {
    login() {
      console.log(
        "hereee >>>",
        this.$store.commit("setUser", { name: "oldnaiht" })
      );
    },
  },
};
</script>

<style>
</style>
