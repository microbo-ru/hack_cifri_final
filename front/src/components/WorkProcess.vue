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
      let processDefenition = "invoice:2:8efcaf86-e1b7-11e9-bb2f-0242ac120003";
      let options = {
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        method: "GET"
      };
      let res = await axios.get(
        `/engine-rest/process-definition/${processDefenition}/xml`,
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