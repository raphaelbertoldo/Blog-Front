<template>
  <v-form @submit.prevent="login()" ref="form">
    <div class="no-scroll mt-n16">
      <v-card class="mx-auto glass pa-8" width="370px" dark>
        <!-- aq{{ $nuxt }} -->
        <v-card-title class="d-flex justify-center">Login</v-card-title>
        <!-- <v-img
          class="mx-auto"
          width="178px"
          src="https://image.spreadshirtmedia.net/image-server/v1/designs/172774048,width=178,height=178.png"
        ></v-img> -->
        <v-text-field
          placeholder="E-mail"
          label="E-mail"
          v-model="form.email"
        ></v-text-field>
        <v-text-field
          placeholder="Senha"
          label="Senha"
          v-model="form.password"
        ></v-text-field>
        <v-card-actions class="d-flex justify-center">
          <v-btn class="glass mt-4" type="submit">ENTRAR</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-form>
</template>

<script >
import loginUser from "../services/user";
export default {
  layout: "singlePage",
  name: "Login",
  data: () => {
    return {
      user: null,
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        const email = await loginUser(this.form);
        return this.$router.push("/");
      } catch (error) {
        console.log(error);
      }

      // console.log("🚀 ~ file: login.vue:47 ~ login ~ user", user);
      // this.$store;
      // console.log(
      //   "🚀 ~ file: login.vue:52 ~ login ~ this.$store",
      //   this.$nuxt.$store.state.user
      // );

      // console.log("hereee >>>", this.$store.state);
    },
  },
  computed: {
    handleRouter() {
      // const route = useRoute();
      // return "route";
    },
  },
  // computed: mapState({
  //   // As arrow functions (ou funções de seta) podem tornar o código muito sucinto!
  //   user: (state) => state.user,

  //   // passar o valor da String 'count' é o mesmo que `state => state.count`
  //   countAlias: "user",

  //   // para acessar o estado local com `this`, uma função normal deve ser usada
  //   // countPlusLocalState(state) {
  //   //   return state.user + this.localCount;
  //   // },
  // }),
};
</script>

<style>
</style>
