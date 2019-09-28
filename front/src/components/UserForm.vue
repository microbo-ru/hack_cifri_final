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
        <FormsPreview @newActiveForm="selected_new_active_form" text="Заказать услугу" />
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import FormGenerator from "./FormGenerator";
import FormsPreview from "./FormsPreview";
import axios from "axios";
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
    async sendForm() {
      let req = Object.assign(
        {},
        {
          requestId: {
            type: "String",
            value: (Math.random() * 10000) | 0
          }
        }
      );

      for (let key in this.form_data) {
        req[key] = {
          type: "String",
          value: this.form_data[key]
        };
      }

      let url = "http://84.201.143.226:8080/engine-rest/process-definition";
      let res = await axios.get(`${url}`);
      let processDefinition = res.data[2].id;
      let opt = {
        headers: {
          "Content-type": "application/json"
        }
      };
      console.log(
        JSON.stringify({
          variables: req
        })
      );
      axios
        .post(`${url}/${processDefinition}/submit-form`, opt, {
          variables: req
        })
        .then(res => console.log(res))
        .catch(console.log);
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