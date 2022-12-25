<template>
  <v-app dark>
    <v-navigation-drawer permanent app mini-variant expand-on-hover>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="red class align-center justify-center flex">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-view-dashboard",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-file-document-plus",
          title: "NewArticle",
          to: "/create-article",
        },
        {
          icon: "mdi-account",
          title: "Profile",
          to: "/profile",
        },
        {
          icon: "mdi-logout",
          title: "Logout",
          to: "/login",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
