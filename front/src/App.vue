<template>
  <v-app>
    <v-app-bar app>
      <v-btn text large @click="activeElement = 'Home'">GOSTATAR</v-btn>

      <v-btn
        text
        small
        v-if="activeElement != 'Home'"
        @click="activeElement = 'NewForm'"
      >Создание форм</v-btn>
      <v-btn
        text
        small
        v-if="activeElement != 'Home'"
        @click="activeElement = 'Routes'"
      >Настройка рабочих процессов</v-btn>
      <v-btn
        text
        small
        v-if="activeElement != 'Home'"
        @click="activeElement = 'UserForm'"
      >Пользователь</v-btn>
      <v-spacer></v-spacer>
      <v-btn text href="https://github.com/microbo-ru/hack_cifri_final" target="_blank">
        <span class="mr-2">code</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container v-if="activeElement == 'NewForm'">
        <NewForm v-if="fetched" />
      </v-container>
      <v-container v-if="activeElement == 'Home'">
        <Home
          @UserForm="activeElement = 'UserForm'"
          @NewForm="activeElement = 'NewForm'"
          @Routes="activeElement = 'Routes'"
        />
      </v-container>
      <v-container v-if="activeElement == 'UserForm'">
        <!-- USER FORM -->
      </v-container>
      <v-container v-if="activeElement == 'Routes'">
        <!-- ROUTE MANAGER -->
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NewForm from "./components/NewForm";
import Home from "./components/Home";
export default {
  name: "App",
  data() {
    return {
      activeElement: "Home"
    };
  },
  components: {
    NewForm,
    Home
  },
  computed: {
    fetched() {
      return this.$store.state.fetched;
    }
  },
  created() {
    this.$store.dispatch("fetchForms");
  }
};
</script>
