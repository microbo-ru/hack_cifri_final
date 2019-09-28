<template>
  <v-container>
    <v-row>
      <v-container v-if="selected_form != -1">
        <FormGenerator :schema="form_schema" v-model="form_data" />
        <v-btn @click="sendForm">Отправить</v-btn>
      </v-container>
    </v-row>
    <v-row>
      <v-container>
        <FormsPreview @newActiveForm="selected_new_active_form" />
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import FormGenerator from "./FormGenerator";
import FormsPreview from "./FormsPreview";
export default {
  name: "UserComponent",
  data() {
    return {
      form_data: {},
      selected_form: -1
    };
  },
  computed: {
    form_schema() {
      return this.$store.getters.getActiveForm["schema"];
    }
  },
  methods: {
    sendForm() {
      console.log(this.form_data);
    },
    selected_new_active_form(form_number) {
      this.$store.commit("changeActiveForm", { form_number });
      this.selected_form = form_number;
    }
  },
  watch: {
    form_data: function() {}
  },
  mounted() {
    console.log("mounted");
  },
  components: {
    FormGenerator,
    FormsPreview
  }
};
</script>