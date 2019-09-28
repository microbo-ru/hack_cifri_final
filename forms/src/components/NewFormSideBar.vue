<template>
  <v-container>
    <v-row>
      <v-jsoneditor v-model="form_data" :options="opt" />
    </v-row>
    <v-row>
      <v-btn @click="apply">Apply changes</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import COMPONENT_PROPERTIES from "./ComponentsProperties";
import VJsoneditor from "v-jsoneditor/src/index";
import { mapState } from "vuex";
export default {
  name: "NewFormSideBar",
  data() {
    return {
      form_data: this.$store.getters.getActiveForm,
      opt: {
        onChangeJson: this.changedForm
      }
    };
  },
  watch: {
    form_data: function() {}
  },
  methods: {
    apply() {
      this.$store.commit("changeForm", { form: this.form_data });
    }
  },
  computed: {},
  components: {
    VJsoneditor
  },
  created() {
    this.$store.subscribe((mutation, store) => {
      if (mutation.type === "changeActiveForm") {
        this.form_data = this.$store.getters.getActiveForm;
      }
    });
  }
};
</script>

<style>
</style>