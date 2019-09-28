<template>
  <v-container>
    <FormGenerator :schema="form_schema" v-model="form_data" />
    <v-btn @click="changeActiveForm">Change active from</v-btn>
  </v-container>
</template>

<script>
import FormGenerator from "./FormGenerator";

export default {
  name: "NewFormPreview",
  data() {
    return {
      form_data: {}
    };
  },
  computed: {
    form_schema() {
      return this.$store.getters.getActiveForm["schema"];
    }
  },
  methods: {
    changeActiveForm() {
      let form_number = this.$store.state.activeFormNumber;
      form_number = form_number == 0 ? 1 : 0;
      this.$store.commit("changeActiveForm", { form_number });
    }
  },
  watch: {
    form_data: function() {}
  },
  components: {
    FormGenerator
  }
};
</script>