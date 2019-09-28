<template>
  <v-container>
    <FormGenerator :schema="form_schema" v-model="form_data" />

    <v-btn @click="$store.dispatch('commitForms')">Save form</v-btn>
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
  methods: {},
  watch: {
    form_data: function() {}
  },
  components: {
    FormGenerator
  }
};
</script>