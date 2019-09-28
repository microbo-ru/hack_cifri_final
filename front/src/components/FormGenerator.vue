<template>
  <v-container>
    <component
      v-for="(field, index) in schema"
      :key="index"
      :is="field.fieldType"
      :value="formData[field.name]"
      @input="updateForm(field.name, $event)"
      v-bind="field"
    ></component>
  </v-container>
</template>

<script>
import NumberInput from "./form_components/NumberInput";
import TextInput from "./form_components/TextInput";

export default {
  name: "FormGenerator",
  components: { TextInput, NumberInput },
  props: ["schema", "value"],
  data() {
    return {
      formData: this.value || {}
    };
  },
  methods: {
    updateForm(fieldName, value) {
      this.$set(this.formData, fieldName, value);
      this.$emit("input", this.formData);
    }
  }
};
</script>