import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
const url = "http://localhost:5000/form_list";

export default new Vuex.Store({
  state: {
    forms: [],
    activeForm: {},
    activeFormNumber: 0,
    fetched: false
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
    },
    fetchedForms(state, payload) {
      state.forms = Array.from(payload["res"]["data"]["forms"]);
      state.fetched = true;
      state.activeFormNumber = 0;
      state.activeForm = state.forms[state.activeFormNumber];
    }
  },
  actions: {
    async fetchForms() {
      let res = await axios.get(`${url}`);
      this.commit("fetchedForms", { res });
    },
    commitForms() {
      axios.post(`${url}`, { forms: this.state.forms });
    }
  }
});
