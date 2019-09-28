import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
const server_port = process.env.VUE_APP_SERVER_PORT || 5000;
const server_url = process.env.VUE_APP_SERVER_URL || "http://localhost";
console.log(process.env);
const url = `${server_url}:${server_port}/forms`;

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
      state.forms = Array.from(payload["res"]["data"]);
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
