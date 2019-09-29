<template>
  <v-container>
    <v-row>
      <prism-editor v-model="yaml" :line-numbers="false" class="editor" />
    </v-row>
    <v-row>
      <v-btn @click="apply">Apply changes</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import VJsoneditor from "v-jsoneditor/src/index";
import PrismEditor from "vue-prism-editor";
import parser from "./yaml-to-json";

export default {
  name: "NewFormSideBar",
  data() {
    return {
      form_data: this.$store.getters.getActiveForm,
      opt: {
        onChangeJson: this.changedForm
      },
      yaml: parser.json_to_yaml(this.$store.getters.getActiveForm)
    };
  },
  watch: {},
  methods: {
    apply() {
      let json = parser.yaml_to_json(this.yaml.trim(), {
        id: (Math.random() * 100000) | 0
      });
      this.form_data = json;
      this.$store.commit("changeForm", { form: this.form_data });
    }
  },
  computed: {},
  components: {
    VJsoneditor,
    PrismEditor
  },
  created() {
    this.$store.subscribe(mutation => {
      if (mutation.type === "changeActiveForm") {
        this.form_data = this.$store.getters.getActiveForm;
        this.yaml = parser.json_to_yaml(this.form_data);
      } else if (mutation.type === "appendNewForm") {
        this.form_data = this.$store.getters.getActiveForm;
        this.yaml = parser.json_to_yaml(this.form_data);
      }
    });
  }
};
</script>

<style>
.editor {
  width: 300px;
  height: 300px;
}
</style>