import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forms: [
      {
        name_field: {
          title: "enter your name",
          component_type: "NameInput"
        },
        passport_field: {
          title: "enter your pass",
          component_type: "PassportInput"
        }
      },
      {
        sas_field: {
          title: "kek"
        }
      }
    ],
    activeForm: {
      name_field: {
        title: "enter your name",
        component_type: "NameInput"
      },
      passport_field: {
        title: "enter your pass",
        component_type: "PassportInput"
      }
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

      console.log("changeActiveForm");
    },
    changeForm(state, payload) {
      let form = payload["form"];
      state.forms[state.activeFormNumber] = form;
      Vue.set(state, "activeForm", form);
      console.log("changeForm");
    }
  },
  actions: {}
});
