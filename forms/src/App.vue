<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Forms</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="https://github.com/microbo-ru/hack_cifri_final" target="_blank">
        <span class="mr-2">code</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <NewForm />
    </v-content>
  </v-app>
</template>

<script>
import NewForm from "./components/NewForm";

export default {
  name: "App",
  components: {
    NewForm
  },
  data: () => ({
    //
  })
};
</script>
