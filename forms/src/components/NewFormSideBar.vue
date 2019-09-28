<template>
  <v-container>
    <div>
      <v-jsoneditor v-model="form_data" :options="opt" />
    </div>
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
    form_data: function() {
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