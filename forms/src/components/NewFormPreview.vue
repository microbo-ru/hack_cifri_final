<template>
  <v-container>
    <div>{{form_data}}</div>
    <v-btn @click="changeActiveForm">Change active from</v-btn>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NewFormPreview",
  computed: {
    form_data() {
      return this.$store.getters.getActiveForm;
    }
  },
  methods: {
    changeActiveForm() {
      let form_number = this.$store.state.activeFormNumber;
      form_number = form_number == 0 ? 1 : 0;
      this.$store.commit("changeActiveForm", { form_number });
    }
  }
};
</script>