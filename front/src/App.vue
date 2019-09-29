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

    <v-content height="100%" background-color="grey">
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
        <UserForm />
      </v-container>
      <v-container v-if="activeElement == 'Routes'">
        <WorkProcess />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NewForm from "./components/NewForm";
import Home from "./components/Home";
import WorkProcess from "./components/WorkProcess";
import UserForm from "./components/UserForm";
export default {
  name: "App",
  data() {
    return {
      activeElement: "Home"
    };
  },
  components: {
    NewForm,
    Home,
    WorkProcess,
    UserForm
  },
  computed: {
    fetched() {
      return this.$store.state.fetched;
    }
  },
  created() {
    this.$vuetify.theme.dark = false;
    this.$vuetify.theme.background = "grey";
    this.$store.dispatch("fetchForms");
    this.$store.dispatch("fetchBadForms");
  }
};
</script>
