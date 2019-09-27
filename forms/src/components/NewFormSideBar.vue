<template>
  <v-container>
    <div>
      <json-editor ref="JsonEditor" :schema="schema" v-model="form_data" class="form"></json-editor>
    </div>
  </v-container>
</template>

<script>
import JsonEditor from "vue-json-ui-editor";

const SCHEMA = {
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  class: "form",
  properties: {
    test: {
      type: "object",
      title: "test",
      properties: {
        sazsa: {
          type: "string",
          title: "sazsa"
        }
      }
    },
    sas: {
      type: "string",
      title: "sas"
    }
  }
};

export default {
  name: "NewFormSideBar",
  data() {
    return {
      schema: SCHEMA,
      form_data: {
        test: {
          sazsa: "123"
        },
        sas: "kek"
      }
    };
  },
  components: {
    JsonEditor
  }
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
}
label {
  margin: auto;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.form {
  text-align: left;
  width: 90%;
  margin: auto;
  display: flex;
}
h2 {
  font-size: 1.7em;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0.2em;
}
h2 + small {
  display: block;
  text-align: center;
  margin-bottom: 1.2em;
}
small {
  line-height: 20px;
  display: block;
}
.el-alert {
  margin-bottom: 15px;
}
.el-form .sub {
  margin-left: 10%;
}
.json {
  text-align: left;
}
</style>