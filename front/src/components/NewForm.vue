<template>
  <v-container>
    <v-row>
      <v-col>
        <NewFormPreview />
      </v-col>
      <v-col>
        <NewFormSideBar />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8">
        <FormsPreview @newActiveForm="selected_new_active_form" text="изменить форму" />
      </v-col>
      <v-col md="4">
        <div class="d-flex">
          <v-btn @click="append_new_form">Добавить новую форму</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewFormSideBar from "./NewFormSideBar";
import NewFormPreview from "./NewFormPreview";
import FormsPreview from "./FormsPreview";
export default {
  name: "NewForm",
  components: {
    NewFormSideBar,
    NewFormPreview,
    FormsPreview
  },
  methods: {
    selected_new_active_form(form_number) {
      this.$store.commit("changeActiveForm", { form_number });
    },
    append_new_form() {
      this.$store.commit("appendNewForm");
    }
  }
};
</script>