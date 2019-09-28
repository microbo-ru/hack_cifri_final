<template>
  <div id="app">
    <h2>Рабочие процессы</h2>
    <div id="canvas"></div>
  </div>
</template>

<script>
import BpmnViewer from "bpmn-js";
import axios from "axios";
export default {
  name: "WorkProcess",
  data() {
    return {
      viewer: null,
      fetched: false
    };
  },
  methods: {
    async fetchXML() {
      let processDefenition = "invoice:1:7735df55-e224-11e9-9321-0242ac170006";
      let options = {
        headers: {
          "Content-Type": "application/json"
        },
        method: "GET"
      };
      let url = "http://127.0.0.1:8080";
      let res = await axios.get(
        `${url}/engine-rest/process-definition/${processDefenition}/xml`,
        options
      );

      this.viewer.importXML(res["data"]["bpmn20Xml"], err => {
        if (!err) {
          this.viewer.get("canvas").zoom("fit-viewport");
        } else {
          console.err("something went wrong:", err);
        }
      });
    }
  },
  mounted() {
    this.viewer = new BpmnViewer({ container: "#canvas" });

    this.fetchXML();
  }
};
</script>

<style  scoped>
#canvas {
  height: 50rem;
}
</style>