import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forms: [
      {
        schema: [
          {
            fieldType: "TextInput",
            placeholder: "name",
            label: "Name",
            name: "name"
          },
          {
            fieldType: "NumberInput",
            placeholder: "Passport",
            name: "passport",
            label: "passport data",
            minValue: 1000000000
          }
        ]
      },
      {
        schema: [
          {
            fieldType: "TextInput",
            placeholder: "address",
            label: "address",
            name: "address"
          }
        ]
      }
    ],
    activeForm: {
      schema: [
        {
          fieldType: "TextInput",
          placeholder: "name",
          label: "Name",
          name: "name"
        },
        {
          fieldType: "NumberInput",
          placeholder: "Passport",
          name: "passport",
          label: "passport data",
          minValue: 1000000000
        }
      ]
    },
    activeFormNumber: 0
  },
  getters: {
    getActiveForm(state) {
      return state.activeForm;
    }
  },
  mutations: {
    changeActiveForm(state, payload) {
      let form_number = payload["form_number"];

      state.activeFormNumber = form_number;
      Vue.set(state, "activeForm", state.forms[state.activeFormNumber]);
    },
    changeForm(state, payload) {
      let form = payload["form"];
      state.forms[state.activeFormNumber] = form;
      Vue.set(state, "activeForm", form);
    }
  },
  actions: {}
});
