<template>
  <v-card class="glass"
    ><v-card-title class="pa-6 d-flex flex-row-reverse">{{
      title
    }}</v-card-title>
    <v-card-text> <v-img :scr="picture"></v-img>{{ description }}</v-card-text>
    <v-card-actions class="d-flex flex-row-reverse justify-space-between">
      <span class="d-flex flex-row-reverse">
        {{ createdAt.getHours() }}:{{ createdAt.getMinutes() }}
        <v-icon small class="ml-4 mr-1">mdi-clock-outline</v-icon>
        {{ createdAt.getDate() }}-{{ createdAt.getMonth() }}-{{
          createdAt.getFullYear()
        }} </span
      ><span class="mr-8">by {{ author }}</span>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  class: "ArticleCard",
  props: ["title", "description", "createdAt", "picture", "author"],
  components: {},
};
</script>

<style>
</style>
